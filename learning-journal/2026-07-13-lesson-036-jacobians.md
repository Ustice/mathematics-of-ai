# Lesson 36 - Jacobians

## What Clicked

- The output-by-input convention was used consistently: a function from \(\mathbb R^n\) to \(\mathbb R^m\) has an \(m\times n\) Jacobian.
- Rows were identified as transposed output gradients, while columns were identified as the full output response to one input-coordinate motion.
- Jacobian-vector multiplication was used correctly to predict a first-order vector output change.
- Affine maps were recognized as having constant Jacobian \(A\), with the bias disappearing under differentiation.
- Gradients were correctly distinguished from scalar-output Jacobians by transpose and shape.
- Compatible Jacobian shapes were used to predict the chain-rule multiplication order.
- A null-space direction was found and interpreted as producing no first-order output change.
- The Jacobian was understood as both a table of partial derivatives and the coordinate matrix of one local linear map.

## Refinements To Carry Forward

- In TypeScript, use `row` or `output` for the outer Jacobian index and `column` or `input` for the inner index; consistent names make the mathematical convention visible in code.
- Keep the numerical-Jacobian helper name consistent between its definition and call site, and finish checks with an explicit invocation or assertion.
- When \(Jv=0\), every scalar multiple of that particular null-space direction has zero first-order effect; this does not mean every possible direction does.

## Readiness

The work demonstrates readiness for the chain rule and computation graphs. The remaining corrections are implementation completeness and wording precision, not conceptual blockers.
