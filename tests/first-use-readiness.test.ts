import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

type LessonSources = {
  lessons: Array<{
    lesson: number;
    notability_pdf?: string;
    notability_pdfs?: string[];
    title: string;
    transcript: string | null;
    dynamic_page?: string;
    status: string;
  }>;
};

type LinkReference = {
  file: string;
  target: string;
  resolved: string;
};

const repoRoot = path.resolve(import.meta.dir, '..');

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

describe('first-use readiness', () => {
  test('local Markdown and HTML links resolve to files in the repo', () => {
    const contentFiles = gitFiles(['*.md', '*.html']).filter(
      (file) => !file.startsWith('node_modules/') && existsSync(path.join(repoRoot, file)),
    );

    const missingLinks = contentFiles
      .flatMap(localLinksInFile)
      .filter(({ resolved }) => !existsSync(path.join(repoRoot, resolved)))
      .map(({ file, target, resolved }) => `${file} -> ${target} (${resolved})`);

    expect(missingLinks).toEqual([]);
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
    const missingDynamicPages = lessonSources.lessons
      .filter(({ dynamic_page }) => Boolean(dynamic_page))
      .filter(({ dynamic_page }) => !existsSync(path.join(repoRoot, dynamic_page as string)))
      .map(({ lesson, dynamic_page }) => `lesson ${lesson}: ${dynamic_page}`);
    const dynamicPagesInSourceMap = new Set(
      lessonSources.lessons.flatMap(({ dynamic_page }) => (dynamic_page ? [dynamic_page] : [])),
    );
    const missingSourceMapEntriesForMdx = gitFiles(['src/content/lessons/*.mdx'])
      .filter((lessonPage) => !dynamicPagesInSourceMap.has(lessonPage))
      .map((lessonPage) => `${lessonPage} is missing from data/lesson-sources.json`);

    expect(missingTranscripts).toEqual([]);
    expect(skippedOrNullLessonsInIndex).toEqual([]);
    expect(missingNotabilityArtifacts).toEqual([]);
    expect(missingDynamicPages).toEqual([]);
    expect(missingSourceMapEntriesForMdx).toEqual([]);
  });

  test('raw transcripts do not contain private Notability share links', () => {
    const transcriptFiles = gitFiles(['lessons/transcripts/*.md']);
    const notabilityLinks = transcriptFiles
      .filter((file) => readText(file).includes('notability.com/app/note/'))
      .map((file) => `${file} contains a Notability app share URL`);

    expect(notabilityLinks).toEqual([]);
  });

  test('package scripts use Bun', () => {
    const packageJson = readJson<{ scripts?: Record<string, string> }>('package.json');

    const consistencyIssues = [
      /\bnpm\b|\bnode-version\b/.test(JSON.stringify(packageJson.scripts ?? {}))
        ? 'package scripts still reference npm or Node setup'
        : null,
    ].filter((issue): issue is string => issue !== null);

    expect(consistencyIssues).toEqual([]);
  });
});
