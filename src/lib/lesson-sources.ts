import { readFileSync } from 'node:fs';
import path from 'node:path';

export type LessonSource = {
  chat?: string;
  dynamic_page?: string;
  exercise_images?: string[];
  exercise_set?: string;
  lesson: number;
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

export const exerciseImagePaths = (source: LessonSource) => source.exercise_images ?? [];

export const allExerciseImagePaths = () => readLessonSources().flatMap(exerciseImagePaths);

export const artifactFileName = (artifactPath: string) => path.basename(artifactPath);

export const sourceArtifactUrl = (artifactPath: string) => `/${artifactPath}`;
