# Lesson 37 - Chain Rule Exercise Review

## What Clicked

- The order $J_G(F(x))J_F(x)$ was connected correctly to right-to-left function composition.
- Jacobian shapes were used successfully to type-check a composition from $\mathbb R^4$ through $\mathbb R^3$ to $\mathbb R^2$.
- Reverse accumulation was correctly identified as the efficient direction for a scalar output with many inputs.
- The TypeScript forward and backward passes for $L(x,y)=(xy+1)^2$ stored useful intermediates and produced the correct gradient $[42,28]$ at $(2,3)$.
- A computation graph was understood as a structured representation of the same function rather than a different function.

## What Was Confusing

- A local derivative written in terms of $u$ was sometimes rewritten incorrectly in terms of $x$ before substituting the stored forward value.
- Addition nodes were occasionally treated like multiplication nodes, introducing factors from sibling values instead of unit local derivatives.
- Component functions containing addition or subtraction were differentiated as though they contained products.
- Branch-accumulation wording was understood, but the symbolic formula did not yet consistently add the two child contributions.

## Notation Issues

- Keep forward values such as $u$ and backward sensitivities such as $\bar u$ visually separate.
- Write the local operation beside each graph node before writing its derivative.
- Annotate Jacobian rows as outputs and columns as inputs before filling entries.

## Concepts To Reinforce

- For $u=2x-1$ and $L=u^3$ at $x=2$, use $u=3$ to obtain $dL/dx=3u^2\cdot2=54$.
- For $L=x^2+\sin x$, addition gives $dL/dx=2x+\cos x$; sibling values do not multiply the path derivatives.
- For $F(x,y)=[x-y,x+y]^T$, build the Jacobian directly from the two component functions to obtain $[[1,-1],[1,1]]$.
- At a branch, use $\bar v=\bar a\,da/dv+\bar b\,db/dv$.

## Connections Made

- The correct TypeScript reverse pass shows that the computational structure is understood even where symbolic translation remains unreliable.
- Matrix-calculus shape checking can reduce transpose errors, but it must be paired with careful reading of the actual local operation.

## Next Actions

- Correct Exercises 2, 3, 5, 6, and 7 before marking Lesson 37 complete.
- Use the opening bridge in Lesson 38 to rehearse local-value substitution, operation-specific derivatives, and branch addition.
