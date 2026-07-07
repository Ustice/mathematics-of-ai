# Common Patterns

This file collects recurring mathematical templates. Use these when a lesson starts to feel like many unrelated formulas.

## Probability-to-Optimization Pattern

```text
Assume probability model
↓
Write likelihood
↓
Take logarithm
↓
Ignore constants that do not affect argmax/argmin
↓
Optimize
↓
Interpret the objective statistically
```

Use when moving from statistical assumptions to losses, MLE, MAP, or training objectives.

Invariant: Changing by a positive scale or additive constant does not change the optimizer, when the transformation preserves order.

## Diagonalization Pattern

```text
Find a basis where the transformation separates cleanly
↓
Represent the transformation diagonally
↓
Solve the problem independently by dimension
↓
Transform back if needed
```

Use when a matrix, covariance structure, or quadratic form becomes simple in the right basis.

Invariant: The object is the same object; only the coordinate description changes.

## Regularization-as-Prior Pattern

```text
Choose a prior over parameters
↓
Combine with likelihood
↓
Take negative log posterior
↓
Obtain data loss plus penalty term
```

Use when explaining why L1 and L2 penalties have probabilistic interpretations.

Invariant: Prior pressure becomes a penalty after taking negative logs.

## Compression Through Abstraction Pattern

```text
Identify repeated structure
↓
Name it
↓
Trust the abstraction
↓
Stop expanding it every time
```

Use when a lesson keeps reusing the same derivation step, definition, or geometric fact.

Invariant: The abstraction remains grounded in the original derivation, but it no longer has to occupy active working memory.

## Orthogonality-as-Optimality Pattern

```text
Define an error or residual
↓
Ask what would make it smaller
↓
Find the condition where no allowed direction improves it
↓
Express that condition as orthogonality
```

Use for projection, least squares, and geometric optimization arguments.

Invariant: At the closest point, the remaining error has no component in any allowed improvement direction.

## Center-Then-Measure Pattern

```text
Choose a reference point
↓
Subtract it from observations
↓
Measure spread, alignment, or error around that reference
↓
Interpret the resulting geometry
```

Use for variance, covariance, PCA, Gaussian geometry, and residual analysis.

Invariant: Spread is measured relative to a center, not absolute location.
