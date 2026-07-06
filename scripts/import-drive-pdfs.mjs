import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { google } from 'googleapis';

const manifestPath = process.env.PDF_MANIFEST ?? 'data/drive-pdf-manifest.json';
const outputDir = process.env.PDF_OUTPUT_DIR ?? 'artifacts/notability-pdfs';

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function parseCredentials() {
  const raw = requireEnv('GOOGLE_SERVICE_ACCOUNT_JSON');
  return JSON.parse(raw);
}

async function getDriveClient() {
  const credentials = parseCredentials();
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  return google.drive({ version: 'v3', auth });
}

async function downloadFile(drive, fileId, destination) {
  await fs.mkdir(path.dirname(destination), { recursive: true });
  const response = await drive.files.get(
    { fileId, alt: 'media', supportsAllDrives: true },
    { responseType: 'arraybuffer' },
  );
  await fs.writeFile(destination, Buffer.from(response.data));
}

function lessonFileName(item) {
  return item.output ?? `lesson-${String(item.lesson).padStart(3, '0')}.pdf`;
}

async function main() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  const drive = await getDriveClient();

  for (const item of manifest.files) {
    if (item.skip) continue;
    const filename = lessonFileName(item);
    const destination = path.join(outputDir, filename);
    console.log(`Importing ${item.title} -> ${destination}`);
    await downloadFile(drive, item.driveFileId, destination);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
