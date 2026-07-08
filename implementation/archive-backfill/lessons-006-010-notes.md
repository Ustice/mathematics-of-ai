# Lessons 6-10 Archive Backfill Notes

## Durable Notation And Vocabulary

Lessons 6-10 introduce or stabilize the following reusable ideas:

- Eigenvector and eigenvalue as the pair in \(Av = λv\).
- Eigenpair and characteristic equation.
- Orthogonal and orthonormal basis.
- Orthogonal matrix and the transpose-as-inverse identity.
- Change of basis and coordinate vector.
- Projection, projection formula, and residual.
- Column space and overdetermined system.
- Least squares and normal equations.
- Design matrix and least-squares solution.
- Singular value, singular vector, and singular value decomposition.
- Explained energy or variance from squared singular values.

These terms feel durable enough to carry into the reference docs, not just lesson-local prose.

## Recommended Shared Updates

- `reference/notation.md`
  - Add `orthogonal matrix`, `orthonormal basis`, `projection`, `residual`, `column space`, `normal equations`, `design matrix`, `least-squares solution`, `singular vector`, and `SVD` if the course wants them in the compact notation table.
  - Consider adding a short note that explained variance uses squared singular values.

- `reference/glossary.md`
  - Add learner-friendly definitions for `orthogonal matrix`, `orthonormal basis`, `projection`, `residual`, `least squares`, `normal equations`, `design matrix`, `singular vector`, `singular value decomposition`, and `principal component`.
  - Keep the existing eigenvector/eigenvalue entries, but align them with the lesson wording if the integrator wants tighter consistency.

- `reference/symbol-table.md`
  - If the course wants a compact canonical table for overloaded symbols, this range is a good candidate for entries around `A`, `x`, `b`, `λ`, `σ`, and `Q`.

- `learning-journal.md` or `journal/learning-journal.md`
  - No immediate course-level rewrite seems necessary from these lessons alone.
  - If a new note is added, it should probably emphasize the geometry-first path from projection to least squares to SVD.

## Validation

Validation status: `bun run validate` passed.

`bun run build` failed in this worktree because `tsc` was not available on PATH:

```text
/bin/bash: tsc: command not found
```

