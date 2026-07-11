import { readFileSync } from 'node:fs';
import path from 'node:path';

export type LessonSource = {
  chat?: string;
  dynamic_page?: string;
  exercise_set?: string;
  lesson: number;
  notability_pdf?: string;
  notability_pdfs?: string[];
  status: string;
  title: string;
  transcript: string | null;
};

type LessonSourcesFile = {
  lessons: LessonSource[];
};

const repoPath = (...segments: string[]) => path.join(process.cwd(), ...segments);

export const readLessonSources = () =>
  (JSON.parse(readFileSync(repoPath('data/lesson-sources.json'), 'utf8')) as LessonSourcesFile)
    .lessons;

export const notabilityPdfPaths = (source: LessonSource) =>
  [source.notability_pdf, ...(source.notability_pdfs ?? [])].filter(
    (artifactPath): artifactPath is string => Boolean(artifactPath),
  );

export const allNotabilityPdfPaths = () => readLessonSources().flatMap(notabilityPdfPaths);

export const artifactFileName = (artifactPath: string) => path.basename(artifactPath);

export const sourceArtifactUrl = (artifactPath: string) => `/${artifactPath}`;
