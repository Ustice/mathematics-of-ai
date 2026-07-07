**You:**

I’m ready for Lesson 24

* * *

**ChatGPT:**

Excellent. Lesson 24 builds naturally on regularization. So far we've asked:

* Can our model fit the data? (model complexity)
* Can we keep it from overfitting? (regularization)

Now we ask:

> **How do we decide _when to stop learning_?**

---

# Lesson 24: Validation and Early Stopping

## Goal

By the end of this lesson you should be able to explain

* why we split data into three sets instead of two,
* what a validation set is,
* how early stopping works,
* why training longer is not always better,
* how early stopping acts as a form of regularization.

---

## Part 1 — Three Kinds of Data

Imagine you have 10,000 examples.

Instead of splitting them into only training and testing, we usually create three groups.

```
Training set
↓
learn the parameters

Validation set
↓
choose hyperparameters

Test set
↓
final unbiased evaluation
```

Each has a different purpose.

| Dataset | Used for |
| --- | --- |
| Training | Learning weights |
| Validation | Making design decisions |
| Test | Final report card |

---

### Analogy

Suppose you're writing a novel.

Training set:

> writing the manuscript

Validation set:

> giving drafts to a trusted editor

Test set:

> publishing the book

You can revise based on your editor.

You cannot revise after reading public reviews.

The test set is the public review.

---

## Exercise 1

Suppose you evaluate the test set after every training epoch and keep adjusting your model until the test accuracy is highest.

Why is this a bad idea?

Answer in your own words.

---

## Part 2 — Training Curves

Imagine plotting loss versus epoch.

Training loss usually looks like

```
|
|\
| \
|  \
|   \
|    \
+--------->
```

It keeps decreasing.

Validation loss often looks like

```
|
|\ 
| \
|  \
|   \__
|      \
|       \
+------------>
```

At first both improve.

Eventually

training loss ↓

validation loss ↑

The model starts memorizing the training data.

---

This is another view of overfitting.

---

## Exercise 2

Why might validation loss begin increasing even though training loss keeps decreasing?

---

## Part 3 — Early Stopping

Instead of training forever, we stop when validation performance stops improving.

Example

| Epoch | Train Loss | Validation Loss |
| --- | --- | --- |
| 1 | 0.92 | 0.95 |
| 2 | 0.71 | 0.74 |
| 3 | 0.55 | 0.58 |
| 4 | 0.43 | 0.47 |
| 5 | 0.34 | 0.45 |
| 6 | 0.26 | 0.46 |
| 7 | 0.19 | 0.50 |

The best model is

Epoch 5

—not Epoch 7.

We save the parameters from the best validation score.

---

### Important idea

The model at epoch 7 fits the training data better.

But it predicts unseen data worse.

Machine learning is about **generalization**, not memorization.

---

## Exercise 3

Suppose validation loss is lowest at epoch 18.

Training finishes at epoch 40.

Which model should you deploy?

Why?

---

## Part 4 — Why Early Stopping Regularizes

This is a subtle point.

A large neural network can eventually memorize almost anything.

Early in training, however, it tends to learn

* broad patterns,
* large trends,
* simple relationships.

Later it learns

* noise,
* exceptions,
* quirks of the training data.

Stopping early prevents the network from fully memorizing.

This limits the _effective_ complexity of the learned function, even though the architecture itself hasn't changed.

---

An analogy:

Imagine sculpting a statue from marble.

Early on, you remove the obvious excess stone and reveal the main form.

If you keep carving indefinitely, you eventually start adding tiny details that only make sense from one viewing angle. Those details may not improve the sculpture for most viewers—they may even make it feel overworked.

Early stopping is choosing to put down the chisel when the sculpture already captures the essential form.

---

## Exercise 4

In your own words:

Why can stopping earlier produce a model that performs **better** than a model trained longer?

---

## Part 5 — Patience

Validation loss is noisy.

Suppose

```
0.42
0.41
0.40
0.401
0.399
0.402
```

Should we stop immediately after 0.401?

Probably not.

Instead we introduce **patience**.

Example

> Stop only if validation loss hasn't improved for 10 epochs.

This prevents stopping because of random fluctuations.

---

## Exercise 5

Why is patience generally preferable to stopping immediately after the first increase in validation loss?

---

# Lesson Summary

Today we introduced another important distinction:

* **Parameters** are learned from the training set.
* **Hyperparameters** (such as learning rate, regularization strength, or the stopping point) are chosen using the validation set.
* The **test set** is used only once, at the very end, to estimate how well the final model generalizes.

This separation helps ensure that our final performance estimate is as unbiased as possible.

---

## One conceptual question

This lesson introduces a new distinction that will become increasingly important.

A neural network's **weights** are learned automatically during training.

The **number of layers**, **learning rate**, **dropout rate**, and **regularization strength** are chosen by the practitioner.

Why do you think machine learning separates these into **parameters** and **hyperparameters**, instead of trying to learn everything automatically?

* * *

**You:**

Lesson 23.pdfPDF

* * *

**ChatGPT:**

Excellent work. Your answers show that you're reasoning from the underlying principles rather than memorizing terminology.

### Exercise 1

> Evaluating the test set after every epoch causes overfitting to the test set.

Exactly.

I especially liked your benchmark analogy:

> "It's like the student memorizing the answers from previous tests."

That's precisely what's happening. The test set ceases to be an independent measure because it has become part of the optimization process.

---

### Exercise 2

> Once we start over-fitting the data, we lose generalizability.

Correct.

One refinement I'd add is _why_.

The model is continuing to reduce errors by fitting idiosyncrasies of the training data—noise and accidental patterns—which don't exist in new data. Training loss goes down because the model remembers more; validation loss goes up because those memories don't transfer.

---

### Exercise 3

> Deploy epoch 18.

Correct.

I also liked that you noted the practical consequence:

> Continuing training wastes compute, time, and money.

Exactly. In modern ML, that isn't just theoretical. Training large models can cost thousands or millions of dollars, so recognizing when you've already reached the best generalization is valuable.

---

### Exercise 4

This was an interesting answer.

You wrote:

> "...once it takes a lot less compute to effectively use a lookup table than to model the actual function."

That's a programmer's intuition, and it's a useful one.

You're recognizing that memorization is often computationally easier than discovering the underlying rule. A lookup table has zero abstraction—it simply stores answers. Learning the true function requires compressing many observations into a simpler representation.

That's a nice way to think about overfitting.

---

### Exercise 5

Excellent.

> We need more data to separate noise from actual degradation.

Exactly.

Validation loss is a noisy measurement of generalization. Patience smooths that measurement by asking, "Is this really a trend, or just a random fluctuation?"

---

### Exercise 6

I enjoyed this answer because it extends beyond the lesson.

You observed that:

* we're searching over different _kinds_ of models,
* then optimizing the parameters within a chosen model,
* and changing many things simultaneously makes it difficult to attribute improvements.

That's essentially correct.

You also predicted that hyperparameters may eventually become automated.

They already are, to a surprising extent.

Methods like:

* Bayesian optimization,
* Hyperband,
* Population-Based Training,
* Neural Architecture Search (NAS),
* evolutionary algorithms,

all attempt to automate hyperparameter selection.

What's interesting is that these methods usually form **two nested optimization loops**:

* the **inner loop** learns the parameters (weights),
* the **outer loop** searches for good hyperparameters.

In a sense, hyperparameters are parameters of the _learning algorithm_ itself.

---

## A connection to your software engineering background

I think this lesson aligns well with something you've mentioned before: abstraction and encapsulation.

The separation between parameters and hyperparameters is similar to separating **instance state** from **class design**.

If we think in object-oriented terms:

```
Model architecture
    ↓
defines what can be learned

Training
    ↓
fills in the learned values
```

The weights are analogous to object state.

The architecture, optimizer, learning rate, regularization strength, etc., are analogous to the class definition and construction policy.

Changing the weights gives you a different _instance_ of the same model family. Changing the hyperparameters changes the _kind_ of model you're instantiating.

That distinction becomes even more important when we study optimization algorithms over the next few lessons.

---

**Lesson 24 Complete.**

## Looking ahead

Lesson 25 begins the second major phase of the course: **Optimization**.

Until now we've mostly treated training as a black box: "adjust the weights until the loss gets smaller."

Now we'll open that box and study _how_ the weights are actually adjusted.

We'll start with the fundamental idea that powers almost all modern machine learning:

> **Gradient Descent**.

Given how much you've enjoyed seeing the geometry behind linear algebra and probability, I think you'll find optimization particularly satisfying. It's another place where a simple geometric picture explains a surprisingly powerful algorithm.