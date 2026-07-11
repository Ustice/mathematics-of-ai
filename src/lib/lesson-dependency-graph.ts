export type LessonDependencyInput = {
  lesson: number;
  phase: string;
  prerequisites: Array<{
    lesson: number;
    title: string;
  }>;
  slug: string;
  title: string;
};

export type ArtifactRecordInput = {
  lesson: number;
};

export type LessonDependencyEdge = {
  from: number;
  mdxExists: boolean;
  sourceExists: boolean;
  title: string;
  to: number;
};

export type LessonDependencyGraph = {
  edges: LessonDependencyEdge[];
  lessons: Array<{
    lesson: number;
    phase: string;
    slug: string;
    title: string;
  }>;
  missingSourcePrerequisites: number[];
  schemaVersion: 1;
  sources: {
    artifactRecords: 'data/lesson-artifacts.json';
    mdxLessons: 'src/content/lessons';
  };
  unresolvedMdxPrerequisites: number[];
};

const byLessonNumber = <T extends { lesson: number }>(left: T, right: T) =>
  left.lesson - right.lesson;

export const buildLessonDependencyGraph = (
  lessonEntries: LessonDependencyInput[],
  artifactRecords: ArtifactRecordInput[] = [],
): LessonDependencyGraph => {
  const sortedLessons = [...lessonEntries].sort(byLessonNumber);
  const lessonNumbers = new Set(sortedLessons.map(({ lesson }) => lesson));
  const artifactByLesson = new Map(
    artifactRecords.map((artifactRecord) => [artifactRecord.lesson, artifactRecord]),
  );
  const edges = sortedLessons
    .flatMap(({ lesson, prerequisites }) =>
      prerequisites.map((prerequisite) => {
        const artifactRecord = artifactByLesson.get(prerequisite.lesson);

        return {
          from: prerequisite.lesson,
          mdxExists: lessonNumbers.has(prerequisite.lesson),
          sourceExists: artifactRecord !== undefined,
          title: prerequisite.title,
          to: lesson,
        };
      }),
    )
    .sort((left, right) => left.to - right.to || left.from - right.from);
  const unresolvedMdxPrerequisites = Array.from(
    new Set(edges.filter(({ mdxExists }) => !mdxExists).map(({ from }) => from)),
  ).sort((left, right) => left - right);
  const missingSourcePrerequisites = Array.from(
    new Set(edges.filter(({ sourceExists }) => !sourceExists).map(({ from }) => from)),
  ).sort((left, right) => left - right);

  return {
    edges,
    lessons: sortedLessons.map(({ lesson, phase, slug, title }) => ({
      lesson,
      phase,
      slug,
      title,
    })),
    missingSourcePrerequisites,
    schemaVersion: 1,
    sources: {
      artifactRecords: 'data/lesson-artifacts.json',
      mdxLessons: 'src/content/lessons',
    },
    unresolvedMdxPrerequisites,
  };
};
