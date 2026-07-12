# Lesson 33 - Constrained Optimization

## What Clicked

- The objective was correctly identified as a scalar field, while its gradient is a vector field.
- Equality constraints, inequality constraints, and feasible sets were distinguished clearly.
- The probability simplex was recognized as a convex feasible set.
- Lagrange-multiplier algebra correctly solved a simple equality-constrained minimum.
- Finite penalties were correctly distinguished from exact hard constraints.
- Projected gradient descent was understood as gradient step followed by projection.

## Refinements To Carry Forward

- Preserve inequality signs carefully when copying a constraint. The exercise used $h(x)\le0$; writing $h(x)\ge0$ changes which points are feasible even when the intended active/inactive classifications are correct.
- Complementary slackness was applied correctly: under the $h(x)\le0$ convention, strict slack $h(x)<0$ forces $\mu=0$.
- At a smooth equality-constrained optimum, objective and constraint gradients are parallel normal vectors, with the multiplier retained in the stationarity equation.
- Projection restores feasibility by definition because $\Pi_C$ maps into $C$; convexity supports uniqueness of Euclidean projection.
- In vector pseudocode, apply coordinatewise updates to the current vector and preserve the scalar-field versus vector-field type distinction.

## Readiness

The work demonstrates readiness for Partial Derivatives. The remaining issues are notation and constraint-convention precision, not prerequisite blockers.
