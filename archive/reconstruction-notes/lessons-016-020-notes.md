# Lessons 016-020 Backfill Notes

## Durable notation and glossary concepts introduced

- `θ` as an unknown model parameter, especially for Bernoulli coin or marble examples.
- `D` as the observed dataset held fixed while parameters vary.
- `L(θ)` as a likelihood function: the data is fixed, the parameter varies.
- `ℓ(θ)` as the log-likelihood, mainly for product-to-sum simplification and numerical stability.
- `\hat{θ}` as an estimator or point estimate, with explicit distinction between `\hat{θ}_{MLE}` and `\hat{θ}_{MAP}`.
- `P(D | θ)` versus `P(θ | D)` as a durable distinction worth reinforcing in `reference/notation.md`.
- `P(θ)` / prior, `P(θ | D)` / posterior, and `P(D)` / evidence as the core Bayesian estimation vocabulary.
- `ε_i` as per-example noise or residual in the Gaussian observation model.
- `f_θ(x_i)` and `\hat{y}_i` as model prediction notation that naturally supports later regression lessons.
- `σ^2` as observation-noise variance and `τ^2` as prior variance.
- `∝` as "proportional to before normalization," especially in sequential Bayesian updates.
- L2 regularization as the squared L2 norm induced by a Gaussian prior; possible future shared glossary companion with L1 / Laplace prior and sparsity.

## Recommended continuity or reference updates for the integrator

- Add a concise probability-versus-likelihood note to `reference/notation.md` or `reference/symbol-table.md`; that distinction is central across Lessons 16-20.
- Add prior / likelihood / posterior / evidence to `reference/glossary.md` if they are not already defined there in lesson-local language.
- Add `ℓ(θ)` as explicit log-likelihood notation if the reference docs currently list only `L(θ)`.
- Consider a short note in `reference/glossary.md` that "loss functions are often negative log-likelihoods" because Lessons 17 and 18 make that connection foundational.
- Consider adding an L1 versus L2 regularization cross-reference once the shared docs are updated, since Lesson 18 introduces the Gaussian-prior-to-L2 bridge and mentions Laplace priors as the next contrast.

## Validation

- `bun run validate` passed.
- `bun run build` did not complete in this worktree because the `typecheck` step failed with `/bin/bash: tsc: command not found` before Astro build started.
