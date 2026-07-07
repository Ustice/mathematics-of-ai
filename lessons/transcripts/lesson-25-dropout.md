**You:**

I’m ready for the next lesson

* * *

**ChatGPT:**

Excellent. Based on our curriculum, this is **Lesson 25**.

The last few lessons have all been about one question:

* Maximum Likelihood: _How do we fit the data?_
* MAP Estimation: _How do we encode prior beliefs?_
* Model Complexity: _When is a model too powerful?_
* Regularization: _How do we discourage overfitting?_
* Early Stopping: _How do we stop before memorization begins?_

Today we introduce another major regularization technique.

# Lesson 25 — Dropout

## Learning Objectives

By the end of this lesson you should be able to:

* Explain why dropout helps generalization.
* Describe dropout as sampling many different subnetworks.
* Predict the effect of changing the dropout probability.
* Understand why dropout is used only during training.
* Explain why activations must be rescaled during inference.

---

# Part 1 — Motivation

Imagine a neural network like this:

```
Input
 │
 ● ● ● ●
 ││││
 ● ● ●
 │││
 ● ●
 ││
Output
```

During training, every neuron is available.

This creates a problem.

A neuron may become **dependent** on another neuron.

For example:

* Neuron A always detects edges.
* Neuron B assumes A is always present.
* Neuron C assumes B is always present.

The network develops **co-adaptations**.

If one feature is slightly wrong on new data, several downstream neurons fail together.

---

### Analogy

Imagine studying for an exam.

Scenario A:

Every homework assignment is done with your smartest friend sitting beside you.

Scenario B:

On every assignment, random classmates are absent.

You learn to solve problems yourself instead of relying on one specific person.

Dropout creates Scenario B.

---

# Part 2 — The Idea

During every training step:

Randomly remove some neurons.

Example:

Before dropout:

```
● ● ● ● ●
```

After dropout:

```
● X ● X ●
```

The X neurons do nothing.

Their outputs are treated as zero.

Next batch:

```
X ● ● ● X
```

Different neurons disappear.

Every mini-batch trains a slightly different network.

---

# Checkpoint 1

Suppose we have 100 hidden neurons.

We apply **20% dropout**.

Without calculating exactly, answer intuitively:

1. About how many neurons are active on a given training step?
2. Does the set of active neurons stay the same throughout training?

Answer these before reading on.

---

# Part 3 — An Ensemble in Disguise

A useful way to think about dropout:

Every training step samples one network from an enormous family of possible networks.

Instead of training one network,

you are effectively training millions of overlapping subnetworks that all share weights.

At inference time, you use the full network.

This behaves somewhat like averaging the predictions of many models, but at a much lower computational cost.

---

# Part 4 — Why It Works

Without dropout:

```
Neuron A
    ↓
Neuron B
    ↓
Neuron C
```

B can always rely on A.

With dropout:

Sometimes A disappears.

Then B must learn another strategy.

Over many training steps:

* every neuron learns to work with many partners
* representations become more robust
* features become more independent

This reduces overfitting.

---

# Checkpoint 2

Suppose a neuron that your model relied on is randomly removed during one training batch.

What pressure does that create on the rest of the network?

Describe it in your own words.

---

# Part 5 — Why We Turn It Off

At inference time we want the strongest prediction possible.

So we do **not** randomly disable neurons.

Instead we use every neuron.

However...

During training, each neuron only participates some fraction of the time.

If we simply enable every neuron during inference, total activation becomes larger than what the network experienced while learning.

To compensate, we scale activations.

The common modern approach is called **inverted dropout**:

During training:

If the keep probability is

$$p$$

we divide surviving activations by $p$.

Example:

Keep probability:

$$p = 0.8$$

If a neuron survives,

instead of

```
activation = 5
```

it becomes

```
5 / 0.8 = 6.25
```

The expected activation remains unchanged.

Then at inference:

No neurons are dropped.

No scaling is needed.

---

# Checkpoint 3

Suppose we use **50% dropout**.

A neuron outputs

```
8
```

and survives this training step.

Using inverted dropout, what value is passed to the next layer?

---

# Part 6 — Choosing the Dropout Rate

Typical values:

| Layer | Typical Dropout |
| --- | --- |
| Input | 0–10% |
| Hidden | 20–50% |
| Very deep networks | Often much smaller |
| Transformers | Often 10% or less |

Too little:

* little regularization

Too much:

* network cannot learn

Like regularization strength, dropout has to be tuned.

---

# Summary

Today you learned:

* Dropout randomly disables neurons during training.
* This prevents neurons from depending too heavily on one another.
* Training effectively samples many subnetworks.
* Inference uses the complete network.
* Inverted dropout rescales surviving activations during training so inference requires no adjustment.

---

## Exercises

1. Why does dropout reduce overfitting even though the network architecture never changes?
2. Explain, in your own words, why dropout is only used during training.
3. Complete Checkpoints 1–3 if you haven't already.
4. Suppose you increase dropout from 20% to 80%. What tradeoff do you expect during training and on unseen data?
5. Compare **L2 regularization**, **early stopping**, and **dropout**. What problem does each address, and how are they similar or different?

Take your time working through these. Upload your answers when you're ready, and we'll go through them together before moving on.

* * *

**You:**

Lesson 25.pdfPDF

* * *

**ChatGPT:**

Nice work. I think this lesson clicked for you. Your answers show you're reasoning about the mechanism rather than just repeating the definition. I also liked your network sketches—they capture the important idea that the _effective_ network changes even though the architecture does not.

A few comments:

### Checkpoint 1

> About 80 neurons are active.

Correct.

> Does each neuron independently have a 20% chance of being dropped, or do we pick exactly 20 neurons?

Good question.

In almost every implementation, **each neuron is sampled independently**.

For each neuron:

* keep with probability $p$
* drop with probability $1-p$

So with 100 neurons and a 20% dropout rate, you'll usually get around 80 active, but sometimes 77, 81, 84, etc. For large layers, the variation is small, and independent sampling parallelizes very naturally.

---

### Checkpoint 2

Excellent.

> It encourages neurons to not be completely dependent on any particular neuron...

That's exactly the pressure dropout creates.

I'd phrase it one step more generally:

> Every feature must be recoverable through multiple pathways.

That's the redundancy dropout is encouraging.

---

### Checkpoint 3

Correct.

$$8 / 0.5 = 16$$

Exactly right.

---

## Exercise 1

I really liked your opening sentence:

> "The effective network does change."

That's the key insight.

One refinement:

> The _architecture_ stays fixed, but the _computation graph used on each batch_ changes.

Those are subtly different ideas, and you've identified the distinction.

---

## Exercise 2

Your analogy with training using weights is a good intuition.

There is one sentence I'd adjust:

> "Dropout does reduce the accuracy of the output..."

I'd instead say:

> "Dropout intentionally makes the training task harder."

It isn't trying to reduce accuracy as a goal—it makes the model solve a more difficult version of the task so that the learned solution is more robust.

---

## Exercise 4

Good answer.

One additional point:

When dropout becomes extremely large (80–90%), optimization itself often becomes unstable.

So the tradeoff is:

* **Low dropout** → easier optimization, greater risk of overfitting.
* **High dropout** → stronger regularization, but much harder optimization.
* **Too high** → the network may never learn useful features.

---

## Exercise 5

This was my favorite answer.

I especially liked this summary:

> "All three are used to discourage over-fitting, but at different levels of the process."

That's a clean abstraction.

I would tweak one phrase:

> "L2 regularization works at the function emulation level."

I'd instead say:

> **L2 regularization acts directly on the parameter values (the weights).**

So I think of them as operating at different layers:

* **L2:** constrains the **weights**.
* **Dropout:** constrains the **information flow** through the network.
* **Early stopping:** constrains the **optimization process**.

That distinction becomes useful later when we'll see methods that combine several regularizers at once.

---

# One conceptual connection

This lesson ties back to something you observed several lessons ago.

When we discussed SVD and PCA, you remarked that abstraction reduces cognitive load because you don't have to keep reconstructing every computation.

Dropout is doing something similar for the network.

Instead of allowing one very specialized neuron to carry an essential fact, dropout encourages that information to become **distributed** across several neurons. The representation becomes less brittle because no single neuron is indispensable.

That's a recurring theme in machine learning: **robust representations are distributed representations.**

**Lesson 25: Complete.**

Next we'll begin moving from techniques for regularization into optimization itself—how neural networks actually navigate these enormous parameter spaces efficiently.