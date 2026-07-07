**You:**

Let’s begin lesson 22

* * *

**ChatGPT:**

Welcome back! Last lesson we covered **Bayesian Predictive Distributions**, which completed the basic Bayesian inference loop:

* Prior → beliefs before data
* Likelihood → how data relates to parameters
* Posterior → updated beliefs about parameters
* Predictive distribution → predictions that average over parameter uncertainty

That gives you the core of classical Bayesian estimation.

Today we're going to pivot slightly. Up to now we've mostly been talking about **estimating parameters**. The next several lessons will focus on **models themselves**.

---

# Lesson 22: Model Complexity and Overfitting

## Learning objectives

By the end of this lesson you should understand:

* why more complex models often fit training data better
* why fitting the training data perfectly can be a bad thing
* the difference between fitting signal and fitting noise
* the ideas of underfitting and overfitting
* why we need separate data for evaluation

---

# Part 1 — A thought experiment

Suppose someone gives you these five points.

| x | y |
| --- | --- |
| 1 | 2.0 |
| 2 | 3.1 |
| 3 | 3.9 |
| 4 | 5.0 |
| 5 | 5.8 |

Your task is to predict what happens at $x=6$.

Two engineers propose different models.

### Model A

A straight line.

$$y=ax+b$$

It doesn't hit every point exactly.

---

### Model B

A fifth-degree polynomial.

$$y=a_5x^5+a_4x^4+\cdots+a_1x+a_0$$

It passes through **every single point exactly.**

Zero training error.

---

Question **1**

Without doing any calculations:

Which model would you trust more to predict $x=6$, and why?

---

# Part 2 — Signal vs Noise

Imagine the data actually came from

$$y=x+1+\epsilon$$

where

$$\epsilon\sim\mathcal N(0,\sigma^2)$$

Let's define the symbols:

* $y$: observed value
* $x$: input
* $\epsilon$: random measurement noise
* $\mathcal N(0,\sigma^2)$: Gaussian centered at zero
* $\sigma^2$: variance of the noise

The important idea is this:

The observations contain **two things**.

* structure (signal)
* randomness (noise)

Machine learning tries to learn the signal.

Overfitting happens when it memorizes the noise too.

---

## Analogy

Imagine trying to map a hiking trail.

The trail is the signal.

Small GPS errors are noise.

A good map follows the trail.

A bad map zigzags through every GPS error.

---

# Part 3 — Capacity

Different models can represent different amounts of complexity.

Examples:

* constant function
* straight line
* quadratic
* cubic
* degree-20 polynomial
* huge neural network

We call this the model's **capacity**.

Higher capacity means

> "I can represent more complicated functions."

It does **not** necessarily mean

> "I will make better predictions."

---

# Part 4 — Three regimes

Imagine increasing model complexity.

Training error behaves like this:

```
complexity →

training error

\
 \
  \
   \
    \______
```

Training error almost always decreases.

But test error often behaves like

```
complexity →

test error

\
 \
  \
   \
    /
   /
  /
 /
```

The bottom of the curve is usually where we want to be.

---

Three regions:

### Underfitting

Model too simple.

Cannot capture the pattern.

Both training and test error are high.

---

### Good fit

Capturing the underlying structure.

Training error is low.

Test error is also low.

---

### Overfitting

Model memorizes quirks of the training data.

Training error becomes tiny.

Test error gets worse.

---

# Part 5 — Why does overfitting happen?

Remember

$$y=f(x)+\epsilon$$

The true function is

$$f(x)$$

The noise is

$$\epsilon$$

If your model has enough flexibility, it can start learning

$$f(x)+\epsilon$$

instead of only

$$f(x)$$

But future datasets have **different** noise.

So memorizing today's noise hurts tomorrow's predictions.

---

# Part 6 — Generalization

Perhaps the most important concept in machine learning is:

> **Generalization** is how well a model performs on data it has never seen before.

Machine learning is **not** about memorizing examples.

It is about discovering rules that continue to work.

You can think of training as compression.

If the model has captured the underlying rule, it has compressed many examples into a simpler explanation.

---

# Exercises

### Question 1

Suppose a model achieves:

* Training accuracy: **100%**
* Test accuracy: **58%**

What does that suggest?

---

### Question 2

Suppose another model achieves

* Training accuracy: **91%**
* Test accuracy: **90%**

Which model would you deploy?

Why?

---

### Question 3

Suppose I double the number of parameters in a neural network.

Must the test accuracy improve?

Why or why not?

---

### Question 4

Imagine you're fitting points with increasingly high-degree polynomials.

At what point does adding more degrees stop helping?

How would you know?

---

## Looking ahead

Next lesson we'll make this idea quantitative by introducing **bias and variance**, one of the central conceptual frameworks in statistical learning. It explains _why_ both underfitting and overfitting occur and gives you a way to reason about the trade-off between them.

One callback to your background: this lesson fits well with your Rationalist intuition about model building. Overfitting is analogous to constructing an overly elaborate hypothesis that explains every observation—including random fluctuations—instead of finding the simplest hypothesis that predicts new observations well. In Bayesian terms, this is also where priors begin to matter: they can encode a preference for simpler explanations, helping prevent the posterior from concentrating on implausibly complex models. We'll make that connection more explicit later when we discuss model selection and Bayesian regularization.

* * *

**You:**

Clarifying question, don’t give me the answer here. In 6.3 you asked if the test accuracy must improve, but did you mean 

A. Will doubling the parameters cause an increase in test performance?
B. Will we need to improve the test accuracy in order for the model to maintain the same level of performance?

* * *

**ChatGPT:**

I meant **A**.

Restated more explicitly:

> Suppose you double the number of parameters in a neural network while keeping everything else the same. **Does that necessarily cause the test accuracy to improve? Why or why not?**

The question is asking whether increasing the model's capacity, by itself, guarantees better generalization. It is **not** asking whether you need to improve test accuracy to compensate for the larger model.

* * *

**You:**

Lesson 22.pdfPDF

* * *

**ChatGPT:**

Overall, I think you have a solid grasp of the core idea. You repeatedly came back to the distinction between **learning the underlying process** and **memorizing the observations**, which is exactly what this lesson was trying to teach.

Here are my comments on each question.

---

## 1. Which engineer do you trust?

Excellent answer.

Two parts stood out:

> "Hypotheses need to pay rent."

That's a great heuristic. A model that can explain _any_ data isn't making risky predictions, so it has little explanatory power.

I also liked:

> "Engineer 2's model pretends the noise is data."

That's almost exactly how I would summarize overfitting in one sentence.

One small technical correction:

> "Using a fifth degree polynomial for five pieces of data..."

With **five distinct points**, the interpolating polynomial is actually **degree at most 4**. A fifth-degree polynomial _can_ pass through them, but there are infinitely many such polynomials because you have six coefficients and only five constraints. The unique interpolating polynomial has degree ≤ 4.

This is a mathematical detail rather than a conceptual mistake.

**Score: 10/10 conceptually**

---

## 2. 100% training, 58% test

Excellent.

Your analogy with the student memorizing last year's exam is one of the classic ways of explaining overfitting.

The phrase

> "It hasn't learned the right abstractions."

is especially nice. As a software engineer, that's probably the most natural way for you to think about it.

**10/10**

---

## 3. 91% / 90%

Exactly right.

You correctly identified that

> test accuracy is ultimately what we care about.

Training accuracy is only useful insofar as it helps us build a model that generalizes.

**10/10**

---

## 4. Double the parameters

Correct.

Your explanation

> higher capacity for memorizing the training data

is precisely the point.

The only wording I'd tweak is this:

> "over-parameterizing"

People usually reserve that term for the architecture itself ("this network is overparameterized"), whereas **overfitting** describes the observed behavior. An overparameterized model may or may not overfit depending on the amount of data, regularization, optimization, etc.

That's a vocabulary refinement, not a conceptual issue.

**10/10**

---

## 5. When do higher-degree polynomials stop helping?

This was your most interesting answer.

The first half is exactly where modern ML goes:

> hold back some training data and watch performance on unseen data

Yes.

That is the entire motivation behind validation sets.

---

The second half is where you started doing original reasoning.

You proposed intentionally adding random error during training:

> each time that data point comes up, it will be at some random point centered on the actual value

That isn't just a thought experiment.

Modern machine learning actually does this.

Examples include:

* adding Gaussian noise to inputs
* data augmentation
* dropout
* stochastic depth
* label smoothing

All of these deliberately inject noise during training to discourage memorization.

You independently rediscovered a very common regularization strategy.

---

The Fourier analogy is also interesting.

It's not a perfect analogy because Fourier series converge for different mathematical reasons than polynomial interpolation behaves, but the intuition that richer function families can approximate more complex functions is sound.

---

One subtle point:

You wrote:

> "the error will average out over successive tests"

I'd phrase it a little differently:

The _noise_ averages out across many observations, allowing the model to recover the underlying signal. The model itself doesn't average out its own errors simply by being tested repeatedly; rather, if trained on many noisy samples, it can learn the expected relationship because the noise has mean zero.

That's a small distinction, but it's worth making because it'll matter when we discuss bias and variance next lesson.

**9.5/10**

---

# Overall

This lesson landed well.

More importantly, I noticed a shift in your reasoning compared to the early linear algebra lessons.

Back then, you were often reasoning from formulas and then building intuition. Here, you're starting from abstractions like _generalization_, _compression_, _capacity_, and _signal versus noise_, and then using those to predict how different models should behave. That's a good sign that these ideas are becoming part of your mental toolkit rather than isolated facts.

Next lesson will formalize this intuition with the **bias–variance tradeoff**. I think you'll enjoy it because it puts mathematical names to the kinds of tradeoffs you've already been reasoning about intuitively.