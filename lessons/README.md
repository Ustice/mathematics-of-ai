# Lessons

This directory is the workspace for lesson material.

## Polished Lessons

Forward polished lessons now live as MDX content under [../src/content/lessons](../src/content/lessons/) and render to static HTML through the Astro routes under [../src/pages/lessons](../src/pages/lessons/). Historical Markdown drafts can still use [lesson-template.md](lesson-template.md) when a lightweight planning artifact is useful.

The file type is an implementation detail. The durable standard is:

- Lessons share the same visual chrome, typography, navigation, symbol treatment, and exercise-link pattern.
- Lessons become dynamic only when interaction makes the mathematical idea clearer.
- Static prose, diagrams, and worked examples remain the baseline; widgets should clarify, not carry, the lesson.

Each lesson that introduces formulas should include a **Notation / Symbol Table** section so the learner does not have to reconstruct symbol meanings from memory.

Polished lessons should include:

- Goal.
- Motivation.
- Prerequisites.
- Notation / symbol table.
- Core ideas.
- Worked examples.
- Why the idea shows up in ML.
- Exercises.
- Implementation exercise.
- Reflection questions.

## Raw Source Material

Exported ChatGPT lesson transcripts currently live in [transcripts](transcripts/). Treat them as preserved source material for audit and revision, not as the user-facing lesson path.

Lessons 1-31 have corresponding MDX Lesson Pages under [../src/content/lessons](../src/content/lessons/). Artifact Records connect them to preserved Source Transcripts and Exercise Artifact Modules.

The archived source index is [../archive/lesson-source-index/index.html](../archive/lesson-source-index/index.html). The MDX lesson index is generated from [../src/pages/lessons/index.astro](../src/pages/lessons/index.astro). Machine-readable artifact relationships live in [../data/lesson-artifacts.json](../data/lesson-artifacts.json).

## Completion Rule

Do not mark a lesson complete merely because a transcript exists. A completed polished lesson should be edited, internally coherent, and linked to exercises, implementation notes, and reference entries where relevant.
