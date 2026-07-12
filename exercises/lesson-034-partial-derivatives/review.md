# Lesson 34 Exercise Review

## Overall Assessment

The work demonstrates readiness for Lesson 35. The central idea is secure: a partial derivative isolates one coordinate while the others are held fixed, and the complete collection of partial derivatives is needed to describe multivariable change.

Problems 1-7 and 9 are correct apart from minor wording precision. Problems 8 and 10 need corrections, but neither exposes a prerequisite gap.

## Problem-by-Problem Review

1. Correct. The distinction is clear. A slightly sharper version is that an ordinary derivative is the full local derivative for a one-input function, while a partial derivative is one coordinate sensitivity of a multi-input function.

2. Correct:

   ```math
   \frac{\partial f}{\partial x}=8x+2y,
   \qquad
   \frac{\partial f}{\partial y}=2x+6y.
   ```

3. Correct. At $(1,-1)$ the values are $6$ and $-4$. It is the function $f$ that locally increases when $x$ increases and locally decreases when $y$ increases; the derivatives themselves are not what is increasing or decreasing.

4. Correct:

   ```math
   \frac{\partial f}{\partial x}=2x\sin y,
   \qquad
   \frac{\partial f}{\partial y}=x^2\cos y.
   ```

   The held-fixed variables were identified correctly.

5. Conceptually correct. The exact point on the surface is $(a,b,f(a,b))$, and the slope belongs to the curve produced by intersecting the surface with the plane $y=b$.

6. Correct. Both the chain-rule factors and the expanded forms are right.

7. Correct:

   ```math
   \Delta f\approx3(0.1)-2(0.05)=0.2.
   ```

8. The setup was copied with $x-y-2$ instead of the exercise's $x+y-2$, and the multiplier terms were then differentiated as though they contained products $\lambda x^2/2$ and $-\lambda y^2/2$.

   For the exercise as written in the Lesson Page,

   ```math
   \mathcal L(x,y,\lambda)=x^2+y^2+\lambda(x+y-2),
   ```

   the correct partials are:

   ```math
   \frac{\partial\mathcal L}{\partial x}=2x+\lambda,
   \qquad
   \frac{\partial\mathcal L}{\partial y}=2y+\lambda,
   \qquad
   \frac{\partial\mathcal L}{\partial\lambda}=x+y-2.
   ```

   Setting the first two to zero enforces stationarity with respect to the decision variables; it does not by itself guarantee a minimum or maximum. Setting the third to zero restores the constraint.

9. Correct. One partial reports only one coordinate component. The full gradient is needed to compare every direction and identify the steepest local increase.

10. The types communicate the intended scalar-field input and output, but the formula is a forward difference around the wrong point rather than a centered difference around `at`. The perturbations must be copies of `at`, with coordinate `i` shifted in opposite directions:

```ts
type ScalarField = (x: readonly number[]) => number;

function partialDerivative(
  f: ScalarField,
  at: readonly number[],
  coordinate: number,
  h = 1e-5,
): number {
  const plus = at.map((value, index) =>
    index === coordinate ? value + h : value,
  );
  const minus = at.map((value, index) =>
    index === coordinate ? value - h : value,
  );

  return (f(plus) - f(minus)) / (2 * h);
}
```

## Readiness

Ready for Gradients. Lesson 35 should reinforce two refinements:

- the gradient is the local linear sensitivity object assembled from every partial derivative;
- numerical derivative checks must perturb the evaluation point, not replace it with a perturbation vector.
