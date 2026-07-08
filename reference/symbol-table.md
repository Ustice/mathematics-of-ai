# Symbol Table

## Purpose

This is an external symbol table for recurring notation. Its job is to reduce working-memory load: symbol lookup should be mechanical, not part of the mathematical problem.

## Recurring Symbols

| Symbol | Meaning | Context | First Lesson | Notes |
| --- | --- | --- | --- | --- |
| \(x\) | Observed value or input | Data, functions, probability | Lesson 1 | Meaning depends on context; define locally when overloaded. |
| \(x_i\) | i-th observed sample | Data sets, statistics | Lesson 12 | Often appears after centering or inside products/sums. |
| \(X\) | Random variable or data matrix | Probability, linear models | Lesson 13 | Use local tables to distinguish random variable from matrix. |
| \(\mu\) | Mean | Statistics, Gaussian models | Lesson 12 | May be scalar or vector. |
| \(\sigma\) | Standard deviation | Statistics, Gaussian models | Lesson 12 | Square root of variance. |
| \(\sigma^2\) | Variance | Statistics, Gaussian models | Lesson 12 | Average squared deviation from the mean. |
| \(\Sigma\) | Covariance matrix | Multivariate statistics | Lesson 12 | Encodes variance by direction and covariance between dimensions. |
| \(\theta\) | Model parameters | Inference and optimization | Lesson 16 | Unknown quantity being estimated or optimized. |
| \(\theta_t\) | Parameters at step t | Optimization | Lesson 26 | Current parameter vector during an iterative optimizer. |
| \(D\) | Observed data | Probability and inference | Lesson 16 | Fixed evidence once observed. |
| \(P(D \mid \theta)\) | Likelihood | MLE, MAP, Bayesian inference | Lesson 16 | Data score as a function of parameters. |
| \(P(\theta)\) | Prior | Bayesian inference, MAP | Lesson 18 | Belief or parameter preference before current data. |
| \(P(\theta \mid D)\) | Posterior | Bayesian inference | Lesson 18 | Updated belief after conditioning on data. |
| \(L(\theta)\) | Likelihood or loss/objective function | MLE and optimization | Lesson 16 | Overloaded: MLE lessons may use it for likelihood; optimization lessons often use it for loss. Define locally. |
| \(\nabla L(\theta)\) | Gradient of the loss | Optimization | Lesson 26 | Direction of steepest local increase with respect to parameters. |
| \(\eta\) | Learning rate | Optimization | Lesson 26 | Positive scalar controlling gradient descent step size. |
| \(\Delta \theta\) | Parameter update | Optimization | Lesson 26 | Change added to the current parameters during one step. |
| \(\ell(\theta)\) | Log-likelihood | MLE, loss functions | Lesson 17 | Turns products into sums and improves numerical handling. |
| \(\lambda\) | Eigenvalue | Linear algebra, regularization strength | Lesson 6 | Context distinguishes spectral value from penalty weight. |
| \(v\) | Eigenvector | Linear algebra | Lesson 6 | Usually nonzero and paired with an eigenvalue. |
| \(V\) | Eigenvector matrix | Eigendecomposition, PCA, whitening | Lesson 14 | Columns are eigenvectors in a chosen order. |
| \(\Lambda\) | Diagonal eigenvalue matrix | Eigendecomposition, PCA, whitening | Lesson 14 | Diagonal entries are eigenvalues matched to columns of \(V\). |
| \(\lVert w \rVert_1\) | L1 norm | Regularization | Lesson 23 | Sum of absolute weights; encourages sparsity. |
| \(\lVert w \rVert_2\) | L2 norm | Regularization | Lesson 23 | Euclidean length of weights; penalizes large magnitude smoothly. |

## Norm Notation

\(\|w\|_1\) and \(\|w\|_2\) are written with double bars in most lessons. The table uses `\lVert` and `\rVert` so the Markdown table renders cleanly.
