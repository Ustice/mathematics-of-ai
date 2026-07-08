# Notation

This reference is the canonical compact notation guide for the course. Lessons should still define symbols locally when formulas are introduced, and overloaded recurring symbols should be tracked in [symbol-table.md](symbol-table.md).

## Linear Algebra

| Symbol | Name | Meaning |
|---|---|---|
| \(x\) | vector | A point, input, or feature vector depending on context |
| \(A\) | matrix | A linear map or table of coefficients |
| \(A^T\) | transpose of A | Matrix with rows and columns swapped |
| \(A^{-1}\) | inverse of A | Matrix that undoes A when it exists |
| \(\det(A)\) | determinant of A | Signed area or volume scaling factor of a square matrix |
| \(v\) | vector | A generic vector, often used for directions or eigenvectors |
| \(x \cdot y\) | dot product | Alignment measure between two vectors |
| \(\lVert x \rVert\) | norm of x | Length or magnitude of a vector |
| \(\operatorname{proj}_u(v)\) | projection of v onto u | Closest point to v on the line spanned by u |
| \(e\) | residual | Difference between an observation and its projection or prediction |
| \(Q\) | orthogonal matrix | Matrix whose columns form an orthonormal basis |
| \(\lambda\) | eigenvalue | A scalar that stretches an eigenvector under a linear map |
| \(\sigma\) | singular value | A nonnegative scaling factor in an SVD |
| \(U\Sigma V^T\) | SVD | Singular value decomposition of a matrix |

## Probability

| Symbol | Name | Meaning |
|---|---|---|
| \(X\) | random variable | A quantity whose value is uncertain |
| \(E[X]\) | expected value of X | The average value of a random variable under its distribution |
| \(Var(X)\) | variance of X | Expected squared deviation from the mean |
| \(Cov(X, Y)\) | covariance of X and Y | A measure of how two random variables vary together |
| \(\tilde{X}\) | centered X | Mean-zero version of X, usually \(X - E[X]\) |
| \(\rho(X, Y)\) | correlation | Normalized covariance, analogous to cosine similarity |
| \(D\) | observed data | Fixed evidence after observations are collected |
| \(p(x)\) | probability density or mass | The probability rule evaluated at x, depending on context |
| \(P(D \mid \theta)\) | likelihood | Data score when theta is treated as the varying candidate parameter |
| \(P(\theta)\) | prior | Belief or parameter preference before the current data |
| \(P(\theta \mid D)\) | posterior | Belief about theta after conditioning on observed data |
| \(P(x_{\text{next}} \mid D)\) | posterior predictive | Prediction after averaging over posterior uncertainty |

## Optimization

| Symbol | Name | Meaning |
|---|---|---|
| \(\theta\) | parameters | Values adjusted by learning or inference |
| \(\theta_t\) | parameters at step t | Current parameter value during an iterative optimizer |
| \(L(\theta)\) | loss function | A function measuring model error or objective badness |
| \(\ell(\theta)\) | log-likelihood | Log of the likelihood, often optimized instead of the raw likelihood |
| \(\nabla L(\theta)\) | gradient of the loss | Direction of steepest increase of the loss with respect to parameters |
| \(\eta\) | learning rate | Step size used by an optimizer |
| \(\Delta \theta\) | parameter update | Change applied to parameters during one optimization step |
| \(\lambda\) | regularization strength | Penalty weight in a regularized objective |
| \(L_{\text{train}}(e)\) | training loss at epoch e | Loss measured on the training set during early stopping |
| \(L_{\text{val}}(e)\) | validation loss at epoch e | Loss measured on held-out validation data |
| \(p\) | keep probability | Probability of keeping a unit active during dropout |

## Information Theory

| Symbol | Name | Meaning |
|---|---|---|
| \(H(X)\) | entropy of X | Average uncertainty or information content of a random variable |
| \(H(p, q)\) | cross entropy | Expected code length when q is used to encode data from p |
| \(D_{KL}(p \Vert q)\) | KL divergence | Extra information cost of using q when p is the target distribution |
| \(I(X; Y)\) | mutual information | Amount of information shared between X and Y |

## Learning Theory

| Symbol | Name | Meaning |
|---|---|---|
| \(h\) | hypothesis | A candidate model or function |
| \(\mathcal{H}\) | hypothesis class | A set of candidate models or functions |
| \(R(h)\) | risk | Expected loss of a hypothesis |
| \(\hat{R}(h)\) | empirical risk | Average loss measured on observed data |
