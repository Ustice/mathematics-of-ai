# Lesson Transcripts

This directory is for cleaned lesson conversation transcripts and reconstructed lesson dialogue.

## Status

I do not currently have direct file-level access to raw ChatGPT project conversation transcripts. The material here should therefore be built from:

1. exported ChatGPT lesson conversations, when available,
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

Use one transcript file per lesson:

```text
transcripts/lesson-001.md
transcripts/lesson-002.md
...
transcripts/lesson-026.md
```

Each file should start with YAML front matter:

```yaml
title: Lesson 10 — Singular Value Decomposition
status: reconstructed | exported | partial
sources:
  - chat: Lesson 10 Singular Value Decomposition
  - pdf: artifacts/notability-pdfs/lesson-010-singular-value-decomposition.pdf
```
