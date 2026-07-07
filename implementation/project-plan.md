# Implementation Project Plan

Companion implementation project:

```text
ml-from-first-principles
```

## Purpose

Use implementation to make the mathematics concrete. The point is to expose the structure of algorithms, objectives, gradients, and data representations, not to build a production-quality numerical library.

## Initial Language Preference

- TypeScript / JavaScript.
- No ML framework at first.
- Plain implementations that expose the math.
- Later comparisons with PyTorch, JAX, or similar libraries if they clarify the same ideas.

## Planned Implementations

- Vector and matrix helpers where instructive.
- PCA.
- Least squares.
- Logistic regression.
- Probability distributions.
- Optimizers.
- Small neural network.
- Reverse-mode autodiff.
- Attention.
- Transformer basics.
- Diffusion fundamentals.

## Implementation Notes

Prefer explicit variable names and shape comments where they reduce cognitive load. When formulas appear in code comments or docs, include a nearby notation table in the lesson or implementation note that introduces them.

## Suggested Early Sequence

1. Vector and matrix helpers.
2. Projection and least squares.
3. PCA.
4. Logistic regression.
5. Gradient descent and SGD.
6. Small neural network.
7. Reverse-mode autodiff.
8. Scaled dot-product attention.
9. Multi-head attention.
10. Minimal transformer block.
11. Diffusion fundamentals.
