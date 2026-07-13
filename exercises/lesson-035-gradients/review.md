# Lesson 35 Exercise Review

## Overall Assessment

The work demonstrates readiness for Lesson 36. The central ideas are secure: the gradient assembles coordinate sensitivities, directional derivatives are dot products, the gradient represents the differential in Euclidean coordinates, and gradient descent uses the negative gradient.

Problems 1-3, 6, and 8-11 are correct apart from local arithmetic or implementation cleanup. Problems 4, 5, and 7 need corrections, but the errors are sign-copying and geometric-expression issues rather than prerequisite gaps.

## Problem-by-Problem Review

1. Correct overall. A partial derivative is one coordinate sensitivity, while the gradient collects all coordinate sensitivities. The surface-slice picture is useful. One geometric refinement: the gradient lives in the input plane and is normal to a contour line there; it is not a vector lying in the tangent plane of the graph itself.

2. Correct:

   ```math
   \nabla f(x,y)=
   \begin{bmatrix}
   6x-2y\\
   -2x+2y
   \end{bmatrix},
   \qquad
   \nabla f(1,2)=
   \begin{bmatrix}
   2\\2
   \end{bmatrix}.
   ```

3. The norm and stated unit direction are correct:

   ```math
   \lVert\nabla f(1,2)\rVert_2=2\sqrt2,
   \qquad
   \frac{\nabla f(1,2)}{\lVert\nabla f(1,2)\rVert_2}
   =\frac{1}{\sqrt2}
   \begin{bmatrix}1\\1\end{bmatrix}
   =\frac{\sqrt2}{2}
   \begin{bmatrix}1\\1\end{bmatrix}.
   ```

   The extra rationalization line at the bottom simplifies $1/(2\sqrt2)$ rather than the full vector expression and should be discarded.

4. All three direction vectors were correctly verified as unit vectors, but the gradient's second component was copied as $+4$ instead of the exercise's $-4$. Using

   ```math
   \nabla f=
   \begin{bmatrix}3\\-4\end{bmatrix}
   ```

   gives:

   ```math
   D_u f=3,
   \qquad
   D_v f=-\frac75,
   \qquad
   D_w f=-5.
   ```

5. The conclusion needs correction. If $t$ is tangent to the contour $f(x,y)=c$, moving along $t$ keeps $f$ constant to first order. Therefore:

   ```math
   D_t f=\nabla f(x)^Tt=0.
   ```

   A zero dot product means the gradient is perpendicular to the contour tangent. The gradient is not tangent to the contour.

6. Correct. Cauchy-Schwarz gives the upper bound for every unit vector:

   ```math
   \nabla f(x)^Tu
   \le
   \lVert\nabla f(x)\rVert_2\lVert u\rVert_2
   =\lVert\nabla f(x)\rVert_2.
   ```

   Equality occurs when $u$ points in the gradient direction. The absolute-value form also bounds the magnitude of the directional derivative.

7. The setup identifies the right first-order formula and displacement, but $f$ was evaluated with the wrong sign and the gradient was not evaluated at $(1,-1)$. For

   ```math
   f(x,y)=x^2+2y^2,
   \qquad
   \nabla f(x,y)=
   \begin{bmatrix}2x\\4y\end{bmatrix},
   ```

   we have:

   ```math
   f(1,-1)=3,
   \qquad
   \nabla f(1,-1)=
   \begin{bmatrix}2\\-4\end{bmatrix},
   \qquad
   \Delta x=
   \begin{bmatrix}0.02\\0.03\end{bmatrix}.
   ```

   Hence:

   ```math
   f(1.02,-0.97)\approx3+2(0.02)-4(0.03)=2.92.
   ```

   The exact value is:

   ```math
   1.02^2+2(0.97^2)=2.9222.
   ```

8. Correct. The displacement is $[-0.2,0.1,-0.2]^T$, and the predicted first-order loss change is $-0.9$.

9. Correct. A zero gradient supplies no first-order classification; the Hessian supplies the relevant second-order curvature information.

10. The analytic gradient is correct:

    ```math
    \nabla f(1,-2)=
    \begin{bmatrix}0\\-11\end{bmatrix}.
    ```

    The centered-difference structure is also correct. The TypeScript needs small syntax fixes: close the function signature with `): number[]`, use one function name consistently, and return or assert the componentwise tolerance check.

11. Correct. The differential $df_x$ is the linear map that consumes an input displacement, while the gradient is the Euclidean vector representing that map through

    ```math
    df_x(\Delta x)=\nabla f(x)^T\Delta x.
    ```

## Readiness

Ready for Jacobians. Lesson 36 should reinforce three refinements:

- preserve signs when copying vectors and functions;
- derive contour orthogonality from a zero directional derivative;
- evaluate both the base function and gradient at the stated point before applying a first-order approximation.
