import fs from 'node:fs/promises';

type LessonSource = {
  lesson: number;
  notability_pdf?: string;
  notability_pdfs?: string[];
  title: string;
};

type LessonSources = {
  lessons: LessonSource[];
};

const sourceMapPath = process.env.LESSON_SOURCES ?? 'data/lesson-sources.json';

const artifactPaths = (source: LessonSource) =>
  [source.notability_pdf, ...(source.notability_pdfs ?? [])].filter(
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
