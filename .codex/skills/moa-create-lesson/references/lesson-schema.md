# Lesson Schema

Use these fields for new dynamic lesson pages and source-map entries.

## Page Frontmatter

```yaml
lesson: <lesson-number>
title: <lesson-title>
slug: lesson-<zero-padded-number>-<slug>
description: <one-sentence-description>
phase: <curriculum-phase>
status: draft
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

Do not put transcript or PDF paths in page frontmatter. Keep those in `data/lesson-sources.json`.
Resolve current values and path conventions from the repository; this template is schematic, not a content snapshot.

## Source Map Fields

- `lesson`: numeric lesson identifier when the lesson is real and exported.
- `title`: display title.
- `chat`: source conversation label, if any.
- `transcript`: raw transcript path, or `null` when no transcript exists.
- `dynamic_page`: forward MDX page path when available.
- `notability_pdf`: single PDF artifact path.
- `notability_pdfs`: several PDF artifact paths.
- `status`: `draft`, `raw_export`, `reviewed`, or `published`.

## Status Meanings

- `draft`: actively being written.
- `raw_export`: raw transcript or source artifact exists, not polished.
- `reviewed`: checked for math, links, and private material.
- `published`: ready for normal reading.
