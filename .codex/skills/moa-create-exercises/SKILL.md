---
name: moa-create-exercises
description: Review Mathematics of AI exercise images, organize them by lesson, and use the review to decide whether the learner is ready for the next lesson. Use when Jason submits handwritten work, asks for exercise review, or needs exercise artifacts connected to lesson metadata.
---

# MOA Create Exercises

## Overview

Treat exported images of handwritten work as the canonical exercise artifacts. Review them for conceptual readiness, store them in a lesson-specific directory, and do not create new exercise Markdown files.

When Jason identifies an upload as backfill or says the work was already evaluated, treat it as archival import: store and index the images without re-evaluating the answers, changing readiness, or adding review commentary.

## Workflow

1. Anchor on the lesson goal.
   - Read the lesson page or raw transcript.
   - Resolve the requested or active lesson from the Course Checkpoint, Lesson Pages, and `data/lesson-artifacts.json`.
   - Do not treat lesson numbers, titles, artifact coverage, or paths written in this skill or its examples as current repository facts.
   - Read `reference/notation.md`, `reference/glossary.md`, and existing learning notes when exercises depend on notation, vocabulary, or known friction points.
   - Identify which concepts need intuition, mechanics, derivation, and transfer practice.

2. Review the submitted work.
   - Skip this step for explicitly identified archival backfill.
   - Check conceptual understanding, mechanics, derivation, and transfer to machine learning.
   - Distinguish real blockers from small wording or notation refinements.
   - Decide explicitly whether the work demonstrates readiness for the next lesson.

3. Store the images.
   - Use `exercises/lesson-NNN-slug/exercise-NN.jpg` in reading order.
   - Omit accidentally exported blank pages.
   - Keep all artifacts for one lesson in that lesson's directory.
   - Register the lesson directory as `exercise_module` in `data/lesson-artifacts.json`; numeric filenames define image order.

4. Continue the course when ready.
   - If the review passes, use the lesson and continuity skills to finish the existing next-lesson draft or create the next lesson from repo state.
   - If the review exposes a prerequisite gap, explain the smallest correction needed before advancing.

5. Validate.
   - Ensure every linked artifact exists.
   - Run `bun run validate`.
   - Verify that every image opens and has nonzero dimensions.

## References

Read `references/exercise-patterns.md` when designing a new practice set or deciding what belongs in Notability versus HTML.

## Guardrails

- Do not create new exercise Markdown files.
- Do not retain blank image exports.
- Do not advance merely because files were submitted; base readiness on the mathematical work.
