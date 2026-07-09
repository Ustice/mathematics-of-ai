# Exercise Set 29 - Adam

## Concepts Practiced

- Adam as a stateful optimizer.
- First moment versus second moment estimates.
- Bias correction from zero initialization.
- Per-parameter adaptive scaling.
- Reading optimizer pseudocode.
- Knowing what Adam does and does not solve.

## Notation

| Symbol | Meaning |
| --- | --- |
| `θ_t` | Parameter value or parameter vector at step `t`. |
| `g_t` | Gradient estimate at step `t`. |
| `m_t` | First moment estimate: running average of gradients. |
| `v_t` | Second moment estimate: running average of squared gradients. |
| `β_1` | First-moment decay coefficient. |
| `β_2` | Second-moment decay coefficient. |
| `η` | Base learning rate. |
| `ε` | Small numerical stability constant. |

Adam convention used in this lesson:

```math
m_t = \beta_1 m_{t-1} + (1 - \beta_1)g_t
```

```math
v_t = \beta_2 v_{t-1} + (1 - \beta_2)(g_t \odot g_t)
```

```math
\hat{m}_t = \frac{m_t}{1 - \beta_1^t}
```

```math
\hat{v}_t = \frac{v_t}{1 - \beta_2^t}
```

```math
\theta_{t+1} = \theta_t - \eta \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}
```

## Problems

### Problem 1

In your own words, explain why Adam keeps two memories instead of one.

### Problem 2

What does `m_t` remember? What does `v_t` remember? Be specific about why `v_t` uses squared gradients.

### Problem 3

Use toy coefficients:

- `β_1 = 0.8`
- `β_2 = 0.9`
- `η = 0.1`
- `ε` is small enough to ignore
- `m_0 = 0`
- `v_0 = 0`
- `g_1 = 5`

Compute:

1. `m_1`
2. `v_1`
3. `\hat{m}_1`
4. `\hat{v}_1`
5. the approximate parameter update

### Problem 4

Suppose an Adam step has:

```math
\hat{m}_t = [10, 1]
```

and:

```math
\hat{v}_t = [100, 1]
```

Ignore `ε`.

Compute:

```math
\frac{\hat{m}_t}{\sqrt{\hat{v}_t}}
```

Then explain what this says about per-parameter scaling.

### Problem 5

Bias correction uses:

```math
\hat{m}_t = \frac{m_t}{1 - \beta_1^t}
```

Explain why this correction is largest at the beginning of training and becomes less important later.

### Problem 6

Write a short paragraph comparing SGD, momentum, and Adam.

Use this structure:

- SGD uses...
- Momentum adds...
- Adam adds...

### Problem 7

Give one situation where Adam is likely easier to use than plain SGD.

Then give one reason Adam still does not remove the need for validation checks and learning-rate tuning.

## Implementation Problems

### Problem 8

Write TypeScript-style pseudocode for one Adam update over arrays:

- `theta`
- `gradient`
- `firstMoment`
- `secondMoment`

Assume you are given:

- `step`
- `learningRate`
- `beta1`
- `beta2`
- `epsilon`

The goal is not perfect syntax. The goal is to show the state updates in the right order.

## Reflection

- Which Adam symbol was easiest to remember?
- Which symbol was most overloaded or expensive?
- Did bias correction feel like a conceptual idea or just algebra?
- What should be reinforced before learning rate schedules?

## Instructor Notes / Review

Expected checkpoints:

- `m_t` should be described as direction memory, not as a parameter.
- `v_t` should be described as squared-gradient scale memory, not momentum velocity.
- Bias correction should be tied to `m_0 = 0` and `v_0 = 0`.
- Per-parameter scaling should be explained coordinate by coordinate.
- The implementation prompt should update optimizer state before applying the parameter update.

## Reviewed Student Work - 2026-07-09

Source: uploaded `Lesson 29.pdf`.

### Overall

Strong conceptual pass. The answers show the important Adam model: two optimizer memories, one for direction and one for scale. The scalar calculation for `g_1 = 5` is correct:

```math
m_1 = 1
```

```math
v_1 = 2.5
```

```math
\hat{m}_1 = 5
```

```math
\hat{v}_1 = 25
```

```math
\theta_1 \approx \theta_0 - 0.1
```

### Keep

- The distinction between direction memory and scale memory is clear.
- The explanation of why `sqrt(v_t)` is needed is right: `v_t` stores squared-gradient scale, so the square root returns to gradient units.
- The note that `ε` prevents denominator failure is right.
- The Adam-easier-than-SGD example is good: parameter coordinates with very different gradient scales.

### Corrections / Refinements

1. **Adam's adaptive scaling does change the final update direction.**

   The answer says that if we only adjusted scale independently, the direction would get distorted, so Adam also tracks direction. That is mostly right as an intuition, but there is a subtlety: Adam's coordinatewise division by `sqrt(v_t)` can itself change the direction relative to the raw gradient vector.

   More precise wording:

   > Adam separates two questions: what direction has recent gradient evidence supported, and how large are gradients usually in each coordinate? The final update is a coordinatewise normalized direction, not necessarily the same geometric direction as the raw gradient.

2. **Bias correction is not mainly about preventing infinity.**

   `ε` handles the literal divide-by-zero case. Bias correction handles a different problem: because `m_0 = 0` and `v_0 = 0`, the early running averages are artificially too small.

   Better wording:

   > Bias correction matters most early because `1 - β^t` is small near `t = 1`, and the zero initialization strongly shrinks `m_t` and `v_t`. As `t` grows, `β^t` approaches zero, so `1 - β^t` approaches one and the correction becomes negligible.

3. **The implementation sketch has the right state-shape intuition, but the bias correction needs `step` exponents.**

   The pseudocode divides by `1 - beta1` and `1 - beta2`. That is correct only on step 1. In general it should be:

   ```ts
   const firstHat = firstMoment[i] / (1 - beta1 ** step);
   const secondHat = secondMoment[i] / (1 - beta2 ** step);
   ```

   Also, `firstMoment` and `secondMoment` should be arrays updated per parameter index, not single scalar variables shared across the whole parameter array.

### Suggested Clean Pseudocode

```ts
function adamStep(
  theta: number[],
  gradient: number[],
  firstMoment: number[],
  secondMoment: number[],
  step: number,
  learningRate: number,
  beta1: number,
  beta2: number,
  epsilon: number,
): void {
  for (let i = 0; i < theta.length; i++) {
    firstMoment[i] = beta1 * firstMoment[i] + (1 - beta1) * gradient[i];
    secondMoment[i] = beta2 * secondMoment[i] + (1 - beta2) * gradient[i] ** 2;

    const firstHat = firstMoment[i] / (1 - beta1 ** step);
    const secondHat = secondMoment[i] / (1 - beta2 ** step);

    theta[i] = theta[i] - learningRate * firstHat / (Math.sqrt(secondHat) + epsilon);
  }
}
```

### Review Result

Lesson 29 is complete. Reinforce before Lesson 30: bias correction versus `ε`, and the distinction between raw gradient direction and Adam's coordinatewise normalized update direction.
