# Lesson 32 - Convexity

## What Clicked

- A convex set contains every chord between its points, while a convex function lies below the chord between endpoint function values.
- Numerical chord tests correctly distinguished $x^2$ from $-x^2$.
- Positive Hessian eigenvalues were used correctly to certify strict convexity for a quadratic.
- The first-order convexity inequality correctly showed that a zero-gradient point is globally minimizing.
- Unequal Hessian eigenvalues were connected to overshoot and slow progress in gradient descent.

## Refinements To Carry Forward

- A twice-differentiable convex function has nonnegative second derivative or positive-semidefinite Hessian; zero curvature is allowed.
- The convexity gap $t f(x)+(1-t)f(y)-f(tx+(1-t)y)$ is nonnegative for a convex function.
- For $f:\mathbb{R}^n\to\mathbb{R}$, a convexity-gap implementation must interpolate whole vectors and evaluate $f$ once per vector, returning one scalar gap.
- In the first-order inequality at $x^*$, the displacement is $y-x^*$.

## Readiness

The exercise work demonstrates readiness to continue to constrained optimization. The gap-sign and vector-function implementation errors are targeted precision issues, not prerequisite blockers.
