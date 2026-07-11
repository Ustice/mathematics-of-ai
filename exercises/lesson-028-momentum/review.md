# Exercise Set 28 — Momentum

## Concepts Practiced

- Momentum as optimizer state.
- Learning rate versus momentum coefficient.
- Velocity recurrence.
- Parameter updates from velocity.
- Cancellation of oscillating gradient components.
- Overshoot from accumulated velocity.

## Notation

| Symbol | Meaning |
| --- | --- |
| `θ_t` | Parameter value or parameter vector at step `t`. |
| `g_t` | Gradient estimate at step `t`. |
| `v_t` | Momentum velocity at step `t`. |
| `η` | Learning rate. |
| `β` | Momentum coefficient / velocity retention factor. |

Momentum convention used in this lesson:

```math
v_t = \beta v_{t-1} + g_t
```

```math
\theta_{t+1} = \theta_t - \eta v_t
```

## Problems and Reviewed Answers

### Problem 1

**Prompt:** In your own words, explain what problem momentum is trying to solve.

**Reviewed answer:** SGD tends to produce zig-zag paths through the loss landscape because stochastic gradient estimates introduce noise. Momentum mitigates this by keeping velocity from previous updates and combining it with the current gradient, moderated by `β`.

**Review:** Correct. The key idea is optimizer memory: directions that keep recurring accumulate, while noisy alternating components tend to dampen.

### Problem 2

**Prompt:** What is the difference between `η` and `β`?

**Reviewed answer:** If `β` is analogous to mass/friction, then `η` is the timestep.

**Review:** Good physical intuition. More precisely: `β` controls how much prior velocity is retained; `η` controls how strongly the velocity changes the parameters. The mass/friction metaphor is useful, but the durable mathematical meaning is retention/decay.

### Problem 3

**Prompt:** If `β = 0`, what optimizer do we recover?

**Reviewed answer:** Standard SGD.

**Review:** Correct. If `β = 0`, then `v_t = g_t`, so the update becomes `θ_{t+1} = θ_t - ηg_t`.

### Problem 4

**Prompt:** Compute `v_t` when `v_{t-1} = 5`, `g_t = 2`, and `β = 0.8`.

**Reviewed answer:**

```math
v_t = \beta v_{t-1} + g_t = 0.8 \cdot 5 + 2 = 4 + 2 = 6
```

**Review:** Correct.

### Problem 5

**Prompt:** Compute the parameter update if `η = 0.1` and the velocity from exercise 4 is used.

**Reviewed answer:**

```math
\Delta\theta = \theta_{t+1} - \theta_t
```

```math
\theta_{t+1} = \theta_t - \eta v_t
```

```math
\Delta\theta = -\eta v_t = -0.1 \cdot 6 = -0.6
```

**Review:** Correct. The parameter moves by `-0.6` under this sign convention.

### Problem 6

**Prompt:** Why do sideways oscillations tend to cancel under momentum?

**Reviewed answer:** Updates can be decomposed into components along the ideal downhill path and sideways components. The sideways oscillating components alternate sign and sum to approximately zero, while the along-path components keep pointing in the useful direction and accumulate.

**Review:** Correct. This is the right geometric model. The important invariant is component-wise accumulation: persistent components survive; alternating components cancel.

### Problem 7

**Prompt:** Explain why momentum can overshoot if the learning rate is too large.

**Reviewed answer:** Algebraically, `β` and `η` combine to create a large parameter change. By analogy, a ball with mass rolling down the loss landscape can speed past the minimum because it has accumulated so much velocity, possibly becoming trapped in a higher minimum.

**Review:** Correct. The direct mechanism is that `η v_t` becomes too large. Momentum can make this worse because `v_t` may already contain accumulated gradients from previous steps.

## Overall Review

This submission shows good understanding of momentum as stateful SGD. The arithmetic is correct, and the physical analogy is being used productively rather than as a substitute for the equations.

One refinement to keep: describe `β` as a velocity retention factor. The mass/friction analogy is helpful, but `β` is not itself mass; it is the coefficient controlling how much of the previous velocity survives into the next update.

## Follow-up Prompts

- When reading optimizer formulas, check whether the learning rate is inside the velocity update or outside it.
- Keep using component decomposition for optimizer geometry: across-valley components versus along-valley components.
- In Adam, watch for two different exponentially weighted memories: one for gradients and one for squared gradients.
