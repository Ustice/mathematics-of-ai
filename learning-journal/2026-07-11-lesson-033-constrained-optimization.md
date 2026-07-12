# Lesson 33 - Constrained Optimization

## What Clicked

- The objective was correctly identified as a scalar field, while its gradient is a vector field.
- Equality constraints, inequality constraints, and feasible sets were distinguished clearly.
- The probability simplex was recognized as a convex feasible set.
- Lagrange-multiplier algebra correctly solved a simple equality-constrained minimum.
- Finite penalties were correctly distinguished from exact hard constraints.
- Projected gradient descent was understood as gradient step followed by projection.

## Refinements To Carry Forward

- Inequality conventions need explicit sign discipline: under $h(x)\ge0$, a point with $h(x)<0$ is infeasible, not inactive.
- Check primal feasibility before applying complementary slackness.
- At a smooth equality-constrained optimum, objective and constraint gradients are parallel normal vectors, with the multiplier retained in the stationarity equation.
- Projection restores feasibility by definition because $\Pi_C$ maps into $C$; convexity supports uniqueness of Euclidean projection.
- In vector pseudocode, apply coordinatewise updates to the current vector and preserve the scalar-field versus vector-field type distinction.

## Readiness

The work demonstrates readiness for Partial Derivatives. The remaining issues are notation and constraint-convention precision, not prerequisite blockers.
