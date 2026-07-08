# Big Picture

## Curriculum Arc

```text
Linear Algebra
-> Statistical Modeling
-> Optimization
-> Neural Networks
-> Information Theory
-> Transformers
-> Paper Reading
```

The older topic labels of probability, statistics, machine learning, deep learning, and modern AI still describe subject matter. The capability arc is more operational: it names what the learner should become able to do.

## Topic Flow

```text
Linear Algebra
-> Probability
-> Statistics
-> Optimization
-> Machine Learning
-> Deep Learning
-> Modern AI
```

## Capability Milestones

| Capability | What it should unlock |
| --- | --- |
| Linear Algebra | Geometric reasoning about data, transformations, PCA, covariance, and representations. |
| Statistical Modeling | Likelihood, MAP, Bayesian updates, predictive distributions, and regularized objectives. |
| Optimization | Training loops, gradient descent, SGD, momentum, adaptive optimizers, and stopping rules. |
| Neural Networks | First-principles networks, forward passes, losses, gradients, and generalization controls. |
| Information Theory | Entropy, cross entropy, KL divergence, mutual information, and objective interpretation. |
| Transformers | Attention, multi-head attention, tensor shapes, and minimal transformer blocks. |
| Paper Reading | Reading assumptions, reproducing core arguments, implementing small versions, and critiquing claims. |

The first 25 lessons build the bridge from geometric structure to statistical learning.

## Where Lessons 1-25 Fit

| Lessons | Role in the Arc | What They Build |
| --- | --- | --- |
| 1-9 | Linear Algebra | Vectors, transformations, composition, determinants, inverses, eigenvectors, projection, least squares. |
| 10-14 | Spectral Geometry and Statistics | SVD, PCA, covariance, probability geometry, whitening. |
| 15-18 | Statistical Estimation | Multivariate Gaussian models, likelihood, loss functions, MLE, MAP. |
| 19-21 | Bayesian Inference | Updating beliefs, posterior distributions, predictive distributions. |
| 22-25 | Generalization | Model complexity, regularization, early stopping, dropout. |

The next natural move is optimization: once we know what objective we want, we need to understand how learning algorithms move through parameter space.

## Why This Matters For Reading ML Papers

ML papers often compress many assumptions into one line:

- A probability model becomes a loss function.
- A covariance matrix becomes a geometry.
- A prior becomes a regularizer.
- A matrix factorization becomes a representation method.
- A training heuristic becomes a complexity-control mechanism.

The goal of this curriculum is to make those compressions readable. When a paper says "we optimize the negative log-likelihood with weight decay," the reader should be able to unpack:

1. What probability model is assumed.
2. What symbols are data versus parameters.
3. Which constants were ignored.
4. Why the penalty corresponds to a parameter preference.
5. What the training procedure is controlling.

## Current Position

Lessons 1-25 built the conceptual substrate for optimization and deep learning. Lessons 26-29 now build the optimization bridge with Gradient Descent, Stochastic Gradient Descent, Momentum, and Adam; the next topic is Learning Rate Schedules.
