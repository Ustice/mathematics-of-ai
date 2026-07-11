# Archive Backfill Notes: Lessons 011-015

## Durable notation and glossary concepts

- `μ` as mean vector or mean scalar. Across Lessons 11-15, it consistently marks the center used for centering, covariance, Mahalanobis distance, and Gaussian density.
- Centering as `x - μ` for data points and `X - E[X]` or `X̃` for random variables. This is the repeated move that makes variance and covariance geometric.
- `Σ` as covariance matrix. By Lesson 15 it is carrying three linked meanings:
  - spread along each coordinate via diagonal entries;
  - co-variation via off-diagonal entries;
  - ellipsoidal geometry of a Gaussian distribution.
- `Var(X)` as the special case `Cov(X, X)`. This relationship is worth preserving in shared notation docs because it reduces memorization load.
- `Cov(X, Y)` as the centered product averaged by expectation. The durable conceptual upgrade is "covariance as an inner product on centered random variables."
- `ρ(X, Y)` as correlation, interpreted geometrically as normalized covariance or cosine.
- Principal directions / principal components as eigenvectors of covariance and, equivalently, right singular vectors of the centered data matrix.
- `Λ` as the diagonal matrix of eigenvalues or principal variances, and `VΛV^T` as the covariance eigendecomposition.
- Whitening as rotation into principal directions followed by scaling by `Λ^{-1/2}`.
- `Σ^{-1}` as the precision matrix and
  `d_M^2 = (x - μ)^T Σ^{-1} (x - μ)` as squared Mahalanobis distance.
- `|Σ|` as the covariance determinant, carrying the volume-scaling interpretation needed for Gaussian normalization.

## Recommended continuity/reference updates for the integrator

- Update `data/lesson-sources.json` entries for Lessons 11-15 to add the new `dynamic_page` paths and advance status from `raw_export` to `reviewed` if that matches the integration policy.
- Consider adding or refining shared entries in `reference/notation.md` for:
  - centered variables with tilde notation;
  - covariance as an inner product / Gram-matrix viewpoint;
  - precision matrix;
  - Mahalanobis distance;
  - whitening transform.
- Consider adding glossary entries in `reference/glossary.md` for:
  - principal component;
  - whitening;
  - precision matrix;
  - Mahalanobis distance.
- If the lesson-dependency reference is being maintained centrally, Lessons 11-15 now form a clean chain:
  - 11: PCA;
  - 12: covariance as the explanation for PCA;
  - 13: probability recast in linear-algebra language;
  - 14: covariance as geometry;
  - 15: multivariate Gaussian from covariance geometry.

## Validation

- `bun run validate`: passed. All 17 tests passed.
- `bun run build`: failed in this worktree environment before content build verification. The script's `bun run typecheck` step could not find `tsc`.
- Follow-up checks:
  - `bun x tsc --noEmit` failed with `TS2688: Cannot find type definition file for 'bun'`.
  - `bun x astro build` failed to load `@astrojs/mdx` from the worktree environment.
- Conclusion: lesson-file validation is clean at the repo test level, and the remaining failures appear to be local toolchain resolution issues rather than MDX content errors in Lessons 11-15.
