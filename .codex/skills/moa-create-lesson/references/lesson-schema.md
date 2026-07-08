# Lesson Schema

Use these fields for new dynamic lesson pages and source-map entries.

## Page Frontmatter

```yaml
lesson: 26
title: Gradient Descent
slug: lesson-026-gradient-descent
description: Gradient descent as a local movement rule for minimizing loss functions.
phase: Optimization and Calculus for Machine Learning
status: draft
objectives:
  - Explain the local slope intuition behind gradient descent.
symbols:
  - symbol: "η"
    meaning: Learning rate
prerequisites:
  - lesson: 17
    title: Loss Functions
widgets:
  - gradient-descent-path
```

Do not put transcript or PDF paths in page frontmatter. Keep those in `data/lesson-sources.json`.

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
