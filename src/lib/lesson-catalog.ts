import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

export type ArtifactRecord = {
  chat?: string;
  exercise_module?: string;
  lesson: number;
  transcript: string | null;
};

export type LessonPageRecord = {
  lesson: number;
  phase: string;
  prerequisites: Array<{
    lesson: number;
    title: string;
  }>;
  slug: string;
  title: string;
};

export type LessonCatalogEntry = LessonPageRecord & {
  artifacts: ArtifactRecord;
  exerciseImages: string[];
  implementation: string | null;
  review: string | null;
};

type ArtifactManifest = {
  lessons: ArtifactRecord[];
};

const imageExtension = /\.(?:jpe?g|png|webp)$/i;

const byLessonNumber = <T extends { lesson: number }>(left: T, right: T) =>
  left.lesson - right.lesson;

const duplicates = (numbers: number[]) =>
  numbers.filter((number, index) => numbers.indexOf(number) !== index);

const assertUniqueLessonNumbers = (records: Array<{ lesson: number }>, label: string) => {
  const repeated = Array.from(new Set(duplicates(records.map(({ lesson }) => lesson))));

  if (repeated.length > 0) {
    throw new Error(`${label} contains duplicate lessons: ${repeated.join(', ')}`);
  }
};

const assertArtifactPaths = (record: ArtifactRecord, repoRoot: string) => {
  const paths = [record.transcript].filter(
    (artifactPath): artifactPath is string => artifactPath !== null && artifactPath !== undefined,
  );
  const missing = paths.filter((artifactPath) => !existsSync(path.join(repoRoot, artifactPath)));

  if (missing.length > 0) {
    throw new Error(`Artifact Record ${record.lesson} has missing paths: ${missing.join(', ')}`);
  }
};

const conventionalArtifact = (
  record: ArtifactRecord,
  fileName: string,
  repoRoot: string,
) => {
  if (!record.exercise_module) {
    return null;
  }

  const relativePath = path.join(record.exercise_module, fileName);

  return existsSync(path.join(repoRoot, relativePath)) ? relativePath : null;
};

export const exerciseImagePaths = (record: ArtifactRecord, repoRoot = process.cwd()) => {
  const modulePath = record.exercise_module;

  if (!modulePath) {
    return [];
  }

  const absoluteModulePath = path.join(repoRoot, modulePath);

  if (!existsSync(absoluteModulePath)) {
    throw new Error(`Exercise Artifact Module does not exist: ${modulePath}`);
  }

  return readdirSync(absoluteModulePath, { encoding: 'utf8', recursive: true })
    .filter((relativePath) => imageExtension.test(relativePath))
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
    .map((relativePath) => path.join(modulePath, relativePath));
};

export const readArtifactRecords = (
  repoRoot = process.cwd(),
  manifestPath = 'data/lesson-artifacts.json',
) =>
  (
    JSON.parse(readFileSync(path.join(repoRoot, manifestPath), 'utf8')) as ArtifactManifest
  ).lessons;

export const artifactFileName = (artifactPath: string) => path.basename(artifactPath);

export const sourceArtifactUrl = (artifactPath: string) => `/${artifactPath}`;

export const buildLessonCatalog = (
  pages: LessonPageRecord[],
  artifacts: ArtifactRecord[],
  repoRoot = process.cwd(),
): LessonCatalogEntry[] => {
  assertUniqueLessonNumbers(pages, 'Lesson Pages');
  assertUniqueLessonNumbers(artifacts, 'Artifact Records');

  const pageNumbers = new Set(pages.map(({ lesson }) => lesson));
  const orphanArtifacts = artifacts
    .filter(({ lesson }) => !pageNumbers.has(lesson))
    .map(({ lesson }) => lesson);

  if (orphanArtifacts.length > 0) {
    throw new Error(`Artifact Records without Lesson Pages: ${orphanArtifacts.join(', ')}`);
  }

  const artifactsByLesson = new Map(artifacts.map((record) => [record.lesson, record]));
  const missingArtifacts = pages
    .filter(({ lesson }) => !artifactsByLesson.has(lesson))
    .map(({ lesson }) => lesson);

  if (missingArtifacts.length > 0) {
    throw new Error(`Lesson Pages without Artifact Records: ${missingArtifacts.join(', ')}`);
  }

  return [...pages].sort(byLessonNumber).map((page) => {
    const record = artifactsByLesson.get(page.lesson) as ArtifactRecord;
    assertArtifactPaths(record, repoRoot);

    return {
      ...page,
      artifacts: record,
      exerciseImages: exerciseImagePaths(record, repoRoot),
      implementation: conventionalArtifact(record, 'implementation.ts', repoRoot),
      review: conventionalArtifact(record, 'review.md', repoRoot),
    };
  });
};
