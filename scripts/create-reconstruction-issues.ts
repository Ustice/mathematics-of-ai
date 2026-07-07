import fs from 'node:fs/promises';

type ManifestFile = {
  lesson: number;
  output?: string;
  skip?: boolean;
};

type Manifest = {
  files: ManifestFile[];
};

const manifestPath = process.env.PDF_MANIFEST ?? 'data/drive-pdf-manifest.json';

function lessonFileName(item: ManifestFile): string {
  return item.output ?? `lesson-${String(item.lesson).padStart(3, '0')}.pdf`;
}

async function main(): Promise<void> {
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8')) as Manifest;
  const output = manifest.files
    .filter((item) => !item.skip)
    .map((item) => {
      const outputPath = `artifacts/notability-pdfs/${lessonFileName(item)}`;
      return `- [ ] Lesson ${item.lesson}: reconstruct HTML lesson from ${outputPath}`;
    })
    .join('\n');

  console.log(output);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
