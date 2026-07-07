---
name: moa-maintain-continuity
description: Maintain Mathematics of AI course continuity after lessons or planning changes. Use when Jason asks to finish a lesson, advance course state, update the roadmap, record new notation/glossary terms, preserve learning preferences, or prepare the next topic sequence for the remaining course.
---

# MOA Maintain Continuity

## Overview

Update the course ledger after a lesson so future sessions inherit the right state without rereading every transcript.
Preserve the teaching preferences that make the course work: intuition first, local symbol tables, low working-memory load, and programming connections when helpful.

## Workflow

1. Read current state.
   - `course-state.yaml`
   - `curriculum.md`
   - `notation.md`
   - `glossary.md`
   - `learning-journal.md`
   - The lesson page or transcript just completed.

2. Update the minimum necessary files.
   - Advance `course-state.yaml` only when a real lesson is complete.
   - Add durable notation to `notation.md`.
   - Add durable vocabulary to `glossary.md`.
   - Add durable learning observations to `learning-journal.md`.
   - Adjust `curriculum.md` only when the roadmap changes.

3. Keep updates durable.
   - Record concepts and preferences, not private personal details.
   - Prefer concise bullets over transcript-style narrative.
   - Do not include ephemeral setup chatter.

4. Validate.
   - Run `bun run validate`.
   - Run `bun run build` if TypeScript or generated content changed.

## References

Read `references/continuity-checklist.md` when deciding what to update after a lesson.

## Guardrails

- Do not create a fake lesson number for setup or import work.
- Do not rewrite prior learning notes unless they are wrong or superseded.
- Do not mark a lesson complete until transcript/source artifacts and course state agree.
