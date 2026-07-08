# Mathematical Vocabulary

These expanded concept cards preserve definitions, dependencies, intuition, and later uses. Promote durable short definitions to [glossary.md](glossary.md).

## Vector

Plain English: An object with ordered components.

Mathematical form: \(x \in \mathbb{R}^n\).

Geometric intuition: A point or arrow in space.

Introduced: Lesson 1.

Depends on: Coordinates.

Used later in: Matrices, dot products, projections, data representation.

## Matrix

Plain English: A rectangular array that can represent a linear transformation.

Mathematical form: \(A \in \mathbb{R}^{m \times n}\).

Geometric intuition: A rule that moves, rotates, scales, shears, or collapses space.

Introduced: Lesson 2.

Depends on: Vectors.

Used later in: Linear systems, eigendecomposition, covariance, PCA, neural networks.

## Linear Transformation

Plain English: A function that preserves addition and scaling.

Mathematical form: \(T(ax + by) = aT(x) + bT(y)\).

Geometric intuition: A space transformation that keeps grid lines straight and evenly spaced.

Introduced: Lesson 2.

Depends on: Vectors, matrices.

Used later in: Matrix multiplication, change of basis, SVD.

## Dot Product

Plain English: A number measuring alignment between two vectors.

Mathematical form: \(x \cdot y = x^T y\).

Geometric intuition: Length of one vector in the direction of another, scaled by magnitude.

Introduced: Lesson 1.

Depends on: Vectors.

Used later in: Orthogonality, projection, covariance geometry, attention.

## Orthogonality

Plain English: Perpendicularity generalized to higher dimensions.

Mathematical form: \(x^T y = 0\).

Geometric intuition: Two directions share no component.

Introduced: Lesson 7.

Depends on: Dot product.

Used later in: Projection, least squares, PCA, SVD.

## Projection

Plain English: The closest representation of one vector in a direction or subspace.

Mathematical form: \(\operatorname{proj}_v x = \frac{x^T v}{v^T v}v\).

Geometric intuition: A shadow cast onto a line or plane.

Introduced: Lesson 8.

Depends on: Dot product, orthogonality.

Used later in: Least squares, PCA, geometric error analysis.

## Determinant

Plain English: A scalar measuring signed area or volume scaling.

Mathematical form: \(\det(A)\).

Geometric intuition: How much a transformation expands, flips, or collapses space.

Introduced: Lesson 4.

Depends on: Matrices as transformations.

Used later in: Invertibility, Gaussian normalization.

## Eigenvector

Plain English: A vector whose direction survives a transformation.

Mathematical form: \(Av = \lambda v\), with \(v \neq 0\).

Geometric intuition: A special direction that does not turn.

Introduced: Lesson 6.

Depends on: Matrices, scalar multiplication.

Used later in: PCA, covariance geometry, whitening.

## Eigenvalue

Plain English: The stretch or flip applied to an eigenvector.

Mathematical form: \(Av = \lambda v\).

Geometric intuition: The factor by which a surviving direction is scaled.

Introduced: Lesson 6.

Depends on: Eigenvectors.

Used later in: Diagonalization, PCA, whitening.

## Change of Basis

Plain English: Rewriting the same object in a different coordinate system.

Mathematical form: \(x_{\text{new}} = B^{-1}x\).

Geometric intuition: Changing the measuring grid without changing the underlying vector.

Introduced: Lesson 7.

Depends on: Bases, matrices, invertibility.

Used later in: SVD, PCA, diagonalization, whitening.

## SVD

Plain English: A factorization that separates a transformation into input directions, scaling, and output directions.

Mathematical form: \(A = U\Sigma V^T\).

Geometric intuition: Rotate or reflect, scale by axis, rotate or reflect again.

Introduced: Lesson 10.

Depends on: Orthogonality, change of basis, eigenvectors.

Used later in: PCA, dimensionality reduction, low-rank approximation.

## PCA

Plain English: A method for finding directions where data varies most.

Mathematical form: Eigenvectors of the covariance matrix.

Geometric intuition: Rotate the coordinate system to align with the data cloud.

Introduced: Lesson 11.

Depends on: Covariance, eigenvectors, SVD.

Used later in: Dimensionality reduction, whitening, representation learning intuition.

## Variance

Plain English: Average squared distance from the mean.

Mathematical form: \(\operatorname{Var}(X) = E[(X-\mu)^2]\).

Geometric intuition: Spread along one axis.

Introduced: Lesson 12.

Depends on: Mean, expectation.

Used later in: Covariance, Gaussian models, loss functions.

## Covariance

Plain English: A measure of how two quantities move together.

Mathematical form: \(\operatorname{Cov}(X,Y) = E[(X-\mu_X)(Y-\mu_Y)]\).

Geometric intuition: Whether a data cloud leans along a diagonal direction.

Introduced: Lesson 12.

Depends on: Variance, centering.

Used later in: Covariance matrices, PCA, multivariate Gaussians.

## Covariance Matrix

Plain English: A matrix collecting variances and covariances.

Mathematical form: \(\Sigma = E[(X-\mu)(X-\mu)^T]\).

Geometric intuition: The shape and orientation of uncertainty.

Introduced: Lesson 12.

Depends on: Covariance, matrices.

Used later in: PCA, whitening, multivariate Gaussian.

## Multivariate Gaussian

Plain English: A Gaussian distribution over vectors.

Mathematical form: \(x \sim \mathcal{N}(\mu,\Sigma)\).

Geometric intuition: An ellipsoid-shaped probability cloud.

Introduced: Lesson 15.

Depends on: Covariance matrix, determinant, inverse matrix.

Used later in: Gaussian likelihoods, squared-error loss, Bayesian models.

## Likelihood

Plain English: A score for parameters based on observed data.

Mathematical form: \(P(D \mid \theta)\).

Geometric intuition: A landscape over hypotheses.

Introduced: Lesson 16.

Depends on: Probability model, observed data, parameters.

Used later in: MLE, MAP, loss functions.

## Log-Likelihood

Plain English: The logarithm of the likelihood.

Mathematical form: \(\ell(\theta) = \log P(D \mid \theta)\).

Geometric intuition: Same maximizer as likelihood, easier terrain to compute on.

Introduced: Lesson 17.

Depends on: Likelihood, logarithms.

Used later in: Negative log-likelihood, loss functions, MLE.

## MLE

Plain English: Choose the parameter that makes the observed data score highest.

Mathematical form: \(\hat{\theta}_{\text{MLE}} = \arg\max_\theta P(D \mid \theta)\).

Geometric intuition: Pick the peak of the likelihood landscape.

Introduced: Lesson 16.

Depends on: Likelihood.

Used later in: Loss functions, MAP, statistical estimation.

## Prior

Plain English: A belief or preference before the current data.

Mathematical form: \(P(\theta)\).

Geometric intuition: Pressure on the parameter landscape before evidence arrives.

Introduced: Lesson 18.

Depends on: Probability over parameters.

Used later in: MAP, Bayesian updates, regularization.

## Posterior

Plain English: Belief after combining prior and data.

Mathematical form: \(P(\theta \mid D)\).

Geometric intuition: Prior landscape reshaped by observed evidence.

Introduced: Lesson 18.

Depends on: Prior, likelihood, Bayes' theorem.

Used later in: Bayesian estimation, predictive distributions.

## MAP

Plain English: Choose the parameter with the highest posterior probability.

Mathematical form: \(\hat{\theta}_{\text{MAP}} = \arg\max_\theta P(\theta \mid D)\).

Geometric intuition: MLE with prior pressure added.

Introduced: Lesson 18.

Depends on: Likelihood, prior, posterior.

Used later in: Regularization, Bayesian estimation.

## Regularization

Plain English: Adding a preference for simpler or smaller models.

Mathematical form: \(\text{loss}(\theta) + \lambda\,\text{penalty}(\theta)\).

Geometric intuition: Pull the optimizer away from overly complex explanations.

Introduced: Lesson 23.

Depends on: Loss functions, model complexity.

Used later in: Early stopping, dropout, generalization.

## L1 Penalty

Plain English: Penalize the absolute values of parameters.

Mathematical form: \(\lambda \lVert w \rVert_1\).

Geometric intuition: Sharp corners make exact zero weights more likely.

Introduced: Lesson 23.

Depends on: Norms, regularization.

Used later in: Sparsity, feature selection.

## L2 Penalty

Plain English: Penalize squared parameter size.

Mathematical form: \(\lambda \lVert w \rVert_2^2\).

Geometric intuition: Smoothly shrink weights toward zero.

Introduced: Lesson 23.

Depends on: Norms, regularization.

Used later in: Ridge regression, weight decay.

## Dropout

Plain English: Randomly disable parts of a network during training.

Mathematical form: Apply a random mask to activations during training.

Geometric intuition: Prevent the model from relying too heavily on one feature path.

Introduced: Lesson 25.

Depends on: Model complexity, regularization.

Used later in: Deep learning generalization.

## Early Stopping

Plain English: Stop training when validation performance stops improving.

Mathematical form: Choose the iterate with best validation loss.

Geometric intuition: Halt before the model follows noise too far.

Introduced: Lesson 24.

Depends on: Training/validation split, model complexity.

Used later in: Optimization, deep learning training practice.
