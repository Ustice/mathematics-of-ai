import fs from 'node:fs/promises';

type LessonSource = {
  lesson: number;
  exercise_images?: string[];
  title: string;
};

type LessonSources = {
  lessons: LessonSource[];
};

const sourceMapPath = process.env.LESSON_SOURCES ?? 'data/lesson-sources.json';

const artifactPaths = (source: LessonSource) =>
  (source.exercise_images ?? []).filter(
    (artifactPath): artifactPath is string => Boolean(artifactPath),
  );

async function main(): Promise<void> {
  const sourceMap = JSON.parse(await fs.readFile(sourceMapPath, 'utf8')) as LessonSources;
  const output = sourceMap.lessons
    .flatMap((source) =>
      artifactPaths(source).map(
        (artifactPath) =>
          `- [ ] Lesson ${source.lesson}: reconstruct HTML lesson from ${artifactPath}`,
      ),
    )
    .join('\n');

  console.log(output);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
