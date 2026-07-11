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

Do not put transcript or exercise-image paths in page frontmatter. Keep those in `data/lesson-sources.json`.
Resolve current values and path conventions from the repository; this template is schematic, not a content snapshot.

## Source Map Fields

- `lesson`: numeric lesson identifier when the lesson is real and exported.
- `title`: display title.
- `chat`: source conversation label, if any.
- `transcript`: raw transcript path, or `null` when no transcript exists.
- `dynamic_page`: forward MDX page path when available.
- `exercise_images`: ordered paths to handwritten exercise images.
