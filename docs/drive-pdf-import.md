# Drive PDF Import

This historical importer was used to bring Notability PDF exports from Google Drive into `artifacts/notability-pdfs/`.

The committed PDFs in `artifacts/notability-pdfs/` are now the source artifacts for the course. Do not treat Google Drive as an ongoing synchronization source unless the course process explicitly changes.

## Archived Drive Source

The archived Drive folder is recorded in `data/drive-pdf-manifest.json`. The manifest stores stable Drive file IDs and normalized output filenames for the historical bootstrap import.

## Setup

Create a Google Cloud service account with read-only access to the Drive folder containing the exported PDFs.

Then add this repository secret:

```text
GOOGLE_SERVICE_ACCOUNT_JSON
```

The value should be the full service account JSON.

Share the Google Drive folder with the service account email address as a viewer.

## Manual Recovery Import

The script is retained for provenance and manual recovery. It is not part of the normal lesson workflow.

```bash
bun install
GOOGLE_SERVICE_ACCOUNT_JSON='...' bun run import-drive-pdfs
```

Optional overrides:

- `PDF_MANIFEST` — path to an alternate Drive PDF manifest.
- `PDF_OUTPUT_DIR` — output directory for imported PDFs.

## Current Lesson Scope

The Drive manifest stores the file IDs that were needed for the original bootstrap import, currently Lessons 2 through 10.
The repository already contains normalized Notability PDF artifacts for Lessons 2 through 26.
Markdown lesson transcripts for Lessons 1-25 are stored separately under `lessons/transcripts/`.

Before importing, run:

```bash
bun test
```

The readiness tests verify local links, manifest output paths, transcript source entries, and Bun workflow consistency.

## Public Safety Checklist

Before making PDFs public, review them for:

- personal information,
- copyrighted source material,
- accidental screenshots or unrelated notes,
- private comments.
