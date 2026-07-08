# Notation

This reference starts the canonical notation guide for the course. Lessons should still define symbols locally when formulas are introduced.

## Linear Algebra

| Symbol | Name | Meaning |
|---|---|---|
| \(x\) | vector | A point, input, or feature vector depending on context |
| \(A\) | matrix | A linear map or table of coefficients |
| \(A^T\) | transpose of A | Matrix with rows and columns swapped |
| \(v\) | vector | A generic vector, often used for directions or eigenvectors |
| \(\lambda\) | eigenvalue | A scalar that stretches an eigenvector under a linear map |
| \(\sigma\) | singular value | A nonnegative scaling factor in an SVD |

## Probability

| Symbol | Name | Meaning |
|---|---|---|
| \(X\) | random variable | A quantity whose value is uncertain |
| \(E[X]\) | expected value of X | The average value of a random variable under its distribution |
| \(Var(X)\) | variance of X | Expected squared deviation from the mean |
| \(Cov(X, Y)\) | covariance of X and Y | A measure of how two random variables vary together |
| \(p(x)\) | probability density or mass | The probability rule evaluated at x, depending on context |

## Optimization

| Symbol | Name | Meaning |
|---|---|---|
| \(\theta\) | parameters | Values adjusted by learning or inference |
| \(\theta_t\) | parameters at step t | Current parameter value during an iterative optimizer |
| \(L(\theta)\) | loss function | A function measuring model error or objective badness |
| \(\nabla L(\theta)\) | gradient of the loss | Direction of steepest increase of the loss with respect to parameters |
| \(\eta\) | learning rate | Step size used by an optimizer |
| \(\Delta \theta\) | parameter update | Change applied to parameters during one optimization step |

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
