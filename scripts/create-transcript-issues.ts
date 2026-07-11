import fs from 'node:fs/promises';

type LessonSource = {
  chat: string;
  lesson: number;
  status: string;
  title: string;
  transcript: string | null;
};

type LessonSources = {
  lessons: LessonSource[];
};

const sourcePath = process.env.LESSON_SOURCES ?? 'data/lesson-sources.json';

function issueForLesson(lesson: LessonSource): string {
  const padded = String(lesson.lesson).padStart(3, '0');

  return [
    `## Lesson ${padded}: ${lesson.title}`,
    '',
    `Create or reconstruct ${lesson.transcript}.`,
    '',
    'Sources:',
    `- Chat: ${lesson.chat}`,
    `- Exercise PDFs: exercises/notability-pdfs/lesson-${padded}-*.pdf when available`,
    '',
    'Acceptance criteria:',
    '- preserve key teaching explanations',
    '- preserve user questions that changed the lesson',
    '- include symbol tables and notation decisions',
    '- remove private or irrelevant material',
    '- mark reconstructed sections clearly',
  ].join('\n');
}

async function main(): Promise<void> {
  const data = JSON.parse(await fs.readFile(sourcePath, 'utf8')) as LessonSources;
  const output = data.lessons
    .filter((lesson) => lesson.status !== 'skipped' && lesson.transcript)
    .map(issueForLesson)
    .join('\n\n');

  console.log(output);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
