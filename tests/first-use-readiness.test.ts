import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

type DriveManifest = {
  files: Array<{
    lesson: number;
    output?: string;
    skip?: boolean;
  }>;
};

type LessonSources = {
  lessons: Array<{
    lesson: number;
    notability_pdf?: string;
    notability_pdfs?: string[];
    title: string;
    transcript: string | null;
    status: string;
  }>;
};

type LinkReference = {
  file: string;
  target: string;
  resolved: string;
};

const repoRoot = path.resolve(import.meta.dir, '..');
const notabilityOutputDir = 'artifacts/notability-pdfs';

const readText = (relativePath: string) =>
  readFileSync(path.join(repoRoot, relativePath), 'utf8');

const readJson = <T>(relativePath: string): T =>
  JSON.parse(readText(relativePath)) as T;

const gitFiles = (patterns: string[]) =>
  execFileSync('git', ['ls-files', '-z', '--', ...patterns], {
    cwd: repoRoot,
    encoding: 'utf8',
  })
    .split('\0')
    .filter(Boolean)
    .sort();

const isExternalOrPageOnlyTarget = (target: string) =>
  /^(?:[a-z][a-z0-9+.-]*:|#)/i.test(target);

const stripDecoration = (target: string) =>
  target
    .replace(/^<(.+)>$/, '$1')
    .replace(/[?#].*$/, '');

const decodeTarget = (target: string) => {
  try {
    return decodeURIComponent(target);
  } catch {
    return target;
  }
};

const resolveLocalLink = (sourceFile: string, rawTarget: string): LinkReference | null => {
  const undecorated = stripDecoration(rawTarget.trim());

  if (!undecorated || isExternalOrPageOnlyTarget(undecorated)) {
    return null;
  }

  const decodedTarget = decodeTarget(undecorated);
  const resolved = path.normalize(path.join(path.dirname(sourceFile), decodedTarget));

  return {
    file: sourceFile,
    target: rawTarget,
    resolved,
  };
};

const markdownTargets = (text: string) =>
  Array.from(text.matchAll(/!?\[[^\]]*]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g)).flatMap(
    ([, target]) => (target ? [target] : []),
  );

const htmlTargets = (text: string) =>
  Array.from(text.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)).flatMap(([, target]) =>
    target ? [target] : [],
  );

const localLinksInFile = (file: string) => {
  const text = readText(file);
  const targets = file.endsWith('.html')
    ? [...markdownTargets(text), ...htmlTargets(text)]
    : markdownTargets(text);

  return targets
    .map((target) => resolveLocalLink(file, target))
    .filter((link): link is LinkReference => link !== null);
};

const lessonFileName = (item: DriveManifest['files'][number]) =>
  item.output ?? `lesson-${String(item.lesson).padStart(3, '0')}.pdf`;

const lessonNumberFromArtifact = (artifactPath: string) =>
  Number(path.basename(artifactPath).match(/^lesson-(\d{3})-/)?.[1]);

describe('first-use readiness', () => {
  test('local Markdown and HTML links resolve to files in the repo', () => {
    const contentFiles = gitFiles(['*.md', '*.html']).filter(
      (file) => !file.startsWith('node_modules/'),
    );

    const missingLinks = contentFiles
      .flatMap(localLinksInFile)
      .filter(({ resolved }) => !existsSync(path.join(repoRoot, resolved)))
      .map(({ file, target, resolved }) => `${file} -> ${target} (${resolved})`);

    expect(missingLinks).toEqual([]);
  });

  test('Drive manifest output paths match staged or committed Notability artifacts', () => {
    const manifest = readJson<DriveManifest>('data/drive-pdf-manifest.json');
    const indexedArtifacts = new Set(gitFiles([`${notabilityOutputDir}/*.pdf`]));
    const artifactLessons = new Map(
      Array.from(indexedArtifacts)
        .map((artifactPath) => [lessonNumberFromArtifact(artifactPath), artifactPath] as const)
        .filter(([lesson]) => Number.isFinite(lesson)),
    );

    const mismatches = manifest.files
      .filter((item) => !item.skip)
      .map((item) => {
        const expected = path.posix.join(notabilityOutputDir, lessonFileName(item));
        const stagedOrCommittedForLesson = artifactLessons.get(item.lesson);

        return {
          lesson: item.lesson,
          expected,
          stagedOrCommittedForLesson,
          exists: indexedArtifacts.has(expected),
        };
      })
      .filter(({ exists, stagedOrCommittedForLesson }) => !exists || !stagedOrCommittedForLesson)
      .map(({ lesson, expected, stagedOrCommittedForLesson }) =>
        `lesson ${lesson}: manifest expects ${expected}; indexed artifact is ${
          stagedOrCommittedForLesson ?? 'missing'
        }`,
      );

    expect(mismatches).toEqual([]);
  });

  test('lesson source entries are concrete and generated index omits skipped/null lessons', () => {
    const lessonSources = readJson<LessonSources>('data/lesson-sources.json');
    const lessonIndex = readText('lessons/index.html');

    const missingTranscripts = lessonSources.lessons
      .filter(({ transcript }) => transcript !== null)
      .filter(({ transcript }) => !existsSync(path.join(repoRoot, transcript as string)))
      .map(({ lesson, transcript }) => `lesson ${lesson}: ${transcript}`);

    const skippedOrNullLessonsInIndex = lessonSources.lessons
      .filter(({ status, transcript }) => status === 'skipped' || transcript === null)
      .filter(({ lesson, title }) => lessonIndex.includes(`<td>${lesson}</td>`) || lessonIndex.includes(title))
      .map(({ lesson, title }) => `lesson ${lesson}: ${title}`);

    const missingNotabilityArtifacts = lessonSources.lessons
      .flatMap(({ lesson, notability_pdf, notability_pdfs }) =>
        [notability_pdf, ...(notability_pdfs ?? [])]
          .filter((artifactPath): artifactPath is string => Boolean(artifactPath))
          .map((artifactPath) => ({ artifactPath, lesson })),
      )
      .filter(({ artifactPath }) => !existsSync(path.join(repoRoot, artifactPath)))
      .map(({ lesson, artifactPath }) => `lesson ${lesson}: ${artifactPath}`);

    expect(missingTranscripts).toEqual([]);
    expect(skippedOrNullLessonsInIndex).toEqual([]);
    expect(missingNotabilityArtifacts).toEqual([]);
  });

  test('raw transcripts do not contain private Notability share links', () => {
    const transcriptFiles = gitFiles(['lessons/transcripts/*.md']);
    const notabilityLinks = transcriptFiles
      .filter((file) => readText(file).includes('notability.com/app/note/'))
      .map((file) => `${file} contains a Notability app share URL`);

    expect(notabilityLinks).toEqual([]);
  });

  test('package script and import workflow consistently use Bun', () => {
    const packageJson = readJson<{ scripts?: Record<string, string> }>('package.json');
    const workflow = readText('.github/workflows/import-drive-pdfs.yml');
    const importScript = packageJson.scripts?.['import-drive-pdfs'];

    const consistencyIssues = [
      importScript === 'bun scripts/import-drive-pdfs.ts'
        ? null
        : `package script import-drive-pdfs should run Bun directly; got ${importScript ?? 'missing'}`,
      workflow.includes('oven-sh/setup-bun') ? null : 'workflow should install Bun with oven-sh/setup-bun',
      /\brun:\s*bun install\b/.test(workflow) ? null : 'workflow install step should run bun install',
      /\brun:\s*bun run import-drive-pdfs\b/.test(workflow)
        ? null
        : 'workflow import step should run bun run import-drive-pdfs',
      /\bsetup-node\b|\bnpm\b|\bnode-version\b/.test(workflow)
        ? 'workflow still references Node/npm setup'
        : null,
    ].filter((issue): issue is string => issue !== null);

    expect(consistencyIssues).toEqual([]);
  });
});
