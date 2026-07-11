# Learning Journal

## Purpose

This journal records durable changes in the course model: what has become clearer, what teaching strategies work, and what should change in future lessons. It should not duplicate every lesson transcript.

## Current Teaching Model

Jason learns best when the lesson makes the generative structure visible:

- Start with why the concept exists.
- Keep the invariant visible.
- Derive formulas instead of presenting them as facts.
- Use symbol tables to externalize notation.
- Use named intermediate results to compress multi-step reasoning.
- Treat external memory as part of the lesson, not as a crutch.

Working-memory constraints affect presentation, not mathematical capability. The curriculum should reduce incidental bookkeeping while preserving the full mathematical idea.

## Lesson Milestones

- Lessons 1-9: Linear algebra objects and geometric intuition.
- Lessons 10-14: Spectral geometry, covariance, PCA, whitening.
- Lessons 15-18: Probability models, likelihood, MLE, MAP.
- Lessons 19-21: Bayesian estimation and prediction.
- Lessons 22-25: Model complexity, regularization, early stopping, dropout.

## Posterior Updates

- Jason remembers why better than what.
- He prefers derivation over memorization.
- Symbol tables reduce cognitive load.
- External memory is part of the learning process.
- Working-memory constraints affect presentation, not mathematical capability.
- Notation and concepts compete for the same cognitive resource.
- Geometric intuition is a strong entry point for linear algebra.
- Naming intermediate quantities makes derivations easier to hold.
- Connections to software engineering, abstraction, encapsulation, invariants, category theory, and group theory are useful when they reveal structure.

## Working Memory Notes

Recurring sources of load:

- Dense probability notation.
- Overloaded symbols such as \(X\), \(x\), \(L(\theta)\), and \(\lambda\).
- Multi-step derivations that introduce several symbols at once.
- Switching between data-as-fixed and data-as-random perspectives.
- Remembering which constants can be ignored during optimization.

Helpful interventions:

- Put symbol tables near first use.
- Keep assumptions visible in probability lessons.
- Separate notation introduction from conceptual introduction.
- Ask reconstruction questions after each derivation.
- Use dependency reminders rather than full re-explanations.

## Open Questions

- How much optimization vocabulary should be introduced before gradient descent?
- Which probability assumptions should become reusable named templates?
- When should the course introduce neural network notation formally?
- Should each edited lesson have a local assumptions table, or only probabilistic lessons?
- Which external references should become canonical companion readings?

## Concepts With Strong Intuition

- Matrices as transformations.
- Eigenvectors and eigenvalues conceptually.
- SVD and PCA conceptually.
- Covariance as geometry.
- Likelihood as a score rather than a probability distribution over parameters.
- Log-likelihood as a useful rescaling.
- MAP as likelihood plus prior pressure.
- Dropout as changing the per-batch computation graph while leaving the architecture fixed.

## Concepts To Reinforce

- Matrix multiplication mechanics.
- Eigenvalue/eigenvector computation steps.
- Multi-step derivations where many symbols are introduced at once.
- Dense probability notation.
- Optimization vocabulary as the course moves from regularization into gradient-based training.
