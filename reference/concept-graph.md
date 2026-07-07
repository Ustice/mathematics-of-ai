# Concept Graph

## How To Use This Graph

Before reviewing a lesson, find the lesson's main concept and trace backward until every prerequisite feels familiar. Then trace forward to see why the concept matters later. If a node feels fuzzy, review the reference document for that node before opening the full transcript.

## Curriculum Dependency Graph

```mermaid
flowchart TD
  Vectors[Vectors] --> Dot[Dot product]
  Dot --> Orthogonality[Orthogonality]
  Orthogonality --> Projection[Projection]
  Projection --> LeastSquares[Least squares]

  Matrices[Matrices] --> Transformations[Transformations]
  Transformations --> MatrixMultiplication[Matrix multiplication]
  Transformations --> Determinants[Determinants]
  Determinants --> Inverses[Inverse matrices]
  Transformations --> Eigen[Eigenvectors and eigenvalues]
  Eigen --> ChangeBasis[Change of basis]
  ChangeBasis --> SVD[SVD]
  Eigen --> PCA[PCA]
  SVD --> PCA
  PCA --> Whitening[Whitening]
  Eigen --> Whitening

  Probability[Probability] --> Expectation[Expectation]
  Expectation --> VarianceCovariance[Variance and covariance]
  VarianceCovariance --> CovarianceMatrix[Covariance matrix]
  CovarianceMatrix --> Gaussian[Gaussian]
  Gaussian --> Likelihood[Likelihood]

  Likelihood --> MLE[MLE]
  MLE --> LossFunctions[Loss functions]
  Likelihood --> MAP[MAP]
  MAP --> Regularization[Regularization]
  LossFunctions --> Regularization

  Regularization --> ModelComplexity[Model complexity]
  ModelComplexity --> EarlyStopping[Early stopping]
  ModelComplexity --> Dropout[Dropout]
  Regularization --> EarlyStopping
  Regularization --> Dropout
```

## Review Strategy

- If the lesson is algebra-heavy, identify the invariant first.
- If the lesson is notation-heavy, open `reference/symbol-table.md` before reading.
- If the lesson is probabilistic, write the assumptions table before manipulating formulas.
- If a result feels memorized, check `reference/derivation-index.md` and reconstruct it.
