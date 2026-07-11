# Curriculum

This file provides the curriculum prose rendered by the website. The canonical topic roadmap lives in [curriculum/roadmap.md](curriculum/roadmap.md), while the Course Checkpoint owns completion.

## Current Curriculum Documents

- [Roadmap](curriculum/roadmap.md)
- [Progress tracker](curriculum/progress-tracker.md)
- [Reading list](curriculum/reading-list.md)
- [Milestones](curriculum/milestones.md)

## Course Principles

The course is built around a few principles:

- Intuition first, formalism second.
- Geometry before algebra when possible.
- Notation is taught explicitly instead of assumed.
- Each new symbol should have a clear name, role, and interpretation.
- Algorithms should eventually be derived from the math, not treated as recipes.
- Code implementations should connect the mathematics to working software.

## Current Status

Lessons 1-31 are complete and have canonical MDX Lesson Pages. Source Transcripts remain preserved for Lessons 1-25, and Exercise Artifact Modules exist for Lessons 2-31.

The next active topic is **Convexity**, continuing the optimization sequence after Hessians and Curvature.

Status labels below describe historical curriculum coverage. They do not mark Lesson Pages complete; use the Course Checkpoint for completion and `data/lesson-artifacts.json` for artifact relationships.

## Phase I — Linear Algebra Foundations

**Status:** Complete

This phase builds the geometric foundation for understanding data, transformations, projections, dimensionality reduction, covariance, and later neural network layers.

1. **Vectors**
   - Vectors as magnitude and direction
   - Dot products
   - Orthogonality
   - Linear combinations
   - Span and subspaces

2. **Matrices as Transformations**
   - Matrices as functions
   - Basis vectors as inputs
   - Linear maps
   - Transforming space

3. **Matrix Multiplication Concepts**
   - Matrix multiplication as function composition
   - Associativity
   - Non-commutativity
   - Why order matters

4. **Determinants**
   - Area and volume scaling
   - Orientation
   - Singular transformations
   - Geometric meaning of determinant zero

5. **Inverse Matrices**
   - Undoing transformations
   - Solving systems
   - Invertibility
   - When inverses do not exist

6. **Eigenvectors and Eigenvalues**
   - Invariant directions
   - Stretch factors
   - Diagonalization intuition
   - Why eigenvectors matter for repeated transformations

7. **Change of Basis**
   - Coordinate systems
   - Same vector, different coordinates
   - Same transformation, different representation
   - Similarity transforms

8. **Projection**
   - Orthogonal projection
   - Projection onto a line or subspace
   - Closest-point interpretation
   - Projection matrices

9. **Least Squares**
   - Overdetermined systems
   - Best-fit solutions
   - Normal equations
   - Projection interpretation of regression

10. **Singular Value Decomposition**
    - Rotation/reflection, scaling, rotation/reflection
    - Singular values
    - Rank
    - Low-rank approximation
    - Why SVD is more general than eigendecomposition

11. **Principal Component Analysis**
    - Maximum variance directions
    - Dimensionality reduction
    - PCA as a change of basis
    - PCA and SVD

## Phase II — Probability, Statistics, and Geometry

**Status:** Complete

This phase connects linear algebra to uncertainty, distributions, inference, and the probabilistic interpretation of machine learning.

12. **Covariance**
    - Variance
    - Covariance
    - Covariance matrices
    - Correlation versus covariance

13. **Probability as Linear Algebra**
    - Random variables
    - Probability distributions as structured objects
    - Expectation notation
    - Linearity of expectation
    - Probability vectors and transformations

14. **Covariance Geometry**
    - Covariance matrices as geometric objects
    - Eigenvectors as principal directions
    - Eigenvalues as variance magnitudes
    - Ellipses and ellipsoids
    - Whitening intuition

15. **Multivariate Gaussian**
    - Gaussian distributions in multiple dimensions
    - Mean vectors
    - Covariance matrices
    - Probability density geometry
    - Mahalanobis distance

16. **Maximum Likelihood Estimation**
    - Likelihood as a score, not a probability distribution over parameters
    - Log-likelihood
    - Scaling likelihoods
    - Maximum likelihood estimates

17. **Loss Functions**
    - Loss as a training objective
    - Negative log-likelihood
    - Squared error
    - Gaussian error assumptions
    - Connecting probability models to optimization targets

18. **MAP Estimation**
    - Priors
    - Likelihoods
    - Posteriors
    - Maximum a posteriori estimates
    - Regularization as a prior

19. **Bayesian Estimation Introduction**
    - Bayesian update structure
    - Priors and evidence
    - Posterior distributions
    - Difference between belief updates and point estimates

20. **Bayesian Estimation Update**
    - Updating beliefs with data
    - Posterior movement
    - Confidence and uncertainty
    - How new evidence changes the parameter distribution

21. **Bayesian Predictive Distributions**
    - Prediction under uncertainty
    - Integrating over parameters
    - Posterior predictive distributions
    - Difference between estimating a parameter and predicting a new observation

## Phase III — Generalization and Regularization

**Status:** Complete through Lesson 25

This phase explains why fitting the training data is not enough and introduces the methods used to control overfitting.

22. **Model Complexity**
    - Capacity
    - Underfitting
    - Overfitting
    - Training accuracy versus test accuracy
    - Why more parameters do not guarantee better generalization

23. **Regularization**
    - Penalizing complexity
    - L1 regularization
    - L2 regularization
    - MAP interpretation of regularization
    - Bias-variance tradeoff intuition

24. **Early Stopping**
    - Validation loss
    - Stopping before overfitting dominates
    - Early stopping as implicit regularization
    - Training dynamics

25. **Dropout**
    - Randomly disabling units during training
    - Reducing co-adaptation
    - Ensemble intuition
    - Training behavior versus inference behavior

## Phase IV — Optimization

**Status:** In progress through Lesson 31

This phase turns loss functions into training procedures. The emphasis is on understanding optimization geometrically and computationally.

26. **Gradient Descent**
    - Gradients as steepest increase
    - Moving opposite the gradient
    - Learning rate
    - Loss landscapes
    - Convergence intuition

27. **Stochastic Gradient Descent**
    - Mini-batches
    - Noisy gradients
    - Why stochasticity can help
    - Epochs and iterations

28. **Momentum**
    - Accumulating velocity
    - Smoothing noisy updates
    - Escaping shallow ravines
    - Geometric intuition

29. **Adam**
    - Per-parameter learning rates
    - Adam
    - First and second moment estimates
    - Bias correction

30. **Learning Rate Schedules**
    - Decay schedules
    - Warmup
    - Cosine schedules
    - Why learning rates change during training

31. **Hessians and Curvature**
    - Second derivatives
    - Hessian matrices
    - Curvature directions
    - Why curvature affects optimizer behavior

32. **Convexity and Nonconvexity**
    - Convex functions
    - Local versus global minima
    - Saddle points
    - Why neural network optimization is hard but often works

33. **Constrained Optimization**
    - Constraints
    - Lagrange multipliers
    - Penalty methods
    - Constrained learning problems

## Phase V — Calculus and Matrix Calculus for ML

**Status:** Planned

This phase formalizes the calculus needed for backpropagation, optimization, and reading papers with vectorized derivatives.

34. **Partial Derivatives**
    - Functions of multiple variables
    - Holding variables constant
    - Local sensitivity

35. **Gradients**
    - Gradient vectors
    - Directional derivatives
    - Gradients as covectors / local linear approximations

36. **Jacobians**
    - Derivatives of vector-valued functions
    - Local linear maps
    - Shape discipline

37. **Chain Rule for Computation Graphs**
    - Composed functions
    - Forward pass and backward pass
    - Local gradients
    - Accumulating derivatives

38. **Matrix Calculus Notation**
    - Numerator and denominator layout conventions
    - Shape checking
    - Gradients with respect to vectors and matrices
    - Common derivative identities

39. **Taylor Series and Local Approximation**
    - First-order approximation
    - Second-order approximation
    - Why gradients and Hessians describe local behavior

## Phase VI — Neural Networks

**Status:** Planned

This phase introduces neural networks as composed differentiable functions trained by optimization.

40. **Perceptrons and Linear Layers**
    - Weighted sums
    - Bias terms
    - Linear classification

41. **Activation Functions**
    - Nonlinearity
    - Sigmoid
    - Tanh
    - ReLU and variants
    - Saturation and dead units

42. **Feedforward Networks**
    - Composing layers
    - Hidden representations
    - Universal approximation intuition

43. **Backpropagation**
    - Reverse-mode automatic differentiation
    - Chain rule through layers
    - Gradients of weights and biases

44. **Initialization**
    - Symmetry breaking
    - Variance propagation
    - Xavier and He initialization

45. **Normalization**
    - Batch normalization
    - Layer normalization
    - Stabilizing training

46. **Residual Connections**
    - Identity paths
    - Gradient flow
    - Deep networks

## Phase VII — Information Theory

**Status:** Planned

This phase explains many common loss functions and model objectives in terms of information, coding, and distribution comparison.

47. **Entropy**
    - Uncertainty
    - Expected information
    - Bits and nats

48. **Cross Entropy**
    - Expected coding cost under the wrong distribution
    - Classification loss
    - Relation to negative log-likelihood

49. **KL Divergence**
    - Distribution mismatch
    - Asymmetry
    - Bayesian and variational interpretations

50. **Mutual Information**
    - Shared information
    - Dependence between variables
    - Representation learning intuition

51. **Maximum Entropy**
    - Least-assumptive distributions
    - Constraints
    - Why Gaussians appear so often

## Phase VIII — Classical Machine Learning Algorithms

**Status:** Planned

This phase revisits common algorithms after the mathematical foundation is in place.

52. **Linear Regression Revisited**
    - Least squares
    - MLE interpretation
    - Regularized regression

53. **Logistic Regression**
    - Classification probabilities
    - Sigmoid link function
    - Cross entropy loss

54. **Naive Bayes**
    - Conditional independence assumptions
    - Generative classification
    - Bayesian updating

55. **k-Nearest Neighbors**
    - Distance metrics
    - Decision boundaries
    - Curse of dimensionality

56. **Decision Trees**
    - Splitting criteria
    - Entropy and Gini impurity
    - Overfitting and pruning

57. **Random Forests and Ensembles**
    - Bagging
    - Variance reduction
    - Ensemble averaging

58. **Support Vector Machines**
    - Margins
    - Constrained optimization
    - Kernels

59. **Clustering**
    - k-Means
    - Hierarchical clustering
    - DBSCAN
    - Geometry of unsupervised learning

## Phase IX — Deep Learning Architecture Math

**Status:** Planned

This phase explains the mathematical objects used in modern deep learning architectures.

60. **Convolutions**
    - Local receptive fields
    - Translation equivariance
    - Filters and feature maps

61. **Embeddings**
    - Learned vector representations
    - Similarity geometry
    - Token, item, and feature embeddings

62. **Softmax**
    - Normalizing scores into probabilities
    - Temperature
    - Softmax gradients

63. **Sequence Modeling**
    - Recurrent structure
    - Hidden states
    - Sequence-to-sequence intuition

64. **Attention**
    - Queries, keys, and values
    - Similarity-weighted aggregation
    - Scaled dot-product attention

65. **Positional Encoding**
    - Position as input information
    - Sinusoidal encodings
    - Learned positional embeddings

66. **Transformers**
    - Multi-head attention
    - Feedforward blocks
    - Residual paths and normalization
    - Why transformers scale well

## Phase X — Advanced Topics for Paper Reading

**Status:** Planned

This phase is not meant to be exhaustive. It introduces enough of each topic to make research papers less opaque.

67. **Tensor Algebra**
    - Multidimensional arrays
    - Tensor contractions
    - Shape reasoning

68. **Spectral Graph Theory**
    - Graphs as matrices
    - Adjacency matrices
    - Graph Laplacians
    - Eigenvectors of graphs

69. **Manifold Learning**
    - Data on lower-dimensional structure
    - Local linearity
    - Embeddings and charts

70. **Differential Geometry for ML**
    - Curved spaces
    - Tangent spaces
    - Metrics
    - Optimization on manifolds

71. **Probabilistic Graphical Models**
    - Conditional dependence
    - Directed and undirected models
    - Factorization
    - Inference intuition

72. **Variational Inference**
    - Approximate posteriors
    - Evidence lower bound
    - KL minimization

73. **Monte Carlo Methods**
    - Sampling
    - Estimating expectations
    - MCMC intuition

## Phase XI — Reading Research Papers

**Status:** Planned

This phase focuses on using the accumulated math to understand, reproduce, and critique papers.

74. **Reading Mathematical Notation**
    - Parsing definitions
    - Tracking symbol tables
    - Recognizing overloaded notation

75. **Deriving Algorithms from Papers**
    - Moving from objective to update rule
    - Identifying assumptions
    - Reconstructing omitted algebra

76. **Understanding Proofs**
    - What a proof is trying to establish
    - Common proof strategies
    - Knowing when proof details matter

77. **Reproducing Results**
    - Minimal implementations
    - Experimental setup
    - Metrics and baselines

78. **Critical Evaluation**
    - What is being claimed?
    - What is actually shown?
    - What assumptions are hidden?
    - What would change your mind?

## Implementation Projects

These projects should be added when the corresponding mathematics has been introduced.

- Vector and matrix operations from scratch
- Least squares regression
- PCA via eigendecomposition and SVD
- Maximum likelihood estimation examples
- MAP estimation with L1 and L2 regularization
- Gradient descent visualizer
- Logistic regression from scratch
- k-Means clustering
- Small automatic differentiation engine
- Feedforward neural network with backpropagation
- Attention mechanism from scratch
- Minimal transformer block

## Reference Texts

Primary reference:

- *Mathematics for Machine Learning* — Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong

Secondary references:

- *Linear Algebra Done Right* — Sheldon Axler
- *Introduction to Probability* — Joseph K. Blitzstein and Jessica Hwang
- *Convex Optimization* — Stephen Boyd and Lieven Vandenberghe
- *Deep Learning* — Ian Goodfellow, Yoshua Bengio, and Aaron Courville
- *Pattern Recognition and Machine Learning* — Christopher Bishop

## Completion Criteria

By the end of this curriculum, the learner should be able to:

- Read modern ML papers without being blocked by common notation.
- Explain the geometric meaning of core linear algebra tools.
- Derive common loss functions from probabilistic assumptions.
- Understand likelihood, priors, posteriors, and predictive distributions.
- Explain overfitting and the role of regularization.
- Derive gradient-based update rules from objective functions.
- Implement core machine learning algorithms from scratch.
- Understand the mathematical structure of neural networks and transformers.
- Follow and critique mathematical arguments in ML research.

## Public Repo Policy

This repository should contain original course material, exercises, notation, diagrams, and public-safe learning reflections.

Raw exported transcripts are source material until reviewed and should be polished before being treated as public lessons.

Avoid committing private personal details, credentials, copyrighted textbook excerpts, or raw source material that is not ours to publish.
