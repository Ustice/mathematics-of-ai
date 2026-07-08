# Lesson Transcripts

The exported lesson conversations live in `lessons/transcripts/`.

Lessons 1-25 have raw exported Markdown transcripts. They are source material for lesson reconstruction and should not be treated as polished public lessons until reviewed.

See:

- `lessons/index.html` for the source lesson index.
- `data/lesson-sources.json` for the machine-readable source map.

## Policy

Treat transcripts as source material, not polished lessons.

A cleanup pass should preserve mathematical explanations, corrections, user questions that changed the lesson, symbol-table decisions, and links to handwritten PDFs under `artifacts/notability-pdfs/`. It should remove irrelevant setup chatter, private-ish source context, and any non-course setup notes before publishing a polished lesson.

## Paths

Raw exported transcripts:

```text
lessons/transcripts/lesson-01-vectors.md
lessons/transcripts/lesson-02-matrices-as-linear-transformations.md
...
lessons/transcripts/lesson-25-dropout.md
```

Forward MDX lesson pages:

```text
src/content/lessons/lesson-001-topic.mdx
src/content/lessons/lesson-002-topic.mdx
...
```
