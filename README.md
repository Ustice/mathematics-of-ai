# Mathematics of AI

This repository contains an evolving curriculum, lessons, exercises, and learning journal documenting a complete course in the mathematics needed to read and understand modern machine learning research.

## Repository Structure

- `curriculum.md` — Long-term roadmap.
- `course-state.yaml` — Compact machine-readable checkpoint rewritten after each lesson.
- `learning-journal.md` — Reflections and insights.
- `glossary.md` — Definitions introduced throughout the course.
- `notation.md` — Standard notation used in the lessons.
- `lessons/` — Individual lesson notes and exported lesson transcripts.
- `lessons/transcripts/` — Exported ChatGPT lesson conversations for Lessons 1-25.
- `exercises/` — Exercise sets and solutions.
- `transcripts/` — Transcript reconstruction policy and historical planning notes.
- `artifacts/notability-pdfs/` — Exported handwritten Notability PDFs.
- `data/drive-pdf-manifest.json` — Drive PDF import manifest.
- `data/lesson-sources.json` — Lesson transcript/source index.
- `scripts/` — Course maintenance scripts.

The repository is intended to be the canonical source of truth for the course.

## Current Course State

Lessons 1-25 have exported Markdown transcripts under `lessons/transcripts/`.
Lesson 26 Preparation was intentionally skipped because it is mostly project setup context rather than lesson material.
The next course lesson is Gradient Descent.

## Importing Notability PDFs

See [`docs/drive-pdf-import.md`](docs/drive-pdf-import.md).

The first import manifest covers Lessons 2 through 10.

## Development Commands

Use Bun for JavaScript tooling:

```bash
bun install
bun run import-drive-pdfs
```
