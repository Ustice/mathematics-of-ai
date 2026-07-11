import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import {
  buildLessonDependencyGraph,
  type ArtifactRecordInput,
  type LessonDependencyInput,
} from '../src/lib/lesson-dependency-graph.js';

type ArtifactManifest = {
  lessons: ArtifactRecordInput[];
};

const repoRoot = path.resolve(import.meta.dir, '..');

const readArtifactRecords = () =>
  (JSON.parse(readFileSync(path.join(repoRoot, 'data/lesson-artifacts.json'), 'utf8')) as ArtifactManifest)
    .lessons;

const currentOptimizationLessons: LessonDependencyInput[] = [
  {
    lesson: 26,
    phase: 'Optimization and Calculus for Machine Learning',
    prerequisites: [
      { lesson: 17, title: 'Loss Functions' },
      { lesson: 23, title: 'Regularization' },
      { lesson: 24, title: 'Early Stopping' },
      { lesson: 25, title: 'Dropout' },
    ],
    slug: 'lesson-026-gradient-descent',
    title: 'Gradient Descent',
  },
  {
    lesson: 27,
    phase: 'Optimization and Calculus for Machine Learning',
    prerequisites: [
      { lesson: 17, title: 'Loss Functions' },
      { lesson: 26, title: 'Gradient Descent' },
    ],
    slug: 'lesson-027-stochastic-gradient-descent',
    title: 'Stochastic Gradient Descent',
  },
  {
    lesson: 28,
    phase: 'Optimization and Calculus for Machine Learning',
    prerequisites: [
      { lesson: 26, title: 'Gradient Descent' },
      { lesson: 27, title: 'Stochastic Gradient Descent' },
    ],
    slug: 'lesson-028-momentum',
    title: 'Momentum',
  },
  {
    lesson: 29,
    phase: 'Optimization and Calculus for Machine Learning',
    prerequisites: [
      { lesson: 26, title: 'Gradient Descent' },
      { lesson: 27, title: 'Stochastic Gradient Descent' },
      { lesson: 28, title: 'Momentum' },
    ],
    slug: 'lesson-029-adam',
    title: 'Adam',
  },
];

describe('lesson dependency graph', () => {
  test('builds prerequisite edges from lesson frontmatter-shaped input', () => {
    const artifactRecords: ArtifactRecordInput[] = [
      { lesson: 17 },
      { lesson: 23 },
      { lesson: 24 },
      { lesson: 25 },
      { lesson: 26 },
      { lesson: 27 },
      { lesson: 28 },
      { lesson: 29 },
    ];

    const graph = buildLessonDependencyGraph(currentOptimizationLessons, artifactRecords);

    expect(graph.missingSourcePrerequisites).toEqual([]);
    expect(graph.unresolvedMdxPrerequisites).toEqual([17, 23, 24, 25]);
    expect(graph.edges).toContainEqual({
      from: 26,
      mdxExists: true,
      sourceExists: true,
      title: 'Gradient Descent',
      to: 27,
    });
  });

  test('marks dependencies resolved when prerequisite lessons have MDX entries', () => {
    const lessons: LessonDependencyInput[] = [
      {
        lesson: 1,
        phase: 'Foundations',
        prerequisites: [],
        slug: 'lesson-001-vectors',
        title: 'Vectors',
      },
      {
        lesson: 2,
        phase: 'Foundations',
        prerequisites: [{ lesson: 1, title: 'Vectors' }],
        slug: 'lesson-002-matrices-as-transformations',
        title: 'Matrices as Transformations',
      },
    ];

    expect(
      buildLessonDependencyGraph(lessons, [{ lesson: 1 }])
        .edges,
    ).toEqual([
      {
        from: 1,
        mdxExists: true,
        sourceExists: true,
        title: 'Vectors',
        to: 2,
      },
    ]);
    expect(buildLessonDependencyGraph(lessons).unresolvedMdxPrerequisites).toEqual([]);
  });

  test('current Lesson Page prerequisites have Artifact Records', () => {
    const graph = buildLessonDependencyGraph(currentOptimizationLessons, readArtifactRecords());

    expect(graph.missingSourcePrerequisites).toEqual([]);
    expect(graph.edges.every(({ sourceExists }) => sourceExists)).toBe(true);
  });
});
