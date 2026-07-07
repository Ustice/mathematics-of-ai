# Mathematics of AI

This repository contains an evolving course archive with curriculum, lessons, exercises, and a learning journal for the mathematics needed to read and understand modern machine learning research.

## Repository Structure

- `curriculum.md` — Long-term roadmap.
- `course-state.yaml` — Compact machine-readable checkpoint rewritten after each lesson.
- `learning-journal.md` — Reflections and insights.
- `glossary.md` — Definitions introduced throughout the course.
- `notation.md` — Standard notation used in the lessons.
- `lessons/` — Individual lesson notes and source lesson transcripts.
- `lessons/transcripts/` — Raw exported ChatGPT lesson conversations for Lessons 1-25.
- `exercises/` — Exercise index and future polished exercise sets.
- `transcripts/` — Transcript review policy and historical planning notes.
- `artifacts/notability-pdfs/` — Exported handwritten Notability PDFs for Lessons 2-25.
- `data/drive-pdf-manifest.json` — Drive PDF import manifest.
- `data/lesson-sources.json` — Lesson transcript/source index.
- `scripts/` — Course maintenance scripts.

The repository is intended to be the canonical source of truth for the course.

## Current Course State

Lessons 1-25 have raw exported Markdown transcripts under `lessons/transcripts/`.
Treat those transcripts as source material until each lesson is reviewed and polished for public use.
Handwritten Notability PDFs for Lessons 2-25 live under `artifacts/notability-pdfs/`.
The next course topic is Gradient Descent.

## Importing Notability PDFs

See [`docs/drive-pdf-import.md`](docs/drive-pdf-import.md).

The committed Notability PDFs cover Lessons 2 through 25.

## Development Commands

Use Bun for JavaScript tooling:

```bash
bun install
bun run typecheck
bun test
bun run import-drive-pdfs
```
