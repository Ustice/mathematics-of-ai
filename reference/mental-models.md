# Mental Models

These are the intuitive pictures that make concepts durable. They are meant to be quick reloads before a lesson, not full derivations.

## Eigenvector

Mental model: A direction that survives a transformation without turning.

Picture: Draw a vector before and after a matrix transformation; it may stretch or flip, but it stays on the same line.

Formal version: \(Av = \lambda v\), with \(v \neq 0\).

Why it matters: Eigenvectors reveal the directions where a matrix is easiest to understand.

Depends on: Matrices as transformations, scalar multiplication.

## Eigenvalue

Mental model: How much an eigenvector direction is stretched or flipped.

Picture: Same line, different length or opposite direction.

Formal version: The scalar \(\lambda\) in \(Av = \lambda v\).

Why it matters: Eigenvalues turn transformation behavior into per-direction scaling.

Depends on: Eigenvectors.

## Matrix Multiplication

Mental model: Composition of transformations.

Picture: Apply one transformation to space, then apply another to the already-transformed space.

Formal version: \((AB)x = A(Bx)\).

Why it matters: Order matters because transformation sequences matter.

Depends on: Matrices as transformations.

## Projection

Mental model: The closest shadow of one vector onto another subspace.

Picture: Drop a perpendicular line from the point to the line or plane.

Formal version: The residual is orthogonal to the target subspace.

Why it matters: Least squares is projection in disguise.

Depends on: Dot product, orthogonality.

## PCA

Mental model: Find the directions where the data varies most.

Picture: Rotate axes until one axis runs along the longest direction of the data cloud.

Formal version: Eigenvectors of the covariance matrix, ordered by eigenvalue.

Why it matters: PCA compresses data while preserving major variance directions.

Depends on: Covariance matrix, eigenvectors, change of basis.

## Covariance Matrix

Mental model: Geometry of uncertainty.

Picture: A data cloud whose ellipse shows spread and orientation.

Formal version: \(\Sigma = E[(X-\mu)(X-\mu)^T]\).

Why it matters: It connects statistics to linear transformations.

Depends on: Variance, covariance, matrices.

## Whitening

Mental model: Rotate, scale, rotate back until covariance is identity.

Picture: Turn an ellipse into a circle by aligning with its axes and normalizing each axis.

Formal version: If \(\Sigma = V\Lambda V^T\), a whitening transform can use \(\Lambda^{-1/2}V^T\).

Why it matters: Whitening removes directional scale and correlation.

Depends on: Eigendecomposition, covariance geometry.

## Likelihood

Mental model: A scoring function for hypotheses.

Picture: A landscape over parameter choices where higher ground explains the observed data better.

Formal version: \(P(D \mid \theta)\), treated as a function of \(\theta\) after \(D\) is observed.

Why it matters: Likelihood is the bridge from probability models to optimization.

Depends on: Probability model, observed data, parameters.

## MLE

Mental model: Choose the parameter that scores the data highest.

Picture: Climb to the peak of the likelihood landscape.

Formal version: \(\hat{\theta}_{\text{MLE}} = \arg\max_\theta P(D \mid \theta)\).

Why it matters: It turns statistical estimation into an optimization problem.

Depends on: Likelihood.

## MAP

Mental model: MLE plus prior beliefs.

Picture: The likelihood landscape is reshaped by a prior landscape before choosing the peak.

Formal version: \(\hat{\theta}_{\text{MAP}} = \arg\max_\theta P(\theta \mid D)\).

Why it matters: It explains regularization as Bayesian pressure.

Depends on: Bayes' theorem, likelihood, prior.

## Regularization

Mental model: Expressing a preference for simpler or smaller parameters.

Picture: A penalty pulls the optimizer away from fragile, overly flexible explanations.

Formal version: Minimize data loss plus \(\lambda\) times a penalty.

Why it matters: It controls model complexity and improves generalization.

Depends on: Loss functions, model complexity.

## Dropout

Mental model: Train a model not to rely too heavily on any one feature path.

Picture: During training, random pathways disappear, so the model must build redundant explanations.

Formal version: Apply a random mask to activations during training; use the full network at inference.

Why it matters: It reduces co-adaptation and acts as a regularizer.

Depends on: Neural network computation graphs, model complexity.
