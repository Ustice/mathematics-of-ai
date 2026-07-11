# Exercise Set 30 - Learning Rate Schedules

## Concepts Practiced

- Learning rates as scheduled functions of optimizer step.
- Warmup, step decay, linear decay, and cosine decay.
- Scheduled SGD update notation.
- Why schedules help optimization but do not fix modeling or data problems.

## Notation

| Symbol | Meaning |
| --- | --- |
| `η` | Learning rate. |
| `η_t` | Learning rate at step `t`. |
| `η_0` | Initial learning rate. |
| `η_max` | Maximum or target learning rate. |
| `η_min` | Minimum learning rate. |
| `t` | Current optimization step. |
| `T` | Total schedule length. |
| `T_w` | Warmup duration in steps. |
| `d` | Multiplicative drop factor for step decay. |
| `n` | Drop interval in steps. |

## Problems

### Problem 1

In your own words, explain why a single fixed learning rate may be too blunt for a whole training run.

### Problem 2

Write the SGD update rule using a scheduled learning rate `η_t`.

### Problem 3

Suppose:

```math
η_{max} = 0.001
```

and:

```math
T_w = 1000
```

Compute the linear warmup learning rate at:

- `t = 250`
- `t = 500`
- `t = 1000`

using:

```math
η_t = η_{max}\frac{t}{T_w}
```

### Problem 4

For step decay with:

- initial learning rate `0.1`
- drop factor `0.1`
- drop interval `1000` steps

what learning rate is used at steps `500`, `1500`, and `2500`?

Use the conventional floor-based step-decay schedule unless otherwise specified:

```math
η(t) = η_0 d^{\lfloor t/n \rfloor}
```

### Problem 5

Why might warmup be useful for Adam even though Adam already has bias correction?

### Problem 6

Explain the endpoint behavior of cosine decay: why does it start at `η_max` and end at `η_min`?

### Problem 7

Write TypeScript-style pseudocode for a function `warmupThenLinearDecay(step)`.

### Problem 8

Give one situation where a learning rate schedule might improve training, and one situation where it would not solve the underlying problem.

## Instructor Notes / Review

Expected checkpoints:

- A fixed learning rate should be described as one scalar trying to serve different training phases.
- The scheduled SGD update should use `η_t` or an equivalent function notation such as `η(t)`.
- Linear warmup should give `0.00025`, `0.0005`, and `0.001` for the three requested steps.
- Step decay should normally use a floor function so `η_0` remains the starting rate through the first interval.
- Warmup for Adam should be tied to unstable early optimizer state and noisy early updates, not only to bias correction.
- Cosine decay endpoint reasoning should use `cos(0) = 1` and `cos(π) = -1`.
- Pseudocode should compute warmup progress and cooldown progress separately.

## Reviewed Student Work - 2026-07-09

Source: uploaded images stored in this [Exercise Artifact Module](.).

### Overall

Strong conceptual pass. The answers show the central idea: a schedule makes learning rate a function of training step rather than asking one scalar to work for the whole run.

The strongest parts were:

- the explanation that different regions or phases of optimization can call for different step sizes;
- the scheduled SGD update rule;
- the linear warmup arithmetic;
- the cosine endpoint explanation;
- the recognition that a schedule can improve optimization but cannot fix bad data.

### Corrections / Refinements

1. **Step decay convention: ceiling versus floor.**

   The submitted work used a ceiling-style exponent:

   ```math
   η(t) = η_0 d^{\lceil t/n \rceil}
   ```

   With that convention, the student's arithmetic is internally consistent:

   - `t = 500`: `0.01`
   - `t = 1500`: `0.001`
   - `t = 2500`: `0.0001`

   The lesson intended the conventional floor-style step decay:

   ```math
   η(t) = η_0 d^{\lfloor t/n \rfloor}
   ```

   That gives:

   - `t = 500`: `0.1`
   - `t = 1500`: `0.01`
   - `t = 2500`: `0.001`

   The reason floor is preferred here is that `η_0` should usually remain the initial learning rate during the first interval.

2. **Warmup is not direct curvature adaptation.**

   The first answer correctly notices that one fixed learning rate may not fit the whole loss landscape. A refinement: most basic schedules do not directly inspect curvature. They are predetermined functions of step count. They are useful because training usually has different early, middle, and late behavior.

3. **Adam warmup wording.**

   Adam's bias correction reduces the zero-initialization bias in `m_t` and `v_t`, but early updates can still be poorly calibrated. Warmup limits the effect of those early updates while the optimizer state and model activations settle.

4. **Pseudocode cooldown calculation.**

   The structure of the pseudocode was good. The cooldown branch should subtract `warmupSteps` from `step`, not `minLearningRate`.

   A clean linear warmup plus linear decay shape is:

   ```ts
   function warmupThenLinearDecay(
     step: number,
     warmupSteps: number,
     totalSteps: number,
     minLearningRate: number,
     maxLearningRate: number,
   ): number {
     if (step < 0 || step > totalSteps) {
       throw new Error("step out of bounds");
     }

     if (step <= warmupSteps) {
       const warmupProgress = step / warmupSteps;
       return minLearningRate + warmupProgress * (maxLearningRate - minLearningRate);
     }

     const cooldownSteps = totalSteps - warmupSteps;
     const cooldownStep = step - warmupSteps;
     const cooldownProgress = cooldownStep / cooldownSteps;

     return maxLearningRate - cooldownProgress * (maxLearningRate - minLearningRate);
   }
   ```

### Review Result

Lesson 30 is complete. Reinforce before Lesson 31: step schedules use integer intervals, schedules scale the optimizer update but do not choose a new direction, and floor/ceiling choices matter because they define boundary behavior.
