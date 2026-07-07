# Derivation Index

This index is for reconstructing important results after the formula has been forgotten.

## Projection Formula

Do not memorize as isolated fact.

Reconstruct from:

1. The projected vector must lie on the target direction \(v\).
2. Write it as \(cv\) for an unknown scalar \(c\).
3. Require the residual \(x - cv\) to be orthogonal to \(v\).
4. Solve \(v^T(x - cv)=0\).

Invariant: The error is perpendicular to the subspace.

Depends on: Dot product, orthogonality.

## Least Squares Normal Equation

Do not memorize as isolated fact.

Reconstruct from:

1. Write residual \(r = y - Xw\).
2. Least squares chooses the closest point in the column space of \(X\).
3. At the closest point, \(r\) is orthogonal to every column of \(X\).
4. Express orthogonality as \(X^T(y - Xw)=0\).
5. Rearrange to \(X^TXw = X^Ty\).

Invariant: The residual has no component in the model's prediction space.

Depends on: Projection, orthogonality, matrix multiplication.

## Eigendecomposition Intuition

Do not memorize as isolated fact.

Reconstruct from:

1. Search for directions that a matrix does not rotate.
2. For each surviving direction \(v\), record the scale factor \(\lambda\).
3. Put independent eigenvectors into a basis matrix \(V\).
4. Represent per-direction scaling as a diagonal matrix \(\Lambda\).
5. Interpret \(A = V\Lambda V^{-1}\) as change basis, scale, change back.

Invariant: The transformation is easiest in its own special directions.

Depends on: Eigenvectors, eigenvalues, change of basis.

## PCA From Covariance

Do not memorize as isolated fact.

Reconstruct from:

1. Center the data.
2. Build the covariance matrix to measure spread by direction.
3. Ask which unit direction has maximum variance.
4. The maximizing directions are eigenvectors of the covariance matrix.
5. Order directions by eigenvalue.

Invariant: Principal components are directions of maximum variance under orthogonality constraints.

Depends on: Covariance matrix, eigenvectors, constrained optimization intuition.

## Whitening From Eigendecomposition

Do not memorize as isolated fact.

Reconstruct from:

1. Start with covariance \(\Sigma\).
2. Decompose it as \(\Sigma = V\Lambda V^T\) when symmetric.
3. Rotate into the eigenbasis with \(V^T\).
4. Scale each coordinate by \(\lambda_i^{-1/2}\).
5. The transformed covariance becomes identity.

Invariant: Whitening removes directional scale and correlation.

Depends on: Covariance matrix, eigendecomposition, diagonalization.

## Gaussian Negative Log-Likelihood To Squared Error

Do not memorize as isolated fact.

Reconstruct from:

1. Assume Gaussian noise around predictions.
2. Write the likelihood of observed outputs.
3. Take the log to turn products into sums.
4. Negate because optimization usually minimizes losses.
5. Drop constants that do not affect the optimizer.
6. The remaining term is proportional to squared error.

Invariant: Gaussian noise makes squared deviations the natural penalty.

Depends on: Gaussian distribution, likelihood, log-likelihood.

## MLE From Likelihood Maximization

Do not memorize as isolated fact.

Reconstruct from:

1. Choose a probability model with parameter \(\theta\).
2. Treat observed data \(D\) as fixed.
3. View \(P(D \mid \theta)\) as a function of \(\theta\).
4. Pick the parameter value that maximizes that score.

Invariant: Estimate parameters by making the observed data as unsurprising as possible under the model.

Depends on: Probability model, likelihood.

## MAP From Bayes' Theorem

Do not memorize as isolated fact.

Reconstruct from:

1. Start with Bayes' theorem: \(P(\theta \mid D) \propto P(D \mid \theta)P(\theta)\).
2. Treat the evidence \(P(D)\) as constant with respect to \(\theta\).
3. Maximize likelihood times prior.
4. Or maximize log-likelihood plus log-prior.

Invariant: Posterior ranking combines data fit and prior preference.

Depends on: Likelihood, prior, posterior.

## L2 Regularization From Gaussian Prior

Do not memorize as isolated fact.

Reconstruct from:

1. Put a zero-centered Gaussian prior on weights.
2. Write the posterior as likelihood times prior.
3. Take the negative log posterior.
4. The Gaussian prior contributes a squared-weight penalty.

Invariant: A Gaussian prior prefers small weights smoothly.

Depends on: MAP, Gaussian distribution, negative logs.

## L1 Regularization From Laplace Prior

Do not memorize as isolated fact.

Reconstruct from:

1. Put a zero-centered Laplace prior on weights.
2. Write the posterior as likelihood times prior.
3. Take the negative log posterior.
4. The Laplace prior contributes an absolute-value penalty.

Invariant: A sharp prior peak at zero encourages exact sparsity.

Depends on: MAP, prior distributions, negative logs.

## Early Stopping As Implicit Regularization

Do not memorize as isolated fact.

Reconstruct from:

1. Training keeps moving parameters toward lower training loss.
2. Flexible models eventually fit noise or idiosyncrasies.
3. Validation loss estimates when generalization starts worsening.
4. Stopping early limits how far optimization can chase training-only structure.

Invariant: Constraining the training path can control model complexity.

Depends on: Model complexity, validation loss, optimization path.
