# Lesson 37 - Practice 37.1 Completion

## What Clicked

- Local derivatives were evaluated using the forward value stored at their own node.
- Jacobians were built component by component with rows labeled by outputs and columns by inputs.
- Consecutive path derivatives were multiplied, while contributions from parallel branches were added.
- Forward values and reverse sensitivities were kept distinct throughout scalar and vector examples.
- Jacobian composition used the correct intermediate value and multiplication order.

## Refinements To Carry Forward

- When comparing two computation graphs, name both the changed dependency structure and the changed numerical function.
- Complete independent checks all the way through differentiation and evaluation, even when the graph-based result is already convincing.

## Readiness

Practice 37.1 satisfies the Lesson 37 readiness criteria. The remaining refinements are about explanation and verification completeness, not chain-rule understanding. Ready for Lesson 38: Matrix Calculus Notation.
