# Exercise Set 26 - Gradient Descent

Companion lesson: Lesson 26 - Gradient Descent.

Source artifact: [Lesson 26 Notability PDF](notability-pdfs/lesson-026-gradient-descent.pdf).

Implementation script: [`implementation.ts`](lesson-26-gradient-descent/implementation.ts).

## Concepts Practiced

- Loss landscapes.
- Gradients as uphill directions.
- Negative gradients as descent directions.
- Learning rate.
- One-dimensional and two-dimensional update steps.
- The difference between an objective and an optimizer.
- Scaling a loss without changing its minimizer.

## Notation

| Symbol | Meaning |
| --- | --- |
| $\theta$ | A parameter value or parameter vector. |
| $\theta_t$ | The parameter value at step $t$. |
| $L(\theta)$ | Loss evaluated at parameters $\theta$. |
| $\nabla L(\theta_t)$ | Gradient of the loss at the current parameters. |
| $\eta$ | Learning rate. |
| $\Delta \theta$ | Parameter update. |

The gradient descent update is:

$$
\theta_{t+1} = \theta_t - \eta \nabla L(\theta_t).
$$

## Problems

### Problem 1

In your own words, explain the difference between these two statements:

- "The loss function defines the landscape."
- "Gradient descent defines the path through the landscape."

Then identify which object each phrase refers to in the update rule:

$$
\theta_{t+1} = \theta_t - \eta \nabla L(\theta_t).
$$

### Problem 2

Draw a one-dimensional loss curve with a minimum at $\theta = 3$.

Mark a current point $\theta_t < 3$. Then label:

- The sign of the gradient.
- The downhill direction.
- A small learning-rate step.
- A large learning-rate step that might overshoot the minimum.

### Problem 3

Let:

$$
L(\theta) = (\theta - 4)^2.
$$

Then:

$$
\nabla L(\theta) = 2(\theta - 4).
$$

Start with:

$$
\theta_0 = 1
$$

and:

$$
\eta = 0.1.
$$

Compute $\theta_1$, $\theta_2$, and $\theta_3$. For each step, write the gradient value before applying the update.

### Problem 4

Suppose:

$$
L'(\theta) = 10L(\theta).
$$

Answer:

1. Does the minimizer of $L'$ change compared with the minimizer of $L$?
2. What happens to the gradient?
3. If the original learning rate was $\eta$, what learning rate would make gradient descent take the same steps on $L'$?

### Problem 5

Let:

$$
L(w, b) = (w - 1)^2 + 9(b + 2)^2.
$$

The gradient is:

$$
\nabla L(w, b) =
\begin{bmatrix}
2(w - 1) \\
18(b + 2)
\end{bmatrix}.
$$

Start at:

$$
(w_0, b_0) = (0, 0)
$$

with:

$$
\eta = 0.05.
$$

Compute one gradient descent update. Then explain why the $b$-coordinate moves more dramatically than the $w$-coordinate.

### Problem 6

Use the local linear approximation:

$$
L(\theta + \Delta \theta) \approx L(\theta) + \nabla L(\theta)^T \Delta \theta.
$$

Show what happens when:

$$
\Delta \theta = -\eta \nabla L(\theta)
$$

for $\eta > 0$.

Your answer should explain why the dot product term is non-positive.

### Problem 7

A regularized objective has the form:

$$
J(\theta) = L_{\text{data}}(\theta) + \lambda \lVert \theta \rVert_2^2.
$$

Answer:

- Which part measures data fit?
- Which part penalizes large parameters?
- Which object would gradient descent use to update $\theta$: $\nabla L_{\text{data}}(\theta)$ or $\nabla J(\theta)$?
- How is changing $\lambda$ different from changing the learning rate $\eta$?

## Implementation Problems

### Implementation Problem 1

Write a TypeScript function:

```ts
type GradientDescentOptions = {
  initialTheta: number[];
  gradient: (theta: number[]) => number[];
  learningRate: number;
  steps: number;
};

function gradientDescent(options: GradientDescentOptions): number[][] {
  // Return every parameter vector, including the initial one.
}
```

Use `.map` to compute each parameter update.

Test it on:

$$
L(w, b) = (w - 2)^2 + 4(b + 1)^2.
$$

The gradient is:

$$
\nabla L(w, b) =
\begin{bmatrix}
2(w - 2) \\
8(b + 1)
\end{bmatrix}.
$$

Start from $(0, 0)$, use $\eta = 0.1$, and record 10 steps.

### Implementation Problem 2

Add a helper that computes the loss value for each parameter vector in the history.

Check whether the loss decreases at every step for $\eta = 0.1$. Then try $\eta = 0.4$ and describe what changes.

## Reflection

- Which part of the update rule still feels symbolic instead of geometric?
- Did the one-dimensional example or two-dimensional example make the idea clearer?
- What is the clearest difference between regularization strength $\lambda$ and learning rate $\eta$?
- What should the next lesson reinforce before stochastic gradient descent adds mini-batches?

## Instructor Notes / Review

Problem 3 should move toward $\theta = 4$ with shrinking steps:

$$
\theta_1 = 1.6,\quad \theta_2 = 2.08,\quad \theta_3 = 2.464.
$$

Problem 4:

- The minimizer does not change.
- The gradient is multiplied by 10.
- The learning rate should be divided by 10 to preserve the same update steps.

Problem 5:

$$
\nabla L(0, 0) =
\begin{bmatrix}
-2 \\
36
\end{bmatrix}
$$

so:

$$
(w_1, b_1) = (0, 0) - 0.05(-2, 36) = (0.1, -1.8).
$$

Problem 6:

$$
\nabla L(\theta)^T(-\eta \nabla L(\theta))
=
-\eta \lVert \nabla L(\theta) \rVert^2
\leq 0.
$$

This is the compact reason the negative gradient is a descent direction for sufficiently small steps.
