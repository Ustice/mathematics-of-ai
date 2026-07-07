---
name: moa-create-lesson
description: Create or update forward-facing Mathematics of AI lesson pages, especially new dynamic HTML/MDX lessons, lesson metadata, source-map entries, and transcript-to-polished-lesson workflows. Use when Jason asks to create the next lesson, convert a raw transcript into a lesson page, add lesson metadata, wire a Notability PDF into a lesson, or prepare a lesson for review/publishing.
---

# MOA Create Lesson

## Overview

Create new lessons for the road ahead, not a bulk backfill of Lessons 1-25.
Treat old transcripts as raw reference material and optimize for a repeatable forward production loop.

## Workflow

1. Confirm scope.
   - Default to the next new lesson or the named forward lesson.
   - Backfill an older lesson only when explicitly requested or needed as a prerequisite link.
   - Keep Notability PDFs as source artifacts, not final polished lesson pages.
   - If the lesson topic, audience, and source context are clear, finish the lesson to a coherent draft or review-ready stopping point instead of waiting for another prompt.

2. Read project state.
   - `README.md`
   - `course-state.yaml`
   - `curriculum.md`
   - `curriculum/roadmap.md`
   - `data/lesson-sources.json`
   - `reference/notation.md`, `reference/glossary.md`, and existing learning notes when the lesson introduces notation, vocabulary, or durable learning observations.

3. Use the forward lesson shape.
   - If the dynamic lesson platform exists, create or edit `content/lessons/lesson-NNN-slug.mdx`.
   - If the platform does not exist and the task requires a dynamic page, scaffold the smallest Astro/MDX vertical slice first.
   - Keep lesson metadata close to the page and mirror it in `data/lesson-sources.json` only for cross-repo indexing.

4. Write the lesson as a learning path.
   - Start with intuition, then vocabulary, then notation, then computation.
   - Include a local symbol table whenever new notation appears.
   - Prefer small, concrete derivations over long formula walls.
   - Add explicit prerequisite links to prior raw or polished lessons.
   - Mark opportunities for widgets instead of forcing every concept to be interactive.

5. Wire artifacts.
   - Link Notability PDFs under `artifacts/notability-pdfs/lesson-NNN-slug.pdf`.
   - Use `notability_pdf` for one artifact and `notability_pdfs` for several in `data/lesson-sources.json`.
   - Use `status: draft`, `raw_export`, `reviewed`, or `published` consistently.

6. Validate.
   - Run `bun run build`.
   - Run `bun run validate`.
   - If a page or widget was added, run any app-specific tests and inspect the rendered page.
   - When the lesson naturally implies exercise or continuity updates, either complete those updates with the relevant project skill guidance or leave an explicit reason why they were deferred.

## References

Read `references/lesson-schema.md` when adding frontmatter, `data/lesson-sources.json` fields, or a new lesson status.

## Guardrails

- Do not spend effort polishing the whole historical archive unless the user asks.
- Do not publish raw transcripts as polished lessons.
- Redact private app links and private-ish chatter from polished pages.
- Keep the lesson page useful without the widget; widgets enhance, they do not carry the explanation.
- Do not stop at an outline when enough information exists to create the actual lesson artifact.
