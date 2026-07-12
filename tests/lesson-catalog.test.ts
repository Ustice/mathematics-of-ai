import { describe, expect, test } from 'bun:test';
import path from 'node:path';
import {
  buildLessonCatalog,
  readArtifactRecords,
  type ArtifactRecord,
  type LessonPageRecord,
} from '../src/lib/lesson-catalog.js';

const repoRoot = path.resolve(import.meta.dir, '..');

const page = (lesson: number): LessonPageRecord => ({
  lesson,
  phase: 'Foundations',
  prerequisites: [],
  slug: `lesson-${String(lesson).padStart(3, '0')}`,
  title: `Lesson ${lesson}`,
});

const artifact = (lesson: number): ArtifactRecord => ({ lesson, transcript: null });

describe('lesson catalog', () => {
  test('composes pages and artifacts in lesson order', () => {
    const catalog = buildLessonCatalog([page(2), page(1)], [artifact(1), artifact(2)], repoRoot);

    expect(catalog.map(({ lesson }) => lesson)).toEqual([1, 2]);
  });

  test('rejects orphaned and missing records', () => {
    expect(() => buildLessonCatalog([page(1)], [artifact(2)], repoRoot)).toThrow(
      'Artifact Records without Lesson Pages: 2',
    );
    expect(() => buildLessonCatalog([page(1), page(2)], [artifact(1)], repoRoot)).toThrow(
      'Lesson Pages without Artifact Records: 2',
    );
  });

  test('rejects missing artifact paths', () => {
    expect(() =>
      buildLessonCatalog(
        [page(1)],
        [{ lesson: 1, transcript: 'lessons/transcripts/does-not-exist.md' }],
        repoRoot,
      ),
    ).toThrow('Artifact Record 1 has missing paths');
  });

  test('discovers ordered exercise images behind the module interface', () => {
    const lesson31 = buildLessonCatalog(
      [page(31)],
      [
        {
          exercise_module: 'exercises/lesson-031-hessians-and-curvature',
          lesson: 31,
          transcript: null,
        },
      ],
      repoRoot,
    )[0];

    expect(lesson31?.exerciseImages).toEqual([
      'exercises/lesson-031-hessians-and-curvature/exercise-01.jpg',
      'exercises/lesson-031-hessians-and-curvature/exercise-02.jpg',
      'exercises/lesson-031-hessians-and-curvature/exercise-03.jpg',
      'exercises/lesson-031-hessians-and-curvature/exercise-04.jpg',
    ]);
  });

  test('discovers conventional review and implementation artifacts', () => {
    const record = readArtifactRecords(repoRoot).find(({ lesson }) => lesson === 26);
    const lesson26 = buildLessonCatalog([page(26)], [record as ArtifactRecord], repoRoot)[0];

    expect(lesson26?.review).toBe('exercises/lesson-026-gradient-descent/review.md');
    expect(lesson26?.implementation).toBe(
      'exercises/lesson-026-gradient-descent/implementation.ts',
    );
  });

  test('the live artifact manifest has one record for every lesson', () => {
    const records = readArtifactRecords(repoRoot);

    expect(records.map(({ lesson }) => lesson)).toEqual(
      Array.from({ length: 35 }, (_, index) => index + 1),
    );
  });
});
