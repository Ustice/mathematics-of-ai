# Lesson Transcripts

This directory records the transcript policy and the earlier reconstruction plan.
The exported lesson conversations now live in `lessons/transcripts/`.

## Status

Lessons 1-25 have exported Markdown transcripts in `lessons/transcripts/`.
Lesson 26 Preparation was intentionally skipped because it mostly covers repository setup rather than course content.

Future transcript work should be built from:

1. exported ChatGPT lesson conversations,
2. visible project conversation context,
3. uploaded Notability exercise PDFs,
4. generated lesson notes already committed to the repository.

## Transcript Policy

For public use, transcripts should be lightly edited rather than dumped verbatim.

Recommended edits:

- remove private or irrelevant material,
- preserve mathematical explanations and corrections,
- preserve user questions that changed the lesson direction,
- keep notation and symbol-table decisions,
- mark uncertain reconstructions clearly,
- link to handwritten PDFs when available.

## File Naming

Use one transcript file per lesson in `lessons/transcripts/`:

```text
lessons/transcripts/lesson-01-vectors.md
lessons/transcripts/lesson-02-matrices-as-linear-transformations.md
...
lessons/transcripts/lesson-25-dropout.md
```

If a cleaned public edition is created later, each file should start with YAML front matter:

```yaml
title: Lesson 10 — Singular Value Decomposition
status: reconstructed | exported | partial
sources:
  - chat: Lesson 10 Singular Value Decomposition
  - pdf: artifacts/notability-pdfs/lesson-010-singular-value-decomposition.pdf
```
