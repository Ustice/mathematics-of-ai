# Exercise Set 31 - Hessians and Curvature

## Concepts Practiced

- First derivatives as local slope and second derivatives as changing slope.
- Gradients and Hessians for simple quadratic losses.
- Hessian eigenvalues as principal curvature strengths.
- Saddle-point classification.
- Directional curvature through $v^T H v$.

## Reviewed Student Work - 2026-07-10

Source: uploaded images stored under [lesson-031-hessians-and-curvature](lesson-031-hessians-and-curvature/).

## Overall

Strong pass. The work shows a solid geometric understanding of curvature and connects the Hessian back to eigenvectors, optimization stability, and directional steepness.

## Problem Review

### 1. First versus second derivative

Correct. The first derivative describes the rate at which a quantity changes; the second derivative describes how that rate changes. The position → velocity → acceleration example is apt, as is the geometric slope → curvature interpretation.

A small wording refinement: a derivative compares infinitesimal changes rather than simply comparing one variable to another, but the intended idea is correct.

### 2. $f(x)=3x^2$

Correct:

```math
f'(x)=6x
```

```math
f''(x)=6
```

### 3. $L(x,y)=4x^2+y^2$

Correct:

```math
\nabla L(x,y)=
\begin{bmatrix}
8x\\
2y
\end{bmatrix}
```

```math
H=
\begin{bmatrix}
8 & 0\\
0 & 2
\end{bmatrix}
```

The zero mixed partials were correctly represented.

### 4. Steeper direction

Correct: the $x$ direction has greater curvature because the corresponding Hessian entry/eigenvalue is $8$, compared with $2$ in the $y$ direction.

One refinement: saying the coefficient is higher is enough for this diagonal quadratic, but the general reason is that the Hessian's curvature value in the $x$ direction is larger. For a rotated Hessian, the coordinate coefficients alone would not identify the principal steep directions.

### 5. Eigenvalues $0.1$ and $10$

Correct. The surface is shallow along one Hessian eigenvector and sharply curved along the other. The ratio

```math
\frac{10}{0.1}=100
```

indicates strong anisotropy: the steep direction has 100 times the curvature of the flat direction.

### 6. Eigenvalues $5$ and $-2$ with zero gradient

Correct: this is a saddle point. The loss bends upward along one eigenvector and downward along another.

### 7. Learning-rate stability

Correct. A step size that is tolerable in a low-curvature direction can overshoot or oscillate in a high-curvature direction. This is the central optimizer consequence of anisotropic curvature.

### 8. TypeScript-style $v^T H v$

Correct. The submitted expression expands to:

```math
x^2 H_{xx} + xy H_{xy} + yx H_{yx} + y^2 H_{yy}
```

which is exactly $v^T H v$ for

```math
v=
\begin{bmatrix}
x\\y
\end{bmatrix}
```

A more implementation-oriented equivalent is:

```ts
type Vector2 = readonly [number, number];
type Matrix2 = readonly [Vector2, Vector2];

function directionalCurvature(h: Matrix2, v: Vector2): number {
  const [x, y] = v;
  const hvX = h[0][0] * x + h[0][1] * y;
  const hvY = h[1][0] * x + h[1][1] * y;
  return x * hvX + y * hvY;
}
```

For the result to equal curvature independent of vector length, $v$ should be a unit vector. Otherwise, $v^T H v$ is scaled by $\lVert v\rVert^2$.

## Review Result

Lesson 31 is complete.

Carry forward these distinctions:

- The gradient gives local slope; the Hessian gives local change in slope.
- Hessian eigenvectors identify principal curvature directions.
- Hessian eigenvalues measure curvature along those directions.
- Mixed-sign eigenvalues at a stationary point indicate a saddle.
- $v^T H v$ is directional curvature when $v$ is normalized.
