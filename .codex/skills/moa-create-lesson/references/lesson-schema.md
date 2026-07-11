# Lesson Schema

Use these fields for new dynamic lesson pages and source-map entries.

## Page Frontmatter

```yaml
lesson: <lesson-number>
title: <lesson-title>
slug: lesson-<zero-padded-number>-<slug>
description: <one-sentence-description>
phase: <curriculum-phase>
objectives:
  - <observable-learning-objective>
symbols:
  - symbol: <symbol>
    meaning: <plain-English-meaning>
prerequisites:
  - lesson: <prerequisite-number>
    title: <prerequisite-title>
widgets:
  - <widget-id>
```

Do not put Source Transcript or Exercise Artifact Module paths in page frontmatter. Keep those in `data/lesson-artifacts.json`.
Resolve current values and path conventions from the repository; this template is schematic, not a content snapshot.

## Artifact Record Fields

- `lesson`: numeric lesson identifier when the lesson is real and exported.
- `chat`: source conversation label, if any.
- `transcript`: raw transcript path, or `null` when no transcript exists.
- `exercise_module`: lesson-numbered directory containing ordered exercise images and any lesson-specific review or implementation artifacts.

Within an Exercise Artifact Module, use `review.md` and `implementation.ts` when those optional artifacts exist. The Lesson Catalog discovers them by convention.
