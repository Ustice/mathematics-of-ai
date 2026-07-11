# Roadmap

This roadmap organizes the Mathematics for Machine Intelligence program. It is meant to guide study, implementation, paper reading, and reference-building.

The roadmap is a topic map, not a completion ledger. Use [progress-tracker.md](progress-tracker.md) for milestone evidence, [../course-state.yaml](../course-state.yaml) for the compact course checkpoint, and [../data/lesson-sources.json](../data/lesson-sources.json) for artifact paths.

## Capability Arc

The established lesson sequence should build these capabilities without reordering existing Lessons 1-40 unless a real inconsistency is found:

```text
Linear Algebra
-> Statistical Modeling
-> Optimization
-> Neural Networks
-> Information Theory
-> Transformers
-> Paper Reading
```

## Phase I — Foundations

### 1. Linear Algebra for ML

- Vectors and vector spaces.
- Bases and change of basis.
- Linear maps as transformations.
- Matrix multiplication.
- Determinants.
- Inverse matrices.
- Eigenvalues and eigenvectors.
- Projections.
- Least squares.
- SVD.
- PCA.
- Covariance geometry.
- Matrix calculus.

### 2. Probability and Statistics

- Random variables.
- Expectation.
- Variance and covariance.
- Gaussian distributions.
- Multivariate Gaussian.
- Likelihood.
- MLE.
- MAP.
- Bayesian estimation.
- Predictive distributions.

### 3. Optimization

- Gradients.
- Hessians.
- Convexity.
- Constrained optimization.
- Gradient descent.
- SGD.
- Momentum.
- Adam.
- Regularization.

### 4. Information Theory

- Entropy.
- Cross entropy.
- KL divergence.
- Mutual information.
- Coding and compression intuition.

## Phase II — Mathematical Maturity

### 5. Real Analysis for ML

- Limits.
- Convergence.
- Continuity.
- Compactness.
- Normed spaces.

### 6. Functional Analysis and Kernels

- Hilbert spaces.
- Operators.
- Spectral theorem intuition.
- RKHS.
- Kernel methods.

### 7. Learning Theory

- PAC learning.
- VC dimension.
- Generalization.
- Bias and variance.
- Concentration inequalities.

## Phase III — Modern ML Mathematics

### 8. Representation Theory

- Symmetry.
- Group actions.
- Equivariance.
- Applications to equivariant neural networks.

### 9. Differential Geometry

- Manifolds.
- Tangent spaces.
- Information geometry.
- Geometric deep learning.

### 10. Spectral Graph Theory

- Graph Laplacians.
- Eigenvectors of graphs.
- Message passing.
- Graph neural networks.

### 11. Optimal Transport

- Wasserstein distance.
- Transport plans.
- Generative modeling connections.

### 12. Category Theory in ML

- Compositionality.
- Differentiable programming.
- Lenses and optics.
- Categorical probability.

## Phase IV — Research Reading

The research-reading phase turns mathematical fluency into paper-reading fluency.

Goals:

- Read classic and recent ML papers.
- Identify mathematical assumptions.
- Reproduce core arguments.
- Implement selected ideas.
- Critique claims independently.

## Lesson Design Principle

Each topic should eventually produce material that includes conceptual explanation, explicit notation, worked examples, exercises, implementation work, and a clear account of why the idea appears in machine learning.
