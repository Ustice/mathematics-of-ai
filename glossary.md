# Glossary

This glossary starts as a backfill from project context. Definitions should be refined as individual lessons are rebuilt.

## Linear Algebra

- **Vector** — A quantity with components; geometrically, an arrow or point in a vector space.
- **Matrix** — A linear transformation represented by a rectangular array of numbers.
- **Basis** — A set of vectors used as coordinate directions for representing other vectors.
- **Change of basis** — Re-expressing the same object using a different coordinate system.
- **Determinant** — A scalar describing how a linear transformation scales signed area or volume.
- **Inverse matrix** — A transformation that undoes another transformation, when it exists.
- **Eigenvector** — A vector whose direction is unchanged by a matrix transformation.
- **Eigenvalue** — The scale factor applied to an eigenvector.
- **Projection** — The closest point or component of one vector/subspace onto another.
- **Least squares** — A method for fitting by minimizing squared residuals.
- **Singular Value Decomposition** — A factorization that decomposes a linear transformation into rotation/reflection, scaling, and another rotation/reflection.
- **Principal Component Analysis** — A method for finding directions of greatest variance in data.

## Probability and Statistics

- **Variance** — Expected squared deviation from the mean.
- **Covariance** — A measure of how two variables vary together.
- **Covariance matrix** — A matrix collecting variances and covariances for multiple variables.
- **Gaussian distribution** — A normal distribution parameterized by mean and variance/covariance.
- **Likelihood** — A score for how well parameters explain observed data.
- **Maximum Likelihood Estimation** — Choosing parameters that maximize likelihood of observed data.
- **Loss function** — A function that measures model error or badness.
- **MAP estimation** — Maximum a posteriori estimation; likelihood plus prior information.
- **Prior** — A belief distribution before observing current evidence.
- **Posterior** — An updated belief distribution after conditioning on evidence.
- **Predictive distribution** — A distribution over future observations after accounting for parameter uncertainty.

## Generalization and Optimization

- **Model complexity** — The capacity or flexibility of a model.
- **Regularization** — Penalizing complexity to improve generalization.
- **L1 penalty** — Penalty proportional to absolute value of parameters.
- **L2 penalty** — Penalty proportional to squared magnitude of parameters.
- **Early stopping** — Halting training when validation performance stops improving.
- **Dropout** — Randomly disabling units during training to reduce co-adaptation.
- **Convex function** — A function shaped so that any local minimum is also global.
- **Gradient** — A vector of partial derivatives pointing in the direction of steepest increase.
- **Gradient descent** — An iterative optimization method that moves parameters opposite the gradient.
- **Learning rate** — Step size used in gradient descent.
