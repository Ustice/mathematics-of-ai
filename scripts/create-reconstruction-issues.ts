import { exerciseImagePaths, readArtifactRecords } from '../src/lib/lesson-catalog.js';

function main(): void {
  const output = readArtifactRecords()
    .flatMap((record) =>
      exerciseImagePaths(record).map(
        (artifactPath) =>
          `- [ ] Lesson ${record.lesson}: reconstruct HTML lesson from ${artifactPath}`,
      ),
    )
    .join('\n');

  console.log(output);
}

try {
  main();
} catch (error: unknown) {
  console.error(error);
  process.exitCode = 1;
}
