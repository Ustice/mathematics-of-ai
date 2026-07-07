import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { google, type drive_v3 } from 'googleapis';
import type { JWTInput } from 'google-auth-library';

type ManifestFile = {
  driveFileId: string;
  lesson: number;
  output?: string | undefined;
  skip?: boolean | undefined;
  title: string;
};

type Manifest = {
  files: ManifestFile[];
  source: {
    folderId: string;
    folderUrl: string;
  };
};

const manifestPath = process.env.PDF_MANIFEST ?? 'data/drive-pdf-manifest.json';
const outputDir = process.env.PDF_OUTPUT_DIR ?? 'artifacts/notability-pdfs';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function asRecord(value: unknown, label: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${label} must be an object`);
  }

  return value as Record<string, unknown>;
}

function asString(value: unknown, label: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${label} must be a non-empty string`);
  }

  return value;
}

function asNumber(value: unknown, label: string): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value <= 0) {
    throw new Error(`${label} must be a positive integer`);
  }

  return value;
}

function parseManifest(raw: string): Manifest {
  const parsed = asRecord(JSON.parse(raw), 'manifest');
  const source = asRecord(parsed.source, 'manifest.source');
  const files = Array.isArray(parsed.files) ? parsed.files : undefined;

  if (!files) throw new Error('manifest.files must be an array');

  return {
    source: {
      folderId: asString(source.folderId, 'manifest.source.folderId'),
      folderUrl: asString(source.folderUrl, 'manifest.source.folderUrl'),
    },
    files: files.map((item, index) => {
      const file = asRecord(item, `manifest.files[${index}]`);
      const skip = file.skip === undefined ? undefined : file.skip === true;
      const output = file.output === undefined ? undefined : asString(file.output, `manifest.files[${index}].output`);

      return {
        driveFileId: asString(file.driveFileId, `manifest.files[${index}].driveFileId`),
        lesson: asNumber(file.lesson, `manifest.files[${index}].lesson`),
        output,
        skip,
        title: asString(file.title, `manifest.files[${index}].title`),
      };
    }),
  };
}

function duplicateValues(values: string[]): string[] {
  const counts = values.reduce<Record<string, number>>(
    (currentCounts, value) => ({
      ...currentCounts,
      [value]: (currentCounts[value] ?? 0) + 1,
    }),
    {},
  );

  return Object.entries(counts).flatMap(([value, count]) => (count > 1 ? [value] : []));
}

function lessonFileName(item: ManifestFile): string {
  return item.output ?? `lesson-${String(item.lesson).padStart(3, '0')}.pdf`;
}

function activeFiles(manifest: Manifest): ManifestFile[] {
  return manifest.files.filter((item) => !item.skip);
}

function validateManifest(manifest: Manifest): void {
  const files = activeFiles(manifest);
  const duplicateLessons = duplicateValues(files.map((item) => String(item.lesson)));
  const duplicateOutputs = duplicateValues(files.map(lessonFileName));
  const duplicateDriveFiles = duplicateValues(files.map((item) => item.driveFileId));
  const unsafeOutputs = files
    .map(lessonFileName)
    .filter((filename) => filename !== path.basename(filename) || !filename.endsWith('.pdf'));
  const errors = [
    ...duplicateLessons.map((lesson) => `Duplicate lesson in manifest: ${lesson}`),
    ...duplicateOutputs.map((output) => `Duplicate output filename in manifest: ${output}`),
    ...duplicateDriveFiles.map((fileId) => `Duplicate Drive file ID in manifest: ${fileId}`),
    ...unsafeOutputs.map((output) => `Unsafe output filename in manifest: ${output}`),
  ];

  if (errors.length > 0) throw new Error(errors.join('\n'));
}

function parseCredentials(): JWTInput {
  const raw = requireEnv('GOOGLE_SERVICE_ACCOUNT_JSON');

  try {
    return JSON.parse(raw) as JWTInput;
  } catch (error) {
    throw new Error(`GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON: ${(error as Error).message}`);
  }
}

async function getDriveClient(): Promise<drive_v3.Drive> {
  const auth = new google.auth.GoogleAuth({
    credentials: parseCredentials(),
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });

  return google.drive({ auth, version: 'v3' });
}

function resolveDestination(filename: string): string {
  const root = path.resolve(outputDir);
  const destination = path.resolve(root, filename);

  if (!destination.startsWith(`${root}${path.sep}`)) {
    throw new Error(`Refusing to write outside ${outputDir}: ${filename}`);
  }

  return destination;
}

async function readExistingFile(destination: string): Promise<Buffer | null> {
  try {
    return await fs.readFile(destination);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw error;
  }
}

async function writeFileAtomically(destination: string, data: Buffer): Promise<void> {
  const existing = await readExistingFile(destination);
  if (existing?.equals(data)) {
    console.log(`Unchanged: ${destination}`);
    return;
  }

  await fs.mkdir(path.dirname(destination), { recursive: true });
  const temporaryPath = `${destination}.tmp-${process.pid}`;
  await fs.writeFile(temporaryPath, data, { flag: 'wx' });
  await fs.rename(temporaryPath, destination);
}

async function fetchMetadata(drive: drive_v3.Drive, item: ManifestFile): Promise<drive_v3.Schema$File> {
  const response = await drive.files.get({
    fields: 'id,name,mimeType,size',
    fileId: item.driveFileId,
    supportsAllDrives: true,
  });
  const metadata = response.data;

  if (metadata.mimeType !== 'application/pdf') {
    throw new Error(`${item.title} is not a PDF in Drive: ${metadata.mimeType ?? 'unknown MIME type'}`);
  }

  if (Number(metadata.size ?? 0) <= 0) {
    throw new Error(`${item.title} has no downloadable PDF size in Drive`);
  }

  return metadata;
}

async function downloadFile(drive: drive_v3.Drive, item: ManifestFile): Promise<void> {
  const filename = lessonFileName(item);
  const destination = resolveDestination(filename);
  const metadata = await fetchMetadata(drive, item);
  const response = await drive.files.get(
    { alt: 'media', fileId: item.driveFileId, supportsAllDrives: true },
    { responseType: 'arraybuffer' },
  );
  const data = Buffer.from(response.data as ArrayBuffer);
  const expectedSize = Number(metadata.size ?? 0);

  if (data.byteLength === 0) throw new Error(`${item.title} downloaded as an empty file`);
  if (expectedSize > 0 && data.byteLength !== expectedSize) {
    throw new Error(`${item.title} downloaded ${data.byteLength} bytes, expected ${expectedSize}`);
  }

  console.log(`Importing ${item.title} -> ${destination}`);
  await writeFileAtomically(destination, data);
}

async function main(): Promise<void> {
  const manifest = parseManifest(await fs.readFile(manifestPath, 'utf8'));
  validateManifest(manifest);
  const drive = await getDriveClient();

  await activeFiles(manifest).reduce<Promise<void>>(
    async (previousDownload, item) => previousDownload.then(() => downloadFile(drive, item)),
    Promise.resolve(),
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
