# Learning Journal

This journal records durable learning observations, not private personal details.

## Course-Level Observations

- Geometric intuition has been central for understanding linear algebra.
- Earlier experiences with eigenvectors were difficult partly because the geometric meaning of \(A\mathbf{v}=\lambda\mathbf{v}\) was not yet grounded.
- Vocabulary and notation often create more friction than the underlying mathematical idea.
- Explicit symbol tables reduce unnecessary working-memory load.
- Reconstructing what each symbol means while learning a new concept is costly; lessons should avoid forcing that.
- Naming intermediate quantities helps make derivations tractable.
- Connections to software engineering, abstraction, encapsulation, invariants, category theory, and group theory are useful when they reveal structure.

## Concepts With Strong Intuition

- Matrices as transformations.
- Eigenvectors and eigenvalues conceptually.
- SVD and PCA conceptually.
- Covariance as geometry.
- Likelihood as a score rather than a probability distribution over parameters.
- Log likelihood as a useful rescaling.
- MAP as likelihood plus prior pressure.
- Dropout as changing the per-batch computation graph while leaving the architecture fixed.

## Concepts To Reinforce

- Matrix multiplication mechanics.
- Eigenvalue/eigenvector computation steps.
- Multi-step derivations where many symbols are introduced at once.
- Dense probability notation.
- Optimization vocabulary as the course moves from regularization into gradient-based training.

## Teaching Adjustments

- Start with intuition.
- Then introduce vocabulary.
- Then introduce notation.
- Then do computation.
- Keep symbol definitions visible near the point of use.
- Prefer small exercises that test meaning before arithmetic.
