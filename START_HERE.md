# Start Here

This is the entry point for future AI sessions in the Mathematics of AI repo.

## First Reads

Read these before asking Jason for source material:

1. `AGENTS.md`
2. `README.md`
3. `course-state.yaml`
4. `docs/new-lesson-bootstrap.md`
5. `curriculum/roadmap.md`
6. `curriculum/progress-tracker.md`
7. `data/lesson-sources.json`
8. `lessons/README.md`
9. `reference/README.md`
10. `learning-journal/README.md`

## Current State

- `course-state.yaml` is the compact machine-readable checkpoint.
- `data/lesson-sources.json` is the machine-readable map for transcripts, exercise images, and lesson pages.
- `src/content/lessons/` is the forward path for polished or draft MDX lessons.
- `src/pages/data/lesson-dependency-graph.json.ts` generates the MDX prerequisite graph from frontmatter and enriches it with source-map existence.
- `lessons/transcripts/` preserves raw transcript source material for Lessons 1-25; corresponding MDX pages live under `src/content/lessons/`.
- `exercises/lesson-NNN-slug/` stores handwritten exercise images in reading order.
- `reference/` is the current authority for notation, glossary, symbol tables, vocabulary, dependency notes, and teaching references.

## Lesson Rule

Generate or continue the next lesson from repo state first. Do not ask Jason for an artifact to start a lesson.

Use submitted images for exercise review, then store the nonblank pages under the matching lesson directory and index them in `data/lesson-sources.json`.
