# Lesson 38 - Matrix Calculus Exercise Review

## What Clicked

- Numerator-layout Jacobians, denominator-layout derivatives, and column gradients were distinguished by shape.
- The differential identities for linear forms, quadratic forms, squared error, and trace linear forms were reconstructed rather than recalled from a table.
- The symmetry assumption behind $\nabla_x(x^TAx)=2Ax$ was identified correctly.
- Matrix-gradient reasoning connected the Frobenius inner product to the entrywise trace expansion.
- Shape compatibility was transferred into a TypeScript matrix-product check.

## What Was Confusing

- In the affine-map exercise with $A\in\mathbb R^{5\times3}$, the forward shapes were reversed. The correct rule is $dy_{5\times1}=A_{5\times3}dx_{3\times1}$.
- The reverse rule should name a scalar loss sensitivity: $\nabla_xL_{3\times1}=A^T_{3\times5}\nabla_yL_{5\times1}$.
- One squared-error differential line changed the row $2r^TA$ into the column $2A^Tr$ before pairing it with $dx$; preserve $dL=(2A^Tr)^Tdx$ when writing the column-gradient form.

## Notation Issues

- Keep forward variables $x,y$ separate from reverse sensitivities $\nabla_xL,\nabla_yL$.
- A correct final gradient does not repair an invalid intermediate matrix product; shape-check every displayed equality.

## Concepts To Reinforce

- Exercise 9 gave the stronger general derivation $(A+A^T)x$, but it did not complete the requested concrete nonsymmetric matrix, point, and numerical comparison.
- When a prompt asks for a counterexample, instantiate the general result so the false claim fails visibly at one point.

## Connections Made

- The transpose in least-squares gradients was derived from the same forward/reverse map distinction used in computation graphs.
- Trace notation was understood as compression of an entrywise Frobenius inner product rather than as a new derivative rule.

## Next Actions

- Use the gradient and Hessian as the coefficients of first- and second-order local models in Lesson 39.
- Continue explicit shape annotations when Taylor terms become quadratic forms.
