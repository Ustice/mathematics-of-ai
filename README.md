# Mathematics for Machine Intelligence

This repository tracks a self-directed program for learning the mathematics needed to understand, evaluate, and implement modern machine learning research.

The working name is **Mathematics for Machine Intelligence** / **Mathematics of AI**. It is a living learning program, not a finished textbook. Lessons, exercises, implementation notes, paper readings, and reference material should evolve as the learner's understanding deepens.

## Purpose

The course is designed for a senior backend software engineer who already has exposure to calculus, differential equations, statistics, applied engineering math, group theory, category theory, and some linear algebra. The goal is not to relearn mathematics from scratch.

The goal is to build enough mathematical fluency to:

- Read modern machine learning papers.
- Identify their assumptions and mathematical tools.
- Judge their arguments independently.
- Implement core ideas from first principles.
- Connect linear algebra, probability, optimization, information theory, group theory, and category theory.

## How To Use This Repository

Use this repo as the course workspace:

- Start future AI sessions with [START_HERE.md](START_HERE.md).
- Start with [course-state.yaml](course-state.yaml) to recover the current lesson state.
- Read the [curriculum roadmap](curriculum/roadmap.md) for the long-term sequence.
- Track module and milestone status in the [progress tracker](curriculum/progress-tracker.md).
- Draft polished lessons from the [lesson template](lessons/lesson-template.md).
- Keep exercise sets in [exercises](exercises/).
- Plan implementation work in [implementation](implementation/).
- Read and critique papers in [papers](papers/).
- Keep reusable notation and definitions in [reference](reference/).
- Record learning observations in the [learning journal](learning-journal/).

Lessons should pair:

- Conceptual explanation.
- Notation / symbol table.
- Worked examples.
- Exercises.
- Implementation.
- Why the idea shows up in ML.

## Capability Ladder

The lesson sequence remains the source of topic order. The capability ladder names what the sequence is trying to make usable:

| Capability | Evidence of durable progress |
| --- | --- |
| Linear Algebra | Explain and implement PCA from first principles. |
| Statistical Modeling | Connect likelihood, MAP, predictive distributions, and regularized objectives. |
| Optimization | Explain gradient descent, SGD, momentum, optimizer behavior, and training loops. |
| Neural Networks | Build and train a small neural network from scratch. |
| Information Theory | Use entropy, cross entropy, KL divergence, and mutual information in objectives. |
| Transformers | Implement attention and a minimal transformer block. |
| Paper Reading | Reproduce a classic transformer result, then critique a recent paper independently. |

## Starting a New Lesson Session

When starting a fresh ChatGPT session, use the prompt in [docs/new-lesson-bootstrap.md](docs/new-lesson-bootstrap.md).

The important rule is: do **not** ask for a lesson PDF to decide what comes next. Generate the next lesson from `course-state.yaml`, the curriculum, and the latest polished lesson under `src/content/lessons/`. Ask for a PDF only when reviewing handwritten exercises.

## Major Tracks

The program is organized around these tracks:

- **Curriculum:** roadmap, milestones, reading list, and progress tracking.
- **Lessons:** polished lesson notes, with raw transcripts preserved as source material.
- **Exercises:** mathematical and implementation exercises.
- **Implementation:** first-principles TypeScript projects, initially without ML frameworks.
- **Paper Reading:** structured notes for classic and modern ML papers.
- **Reference:** notation, glossary, symbol tables, mental models, and concept dependencies.
- **Learning Journal:** reflections on what clicked, what was confusing, and what the curriculum should reinforce.

## Repository Structure

Current canonical course documents:

- [course-state.yaml](course-state.yaml) — Compact machine-readable checkpoint for recovering course state.
- [curriculum/README.md](curriculum/README.md) — Curriculum directory guide.
- [curriculum/roadmap.md](curriculum/roadmap.md) — Long-term course roadmap.
- [curriculum/progress-tracker.md](curriculum/progress-tracker.md) — Milestone and module tracker.
- [curriculum/reading-list.md](curriculum/reading-list.md) — Curated reading slots by topic.
- [curriculum/milestones.md](curriculum/milestones.md) — Evidence criteria for milestones.
- [lessons/README.md](lessons/README.md) — Lesson workspace guide.
- [lessons/lesson-template.md](lessons/lesson-template.md) — Standard polished lesson template.
- [src/content/lessons](src/content/lessons/) — Forward polished lesson pages.
- [exercises/README.md](exercises/README.md) — Exercise workspace guide.
- [exercises/exercise-template.md](exercises/exercise-template.md) — Standard exercise set template.
- [implementation/README.md](implementation/README.md) — Implementation workspace guide.
- [implementation/project-plan.md](implementation/project-plan.md) — Companion implementation project plan.
- [papers/README.md](papers/README.md) — Paper-reading workspace guide.
- [papers/paper-reading-template.md](papers/paper-reading-template.md) — Structured paper reading template.
- [reference/README.md](reference/README.md) — Reference directory guide.
- [reference/notation.md](reference/notation.md) — Canonical compact notation guide.
- [reference/glossary.md](reference/glossary.md) — Canonical short glossary.
- [reference/symbol-table.md](reference/symbol-table.md) — Canonical recurring-symbol registry.
- [reference/mathematical-vocabulary.md](reference/mathematical-vocabulary.md) — Expanded concept-card reference.
- [learning-journal/README.md](learning-journal/README.md) — Learning journal guide.
- [learning-journal/journal-template.md](learning-journal/journal-template.md) — Journal entry template.

Preserved historical and source material:

- [curriculum.md](curriculum.md) — Top-level curriculum entry point retained for continuity.
- [lessons/transcripts](lessons/transcripts/) — Raw exported ChatGPT lesson transcripts for Lessons 1-25.
- [exercises/index.md](exercises/index.md) — Exercise index and future polished exercise sets.
- [transcripts/README.md](transcripts/README.md) — Transcript review policy and historical planning notes.
- [artifacts/notability-pdfs](artifacts/notability-pdfs/) — Exported handwritten Notability PDFs for Lessons 2-26.
- [data/drive-pdf-manifest.json](data/drive-pdf-manifest.json) — Drive PDF import manifest.
- [data/lesson-sources.json](data/lesson-sources.json) — Lesson transcript/source index.
- [journal/learning-journal.md](journal/learning-journal.md) — Existing structured learning notes.
- [learning-journal.md](learning-journal.md) — Earlier flat learning journal preserved for continuity.
- [notation.md](notation.md) — Historical top-level notation guide retained for continuity; current notation authority lives in `reference/`.
- [glossary.md](glossary.md) — Historical top-level glossary retained for continuity; current vocabulary authority lives in `reference/`.
- [scripts](scripts/) — Course maintenance scripts.

## Sources of Truth

| Area | Current source of truth |
| --- | --- |
| Current course state | [course-state.yaml](course-state.yaml) for the compact machine-readable checkpoint. |
| Lesson sequence | [curriculum/roadmap.md](curriculum/roadmap.md) and [curriculum/progress-tracker.md](curriculum/progress-tracker.md), with per-lesson artifact status in [data/lesson-sources.json](data/lesson-sources.json). |
| Lesson dependencies | Generated as an MDX prerequisite graph by [src/pages/data/lesson-dependency-graph.json.ts](src/pages/data/lesson-dependency-graph.json.ts), enriched with source-map existence from [data/lesson-sources.json](data/lesson-sources.json); human notes live in [reference/lesson-dependencies.md](reference/lesson-dependencies.md). |
| Polished lessons | MDX files under [src/content/lessons](src/content/lessons/) rendered by [src/pages/lessons](src/pages/lessons/). |
| Raw transcripts | [lessons/transcripts](lessons/transcripts/) for Lessons 1-25. Treat as source material until reviewed. |
| Notability PDFs | [artifacts/notability-pdfs](artifacts/notability-pdfs/) for Lessons 2-26. Treat as handwritten source artifacts, especially for exercise review. |
| Notation | Local lesson symbol tables first; recurring notation in [reference/symbol-table.md](reference/symbol-table.md) and [reference/notation.md](reference/notation.md). |
| Glossary and reference | Short definitions in [reference/glossary.md](reference/glossary.md); expanded concept cards in [reference/mathematical-vocabulary.md](reference/mathematical-vocabulary.md). |
| Learning observations | New durable entries under [learning-journal](learning-journal/); older preserved notes in [learning-journal.md](learning-journal.md) and [journal/learning-journal.md](journal/learning-journal.md). |

## Current Course State

The canonical state is [course-state.yaml](course-state.yaml). As of the latest update, Lessons 1-28 are complete and the next topic is Adam.

Forward polished lessons live under [src/content/lessons](src/content/lessons/). Raw exported Markdown transcripts for Lessons 1-25 live under [lessons/transcripts](lessons/transcripts/) and should be treated as source material until reviewed.

Handwritten Notability PDFs for Lessons 2-26 live under [artifacts/notability-pdfs](artifacts/notability-pdfs/). The PDFs are source artifacts, not proof that a polished lesson is complete.

## Historical Notability PDF Import

See [`docs/drive-pdf-import.md`](docs/drive-pdf-import.md).

The committed Notability PDFs cover Lessons 2 through 26. The Google Drive importer was a one-time bootstrap path for getting source artifacts into the repo, not an ongoing synchronization workflow.

## Development Commands

Use Bun for TypeScript tooling:

```bash
bun install
bun run dev
bun run build
bun run typecheck
bun test
bun run import-drive-pdfs
```
