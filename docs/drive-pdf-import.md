# Drive PDF Import

This repository can import Notability PDF exports from Google Drive into `artifacts/notability-pdfs/`.

## Source

The source folder is recorded in `data/drive-pdf-manifest.json`. The manifest stores stable Drive file IDs and normalized output filenames.

## Setup

Create a Google Cloud service account with read-only access to the Drive folder containing the exported PDFs.

Then add this repository secret:

```text
GOOGLE_SERVICE_ACCOUNT_JSON
```

The value should be the full service account JSON.

Share the Google Drive folder with the service account email address as a viewer.

## Manual Import

```bash
bun install
GOOGLE_SERVICE_ACCOUNT_JSON='...' bun run import-drive-pdfs
```

## GitHub Action

Run the `Import Drive PDFs` workflow manually from the Actions tab. It will:

1. Read `data/drive-pdf-manifest.json`.
2. Download each listed PDF from Drive.
3. Store it under `artifacts/notability-pdfs/` using normalized filenames.
4. Commit imported PDFs back to the branch.

## Current Lesson Scope

The first manifest imports lessons 2 through 10.
Markdown lesson transcripts for Lessons 1-25 are stored separately under `lessons/transcripts/`.

## Public Safety Checklist

Before making PDFs public, review them for:

- personal information,
- copyrighted source material,
- accidental screenshots or unrelated notes,
- private comments.
