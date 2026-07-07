import fs from 'node:fs/promises';

const sourcePath = process.env.LESSON_SOURCES ?? 'data/lesson-sources.json';

async function main() {
  const data = JSON.parse(await fs.readFile(sourcePath, 'utf8'));

  for (const lesson of data.lessons) {
    const padded = String(lesson.lesson).padStart(3, '0');
    console.log(`## Lesson ${padded}: ${lesson.title}`);
    console.log();
    console.log(`Create or reconstruct ${lesson.transcript}.`);
    console.log();
    console.log('Sources:');
    console.log(`- Chat: ${lesson.chat}`);
    console.log(`- Exercise PDFs: artifacts/notability-pdfs/lesson-${padded}-*.pdf when available`);
    console.log();
    console.log('Acceptance criteria:');
    console.log('- preserve key teaching explanations');
    console.log('- preserve user questions that changed the lesson');
    console.log('- include symbol tables and notation decisions');
    console.log('- remove private or irrelevant material');
    console.log('- mark reconstructed sections clearly');
    console.log();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
