# Lesson Dependencies

This map uses the available transcript titles and the high-level course progression. TODO: refine each entry as transcripts are converted into edited canonical lesson notes.

For machine-readable dependency data, generate from MDX frontmatter instead of duplicating prerequisites here. The site endpoint at `src/pages/data/lesson-dependency-graph.json.ts` reads `prerequisites` from `src/content/lessons/*.mdx` and enriches edges with source-map existence from `data/lesson-sources.json`.

## Lesson 1 — Vectors

Requires: Coordinate intuition and basic arithmetic.

Introduces: Vectors as data, components, distance, dot product, angle intuition, linear combinations.

Used later in: Every linear algebra lesson; probability-as-vector-space intuition; data representation in ML.

## Lesson 2 — Matrices as Transformations

Requires: Vectors and linear combinations.

Introduces: Matrices as linear transformations, columns as transformed basis vectors, identity matrix, simple geometric transformations.

Used later in: Matrix multiplication, determinants, inverses, eigenvectors, neural network layers.

## Lesson 3 — Matrix Multiplication

Requires: Matrices as transformations.

Introduces: Matrix multiplication as composition, order dependence, column-wise construction, geometric composition.

Used later in: Change of basis, SVD, covariance transformations, chained model computations.

## Lesson 4 — Determinants

Requires: Matrices as transformations and matrix multiplication intuition.

Introduces: Signed area/volume scaling, orientation, collapse, determinant as invertibility signal.

Used later in: Inverse matrices, multivariate Gaussian normalization.

## Lesson 5 — Inverse Matrices

Requires: Identity matrix, matrix multiplication, determinant/invertibility intuition.

Introduces: Inverse transformations, solving linear systems, geometric meaning of undoing a transformation.

Used later in: Change of basis, Gaussian precision/covariance geometry, Mahalanobis distance.

## Lesson 6 — Eigenvectors and Eigenvalues

Requires: Matrices as transformations, scalar multiplication, determinant/invertibility intuition.

Introduces: Directions preserved by a transformation, eigenvalue scaling, spectral interpretation.

Used later in: Change of basis, SVD, PCA, covariance geometry, whitening.

## Lesson 7 — Change of Basis

Requires: Vectors, bases, orthogonality, matrices, eigenvector intuition.

Introduces: Coordinates as representation, orthonormal bases, orthogonal matrices, rotation matrices, change of basis.

Used later in: SVD, PCA, diagonalization, whitening.

## Lesson 8 — Projection

Requires: Dot product, orthogonality, vectors, subspaces.

Introduces: Orthogonal projection, closest-point geometry, residual orthogonality, projection onto a subspace.

Used later in: Least squares, PCA, geometric optimization.

## Lesson 9 — Least Squares

Requires: Projection, matrix multiplication, orthogonality.

Introduces: Overdetermined systems, residual vectors, normal equation, least squares as projection onto a column space.

Used later in: Loss functions, Gaussian negative log-likelihood, regression, optimization.

## Lesson 10 — Singular Value Decomposition

Requires: Orthogonal matrices, change of basis, eigenvectors, matrix multiplication.

Introduces: SVD, singular values, input/output directions, rank and low-rank approximation intuition.

Used later in: PCA, dimensionality reduction, representation compression.

## Lesson 11 — Principal Component Analysis

Requires: Eigenvectors, SVD, orthogonality, variance intuition. TODO: reconcile covariance prerequisites with Lesson 12 after canonical notes are edited.

Introduces: Principal components, directions of maximum variance, dimensionality reduction, PCA/SVD connection.

Used later in: Covariance geometry, whitening, representation learning intuition.

## Lesson 12 — Covariance

Requires: Variance intuition, centering, vectors, matrices.

Introduces: Covariance, covariance matrix, interpreting co-movement, geometric spread.

Used later in: Covariance geometry, multivariate Gaussian, PCA, whitening.

## Lesson 13 — Probability as Linear Algebra

Requires: Vectors, dot product, expectation, covariance basics.

Introduces: Probability objects through linear algebra analogies, random variables as objects with geometry, expectation as a structural operation.

Used later in: Covariance geometry, Bayesian estimation, predictive distributions.

## Lesson 14 — Covariance Geometry

Requires: Covariance matrix, eigenvectors/eigenvalues, change of basis.

Introduces: Covariance as geometry, correlation as cosine, whitening, diagonalizing covariance.

Used later in: Multivariate Gaussian, whitening, Gaussian likelihoods.

## Lesson 15 — Multivariate Gaussian

Requires: Covariance geometry, inverse matrices, determinants, whitening.

Introduces: Multivariate Gaussian, Mahalanobis distance, covariance ellipses, determinant normalization.

Used later in: Gaussian likelihoods, squared-error loss, Bayesian models.

## Lesson 16 — Maximum Likelihood Estimation

Requires: Probability model, observed data, parameters, likelihood intuition from Gaussian models.

Introduces: Likelihood, parameter estimation, MLE, data fixed versus parameter varied.

Used later in: Loss functions, MAP, Bayesian estimation, regularization.

## Lesson 17 — Loss Functions

Requires: Likelihood, log-likelihood, MLE.

Introduces: Negative log-likelihood, loss functions, ignoring optimizer-irrelevant constants, squared error from Gaussian assumptions.

Used later in: MAP, regularization, optimization.

## Lesson 18 — Maximum A Posteriori Estimation

Requires: Likelihood, loss functions, Bayes' theorem, prior/posterior vocabulary.

Introduces: MAP, likelihood plus prior pressure, Gaussian prior to L2, Laplace prior to L1.

Used later in: Bayesian estimation, regularization-as-prior, model complexity.

## Lesson 19 — Bayesian Estimation Introduction

Requires: MLE, MAP, prior, posterior.

Introduces: Bayesian estimation as maintaining a distribution over plausible parameters rather than a single best point estimate.

Used later in: Bayesian updates, predictive distributions.

## Lesson 20 — Bayesian Estimation Update

Requires: Bayesian estimation introduction, likelihood, prior, posterior, normalization.

Introduces: Updating beliefs with new evidence, sequential updates, normalizing posterior weights.

Used later in: Bayesian predictive distributions, uncertainty-aware inference.

## Lesson 21 — Bayesian Predictive Distributions

Requires: Posterior distributions, Bayesian updates, parameter uncertainty.

Introduces: Predictive distributions, averaging predictions over parameter uncertainty, MAP versus full posterior prediction.

Used later in: Probabilistic modeling, uncertainty quantification, Bayesian deep learning intuition.

## Lesson 22 — Model Complexity

Requires: Loss functions, fitting, training data versus generalization intuition.

Introduces: Model complexity, overfitting, underfitting, flexible models chasing noise.

Used later in: Regularization, early stopping, dropout.

## Lesson 23 — Regularization

Requires: Model complexity, loss functions, MAP interpretation.

Introduces: Regularization, L1 penalty, L2 penalty, data loss plus penalty, Bayesian interpretation of penalties.

Used later in: Early stopping, dropout, weight decay, generalization control.

## Lesson 24 — Early Stopping

Requires: Model complexity, validation loss, regularization intuition.

Introduces: Training/validation split, training curves, early stopping, patience, implicit regularization.

Used later in: Gradient-based optimization and deep learning training workflows.

## Lesson 25 — Dropout

Requires: Model complexity, regularization, training versus inference distinction. TODO: add exact neural-network prerequisites once the deep learning notes are formalized.

Introduces: Dropout, random activation masking, ensemble intuition, reducing co-adaptation.

Used later in: Deep learning generalization, neural network training practice.

## Lesson 26 — Gradient Descent

Requires: Loss functions, regularization, early stopping, dropout, vectors, dot products, and parameter-vector intuition.

Introduces: Gradient descent, local loss landscapes, uphill gradients, downhill updates, learning rate, convergence intuition, and conditioning.

Used later in: SGD, momentum, adaptive optimizers, neural network training, backpropagation, and paper implementations.

## Lesson 27 — Stochastic Gradient Descent

Requires: Loss functions and gradient descent.

Introduces: Full-batch gradients, stochastic gradients, mini-batches, unbiased gradient estimates, batch size tradeoffs, and epochs.

Used later in: Momentum, Adam, neural network training loops, and large-scale optimization.

## Lesson 28 — Momentum

Requires: Gradient descent and stochastic gradient descent.

Introduces: Velocity, momentum coefficient, persistent downhill directions, reduced oscillation, and the distinction between learning rate and momentum.

Used later in: Adam, adaptive optimizers, and optimizer diagnostics.
