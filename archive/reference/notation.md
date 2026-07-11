# Notation Guide

Historical snapshot: current notation authority lives in [reference/notation.md](../../reference/notation.md) and [reference/symbol-table.md](../../reference/symbol-table.md). Do not add new canonical entries here.

This file records notation conventions used across the course.

## General Conventions

- Symbols are introduced locally before being used heavily.
- Lessons should include a symbol table when new notation appears.
- Prefer named intermediate quantities when derivations become multi-step.
- Use both the proper mathematical notation and a plain-language name.

## Core Symbols

| Symbol | Meaning |
| --- | --- |
| \(x\) | Input value, vector, or observed data point depending on context |
| \(y\) | Target/output value |
| \(\theta\) | Model parameters |
| \(X\) | Data matrix or random variable, depending on context |
| \(\mu\) | Mean vector or expected value |
| \(\sigma^2\) | Variance |
| \(\Sigma\) | Covariance matrix |
| \(L(\theta)\) | Loss function |
| \(\nabla L(\theta)\) | Gradient of the loss with respect to parameters |
| \(\eta\) | Learning rate |

## Probability Notation

| Symbol | Meaning |
| --- | --- |
| \(P(A)\) | Probability of event \(A\) |
| \(p(x)\) | Probability density or probability mass, depending on context |
| \(E[X]\) | Expected value of random variable \(X\) |
| \(X \sim D\) | \(X\) is distributed according to distribution \(D\) |

## Linear Algebra Notation

| Symbol | Meaning |
| --- | --- |
| \(A\mathbf{x}\) | Matrix transformation applied to vector \(\mathbf{x}\) |
| \(A^{-1}\) | Inverse matrix |
| \(A^T\) | Transpose of \(A\) |
| \(\lambda\) | Eigenvalue |
| \(\mathbf{v}\) | Eigenvector or generic vector |
