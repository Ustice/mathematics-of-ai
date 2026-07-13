# Lesson 35 - Gradients

## What Clicked

- A gradient was distinguished from a single partial derivative as the collection of all coordinate sensitivities.
- Directional derivatives were computed through the dot product and connected to unit-vector normalization.
- Cauchy-Schwarz was used to justify the gradient as the direction of steepest unit-distance increase.
- The negative gradient was connected to a predicted first-order decrease in loss.
- The differential was correctly distinguished from its Euclidean gradient-vector representation.
- Analytic gradients were connected to centered finite-difference checks in TypeScript.

## Refinements To Carry Forward

- Preserve signs exactly when copying a vector or function; a single changed sign can reverse directional-derivative conclusions.
- The gradient lives in the input space and is normal to a contour line there; it is not tangent to that contour.
- In a first-order approximation, evaluate both the base value and gradient at the specified base point before applying the displacement.
- Keep shape annotations explicit as scalar-output calculus expands to vector-valued functions.

## Readiness

The work demonstrates readiness for Jacobians. The remaining issues are local transcription, arithmetic, and geometric phrasing rather than conceptual blockers.
