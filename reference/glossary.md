# Glossary

This is the canonical short glossary for recurring course vocabulary. Keep entries concise and learner-friendly; expanded concept cards belong in [mathematical-vocabulary.md](mathematical-vocabulary.md).

## Terms

**Vector:** A quantity with components. Geometrically, it can represent a point, displacement, feature list, or direction in a vector space.

**Basis:** A set of vectors used as coordinate directions for representing other vectors in a space.

**Linear map:** A function between vector spaces that preserves addition and scalar multiplication.

**Determinant:** The signed area or volume scaling factor of a square linear transformation.

**Inverse matrix:** A matrix that undoes another matrix transformation when such an undoing operation exists.

**Eigenvector:** A nonzero vector whose direction is unchanged by a linear map.

**Eigenvalue:** The scalar factor by which a linear map stretches or flips an eigenvector.

**Orthogonal matrix:** A matrix whose columns form an orthonormal basis, so its transpose is its inverse.

**Projection:** The closest point to a vector on a chosen line or subspace.

**Residual:** The leftover difference after a projection or prediction.

**Least squares:** A method for choosing parameters that minimize squared residual error.

**Singular value decomposition:** A factorization that reads a matrix as an input rotation, axis-wise scaling, and output rotation.

**Singular value:** A nonnegative scaling factor from the singular value decomposition of a matrix.

**Principal component:** A direction of high variance in centered data, usually found from covariance eigenvectors or SVD.

**Covariance:** A measure of how two quantities vary together around their means.

**Correlation:** Covariance normalized by standard deviations, analogous to cosine similarity for centered variables.

**Whitening:** A coordinate transformation that recenters, rotates, and rescales data so covariance becomes close to the identity.

**Precision matrix:** The inverse of a covariance matrix; in Gaussian geometry, it controls covariance-scaled distance.

**Mahalanobis distance:** Distance measured in units of covariance, so directions with larger variance count as less surprising.

**Likelihood:** A score for how well a parameter value explains observed data.

**Maximum likelihood estimation:** Choosing the parameter value that maximizes the likelihood of the observed data.

**Prior:** A probability distribution or preference over parameters before the current data is observed.

**Posterior:** An updated probability distribution after conditioning on observed evidence.

**Evidence:** The normalizing probability of the observed data in Bayes' rule.

**MAP estimation:** Choosing the parameter value with the highest posterior probability or density.

**Posterior predictive distribution:** A prediction for a future observation that averages over the posterior distribution of parameters.

**Model averaging:** Combining predictions from multiple plausible models or parameter values using weights.

**Model capacity:** The flexibility a model has to fit patterns in data.

**Underfitting:** Failing to capture real structure because the model or training process is too limited.

**Overfitting:** Fitting training data details so closely that performance on new data gets worse.

**Regularization:** A constraint or penalty that discourages overly complex models and can improve generalization.

**Weight decay:** L2 regularization expressed as a pressure that shrinks weights toward zero.

**Sparsity:** A pattern where many parameters are exactly or nearly zero.

**Generalization:** A model's ability to perform well on data beyond the examples used for training.

**Validation set:** Held-out data used to tune choices such as early stopping without directly training on it.

**Early stopping:** Stopping training when validation performance stops improving, before the model overfits.

**Patience:** The number of non-improving validation checks tolerated before early stopping triggers.

**Dropout:** A neural-network regularization method that randomly disables units during training.

**Co-adaptation:** A brittle pattern where units rely too heavily on specific other units instead of learning robust features.

**Inverted dropout:** Dropout convention that scales kept activations during training so inference needs no extra scaling.

**Gradient:** A vector of partial derivatives pointing in the direction of steepest local increase of a scalar function.

**Gradient descent:** An iterative optimization method that moves parameters opposite the gradient to reduce a loss.

**Learning rate:** A positive step-size parameter controlling how far gradient descent moves at each update.

**Loss landscape:** The geometric view of a loss function as assigning height or badness to each parameter choice.

**Convergence:** The process by which an iterative optimizer settles according to some criterion, such as small updates, small gradients, or stable loss.

**Momentum:** An optimization method that keeps a running velocity from recent gradients to smooth noisy updates and preserve persistent downhill directions.

**Adaptive optimizer:** An optimizer that changes effective step sizes separately for different parameters using information from gradient history.

**Adam:** An adaptive optimizer that combines a momentum-like first moment estimate with a squared-gradient second moment estimate.

**First moment estimate:** In Adam, the running average of recent gradients, used as direction memory.

**Second moment estimate:** In Adam, the running average of recent squared gradients, used as per-parameter scale memory.

**Bias correction:** Adam's adjustment for the early shrinkage caused by initializing optimizer moment estimates at zero.
