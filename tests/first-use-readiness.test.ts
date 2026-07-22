import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import {
  exerciseImagePaths,
  readArtifactRecords,
} from '../src/lib/lesson-catalog.js';


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
  execFileSync(
    'git',
    ['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--', ...patterns],
    {
      cwd: repoRoot,
      encoding: 'utf8',
    },
  )
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

  test('Artifact Records are concrete and align with Lesson Pages', () => {
    const artifactRecords = readArtifactRecords(repoRoot);

    const missingTranscripts = artifactRecords
      .filter(({ transcript }) => transcript !== null)
      .filter(({ transcript }) => !existsSync(path.join(repoRoot, transcript as string)))
      .map(({ lesson, transcript }) => `lesson ${lesson}: ${transcript}`);

    const missingExerciseImages = artifactRecords
      .flatMap((record) =>
        exerciseImagePaths(record, repoRoot).map((artifactPath) => ({
          artifactPath,
          lesson: record.lesson,
        })),
      )
      .filter(({ artifactPath }) => !existsSync(path.join(repoRoot, artifactPath)))
      .map(({ lesson, artifactPath }) => `lesson ${lesson}: ${artifactPath}`);
    const mdxLessonCount = gitFiles(['src/content/lessons/*.mdx']).length;

    expect(missingTranscripts).toEqual([]);
    expect(missingExerciseImages).toEqual([]);
    expect(artifactRecords).toHaveLength(mdxLessonCount);
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
