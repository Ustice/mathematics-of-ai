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
7. `data/lesson-artifacts.json`
8. `lessons/README.md`
9. `reference/README.md`
10. `learning-journal/README.md`

## Current State

- `course-state.yaml` is the compact machine-readable checkpoint.
- `data/lesson-artifacts.json` records Source Transcripts and Exercise Artifact Modules; Lesson Page identity lives in MDX frontmatter.
- `src/content/lessons/` contains the canonical MDX Lesson Pages.
- `src/pages/data/lesson-dependency-graph.json.ts` generates the MDX prerequisite graph from frontmatter and enriches it with source-map existence.
- `lessons/transcripts/` preserves raw transcript source material for Lessons 1-25; corresponding MDX pages live under `src/content/lessons/`.
- `exercises/lesson-NNN-slug/` stores handwritten exercise images in reading order.
- `reference/` is the current authority for notation, glossary, symbol tables, vocabulary, dependency notes, and teaching references.

## Lesson Rule

Generate or continue the next lesson from repo state first. Do not ask Jason for an artifact to start a lesson.

Use submitted images for exercise review, then store the nonblank pages in the matching Exercise Artifact Module and register that module in `data/lesson-artifacts.json`.
