import fs from 'node:fs/promises';

const manifestPath = process.env.PDF_MANIFEST ?? 'data/drive-pdf-manifest.json';

async function main() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  for (const item of manifest.files) {
    const output = item.output ?? `lesson-${String(item.lesson).padStart(3, '0')}.pdf`;
    console.log(`- [ ] Lesson ${item.lesson}: reconstruct HTML lesson from artifacts/notability-pdfs/${output}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
