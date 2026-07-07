# Teaching Playbook

## Purpose

This playbook converts the learning model into operating rules for lessons, exercises, and AI tutor responses.

## Default Lesson Order

```text
Problem
↓
Motivation
↓
Invariant
↓
Construction
↓
Abstraction
↓
Notation
↓
Vocabulary
↓
Computation
↓
Examples
```

## Lesson-Writing Rules

| Rule | Why It Matters |
| --- | --- |
| Always define symbols. | Symbol resolution should not consume reasoning bandwidth. |
| Explain motivation before notation. | Notation sticks when it solves an already-felt problem. |
| Avoid introducing notation and a new concept at the same time when possible. | Both compete for the same working-memory resource. |
| Prefer geometry, derivations, invariants, and mental models. | These make results reconstructable after the formula is forgotten. |
| Keep a persistent symbol table in lessons. | Repeated lookup should be external and trustworthy. |
| Include an assumptions table for probabilistic/statistical lessons. | Probability notation is ambiguous without the model assumptions. |
| Include dependency reminders. | Jason should know which prior concept is being reused. |
| Name intermediate results. | Named steps compress derivations and reduce local complexity. |
| Treat external references as curriculum. | Reliable references are part of the learning system, not optional extras. |

## Symbol Table Practice

Every lesson with nontrivial notation should include a local symbol table:

| Symbol | Meaning | Scope | Notes |
| --- | --- | --- | --- |
| TODO | TODO | TODO | TODO |

The local table may point to `reference/symbol-table.md` for recurring symbols.

## Assumptions Table Practice

Probability and statistics lessons should include an assumptions table:

| Assumption | Meaning | Consequence |
| --- | --- | --- |
| Data-generating model | What distribution produced the observed data? | Determines the likelihood. |
| Independence | Which observations factor apart? | Lets products become sums after logs. |
| Parameter status | Is \(\theta\) fixed, unknown, or random? | Distinguishes MLE, MAP, and Bayesian prediction. |
| Noise model | What errors are considered plausible? | Determines the shape of the loss. |

## Dependency Reminders

Begin each lesson by naming the few prior ideas it relies on:

- "This uses projection from Lesson 8."
- "This uses covariance geometry from Lessons 12 and 14."
- "This uses likelihood from Lesson 16 and logs from Lesson 17."

Do not restate the entire earlier lesson. Point to the reusable abstraction and only reopen it if the current derivation needs it.

## Naming Intermediate Results

When a derivation has multiple moving pieces, name the stable intermediate quantities:

- Residual vector: \(r = y - Xw\)
- Centered data: \(\tilde{x}_i = x_i - \mu\)
- Log-likelihood: \(\ell(\theta) = \log P(D \mid \theta)\)
- Negative log posterior: data loss plus prior penalty

## Review Prompts

Use prompts that test reconstruction:

- How would you reconstruct this if you forgot the formula?
- What invariant forces this result to have this shape?
- Which symbols are data, parameters, or random variables?
- Which constants can be ignored without changing the optimizer?
- What previous abstraction is being reused here?
