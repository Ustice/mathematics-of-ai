---
name: moa-create-exercises
description: Create Mathematics of AI exercises, Notability-first practice prompts, web companion exercise sections, hints, checks, and artifact wiring. Use when Jason asks for exercises for a lesson, wants Notability prompts, wants HTML exercise pages, wants practice sets with hints/solutions, or needs exercise artifacts connected to lesson metadata.
---

# MOA Create Exercises

## Overview

Design exercises around handwritten reasoning first, with lightweight web support for prompts, hints, and mechanical checks.
Keep Notability as the main surface for derivations, diagrams, and reflective problem solving.

## Workflow

1. Anchor on the lesson goal.
   - Read the lesson page or raw transcript.
   - Resolve the requested or active lesson from `course-state.yaml` and `data/lesson-sources.json`; discover content and artifact paths from those files and existing neighboring entries.
   - Do not treat lesson numbers, titles, artifact coverage, or paths written in this skill or its examples as current repository facts.
   - Read `reference/notation.md`, `reference/glossary.md`, and existing learning notes when exercises depend on notation, vocabulary, or known friction points.
   - Identify which concepts need intuition, mechanics, derivation, and transfer practice.

2. Create the exercise ladder.
   - Start with meaning checks.
   - Add one or two mechanical drills only where fluency matters.
   - Add a derivation or proof-shaped prompt.
   - Add an application prompt connected to machine learning.
   - End with a reflection prompt that catches vocabulary or notation confusion.

3. Produce Notability-friendly prompts.
   - Use generous whitespace and clear numbering.
   - Ask for diagrams whenever geometry is the point.
   - Avoid tiny arithmetic unless it reveals structure.
   - Include explicit symbols and dimensions near the question.

4. Add web companion material when useful.
   - Include collapsible hints and final answers for self-study.
   - Use dynamic checks for small computations, not long-form proof grading.
   - Link an exported Notability PDF using the location and naming convention established by existing `notability_pdf` and `notability_pdfs` source-map entries.

5. Validate.
   - Ensure every linked artifact exists.
   - Run `bun run validate`.
   - If exercise pages or widgets changed, run the relevant page tests and inspect rendering.

## References

Read `references/exercise-patterns.md` when designing a new practice set or deciding what belongs in Notability versus HTML.

## Guardrails

- Do not replace Notability unless the user asks for a different medium.
- Do not make every exercise interactive.
- Do not hide the main learning work behind multiple-choice answers.
- Keep solutions separate from prompts unless the user asks for a single combined page.
