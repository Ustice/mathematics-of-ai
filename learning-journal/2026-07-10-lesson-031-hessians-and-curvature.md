# Lesson 31 - Hessians and Curvature

## What Clicked

- The first derivative gives local slope; the second derivative gives change in slope.
- Hessian eigenvectors identify principal curvature directions, and their eigenvalues give the curvature strengths.
- Mixed-sign Hessian eigenvalues at a stationary point identify a saddle.
- Unequal curvature explains why one learning rate can be stable in a flat direction and unstable in a steep direction.
- The expansion of $v^T H v$ translated cleanly into TypeScript-style matrix and vector operations.

## Refinements To Carry Forward

- Coordinate coefficients identify principal steep directions directly only for diagonal Hessians; rotated Hessians require eigenvectors.
- $v^T H v$ is curvature itself when $v$ is normalized. Otherwise the value also contains the scale factor $\lVert v\rVert^2$.
- Describe a derivative as a ratio of local changes, rather than only as one variable varying compared with another.

## Readiness

The exercise work demonstrates readiness to continue to convexity. The remaining points are precision refinements, not prerequisite gaps.
