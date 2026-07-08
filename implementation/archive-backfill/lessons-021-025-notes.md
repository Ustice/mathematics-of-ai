# Lessons 021-025 Backfill Notes

## Scope

Converted the Lesson 21-25 raw transcripts into review-ready MDX lesson pages under `src/content/lessons/`.

## Durable Notation And Glossary Concepts

Recommended durable notation additions for the integrator to consider:

- Lesson 21:
  - `x_next` for the next observation
  - `P(x_next|θ)` for a hypothesis-specific prediction
  - `P(x_next|D)` for the posterior predictive distribution
  - "model averaging" and "posterior predictive distribution"
- Lesson 22:
  - `y = f(x) + ε` as the signal-plus-noise mental model
  - "model capacity"
  - "underfitting"
  - "overfitting"
  - "generalization"
- Lesson 23:
  - `λ` as regularization strength
  - `||w||_1` and `||w||_2^2`
  - "regularization"
  - "weight decay"
  - "sparsity"
- Lesson 24:
  - `L_train(e)` and `L_val(e)`
  - `e_best`
  - "validation set"
  - "early stopping"
  - "patience"
  - "hyperparameter"
- Lesson 25:
  - `p` as keep probability
  - `1 - p` as dropout rate
  - `m` as dropout mask
  - "co-adaptation"
  - "inverted dropout"
  - "distributed representation"

## Continuity / Reference Recommendations

- Update `reference/notation.md` with the recurring symbols above if you want lessons 21-25 to share a common reference layer.
- Update `reference/glossary.md` with the durable terms above, especially:
  - posterior predictive distribution
  - model averaging
  - generalization
  - regularization
  - early stopping
  - dropout
- Consider a short continuity note that Lessons 22-25 form a generalization arc:
  - model complexity -> regularization -> early stopping -> dropout
- Transcript tails around this range include some course-order drift in the "Looking ahead" blurbs and post-lesson review labels. I treated the main lesson topic from the transcript filename and heading as authoritative, not the tail preview text.

## Validation

- `bun run validate`: passed
- `bun run build`: failed before Astro content build because the environment could not find `tsc` (`/bin/bash: tsc: command not found`)
