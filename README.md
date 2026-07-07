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

- Start with the [curriculum roadmap](curriculum/roadmap.md).
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

## Major Tracks

The program is organized around these tracks:

- **Curriculum:** roadmap, milestones, reading list, and progress tracking.
- **Lessons:** polished lesson notes, with raw transcripts preserved as source material.
- **Exercises:** mathematical and implementation exercises.
- **Implementation:** first-principles TypeScript / JavaScript projects, initially without ML frameworks.
- **Paper Reading:** structured notes for classic and modern ML papers.
- **Reference:** notation, glossary, symbol tables, mental models, and concept dependencies.
- **Learning Journal:** reflections on what clicked, what was confusing, and what the curriculum should reinforce.

## Repository Structure

Current canonical course documents:

- [curriculum/README.md](curriculum/README.md) — Curriculum directory guide.
- [curriculum/roadmap.md](curriculum/roadmap.md) — Long-term course roadmap.
- [curriculum/progress-tracker.md](curriculum/progress-tracker.md) — Milestone and module tracker.
- [curriculum/reading-list.md](curriculum/reading-list.md) — Curated reading slots by topic.
- [curriculum/milestones.md](curriculum/milestones.md) — Evidence criteria for milestones.
- [lessons/README.md](lessons/README.md) — Lesson workspace guide.
- [lessons/lesson-template.md](lessons/lesson-template.md) — Standard polished lesson template.
- [exercises/README.md](exercises/README.md) — Exercise workspace guide.
- [exercises/exercise-template.md](exercises/exercise-template.md) — Standard exercise set template.
- [implementation/README.md](implementation/README.md) — Implementation workspace guide.
- [implementation/project-plan.md](implementation/project-plan.md) — Companion implementation project plan.
- [papers/README.md](papers/README.md) — Paper-reading workspace guide.
- [papers/paper-reading-template.md](papers/paper-reading-template.md) — Structured paper reading template.
- [reference/README.md](reference/README.md) — Reference directory guide.
- [reference/notation.md](reference/notation.md) — Starter notation reference.
- [reference/glossary.md](reference/glossary.md) — Starter glossary.
- [learning-journal/README.md](learning-journal/README.md) — Learning journal guide.
- [learning-journal/journal-template.md](learning-journal/journal-template.md) — Journal entry template.

Preserved historical and source material:

- [curriculum.md](curriculum.md) — Top-level curriculum entry point retained for continuity.
- [course-state.yaml](course-state.yaml) — Compact machine-readable checkpoint from prior lesson work.
- [lessons/transcripts](lessons/transcripts/) — Raw exported ChatGPT lesson transcripts for Lessons 1-25.
- [exercises/index.md](exercises/index.md) — Exercise index and future polished exercise sets.
- [transcripts/README.md](transcripts/README.md) — Transcript review policy and historical planning notes.
- [artifacts/notability-pdfs](artifacts/notability-pdfs/) — Exported handwritten Notability PDFs for Lessons 2-25.
- [data/drive-pdf-manifest.json](data/drive-pdf-manifest.json) — Drive PDF import manifest.
- [data/lesson-sources.json](data/lesson-sources.json) — Lesson transcript/source index.
- [journal/learning-journal.md](journal/learning-journal.md) — Existing structured learning notes.
- [learning-journal.md](learning-journal.md) — Earlier flat learning journal preserved for continuity.
- [notation.md](notation.md) — Earlier top-level notation guide.
- [glossary.md](glossary.md) — Earlier top-level glossary.
- [scripts](scripts/) — Course maintenance scripts.

## Current Course State

Lessons 1-25 have raw exported Markdown transcripts under [lessons/transcripts](lessons/transcripts/). Treat those transcripts as source material until each lesson is reviewed and polished for public use.

Handwritten Notability PDFs for Lessons 2-25 live under [artifacts/notability-pdfs](artifacts/notability-pdfs/). Lesson 26 Preparation was intentionally skipped because it is mostly project setup context rather than lesson material.

The next course topic recorded in [course-state.yaml](course-state.yaml) is Gradient Descent.

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
