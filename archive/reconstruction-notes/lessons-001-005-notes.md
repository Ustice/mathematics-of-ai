# Lessons 1-5 Archive Backfill Notes

## Durable notation and glossary concepts

- `x`, `y`, and `\mathbb{R}^n` as the basic vector vocabulary.

- `\|x\|` for Euclidean length and `x \cdot y` for alignment.

- `\cos\theta` and cosine similarity for direction-only comparison.

- `A`, `W`, `b`, `I`, and `e_1, e_2` for matrices as transformations and neural-layer notation.

- `BA` as composition, read right-to-left.

- `det(A)` as area or volume scaling, with sign indicating orientation.

- `A^{-1}` and `A x = b` for undoing transformations and solving linear systems.

## Continuity updates recommended for the integrator

- Update the canonical reference docs for lessons 1-5 so the new symbol table entries and glossary terms are easy to discover from the repo's current authority files.

- Add or confirm dependency metadata for lessons 1-5 so the lesson graph reflects the linear algebra run from vectors through inverse matrices.

- Promote the new lesson pages from raw transcript source to reviewed MDX in the source map once merge coordination is complete.

- Keep the raw transcripts in place; the backfill should read like a polished forward path, not a relocation of source artifacts.

## Validation

- `bun run validate`: passed.

- `bun run build`: passed.

