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
