import { readArtifactRecords, type ArtifactRecord } from '../src/lib/lesson-catalog.js';

function issueForLesson(record: ArtifactRecord): string {
  const padded = String(record.lesson).padStart(3, '0');

  return [
    `## Lesson ${padded}`,
    '',
    `Create or reconstruct ${record.transcript}.`,
    '',
    'Sources:',
    `- Chat: ${record.chat ?? 'not recorded'}`,
    `- Exercise Artifact Module: ${record.exercise_module ?? 'none'}`,
    '',
    'Acceptance criteria:',
    '- preserve key teaching explanations',
    '- preserve user questions that changed the lesson',
    '- include symbol tables and notation decisions',
    '- remove private or irrelevant material',
    '- mark reconstructed sections clearly',
  ].join('\n');
}

function main(): void {
  const output = readArtifactRecords()
    .filter((record) => record.transcript)
    .map(issueForLesson)
    .join('\n\n');

  console.log(output);
}

try {
  main();
} catch (error: unknown) {
  console.error(error);
  process.exitCode = 1;
}
