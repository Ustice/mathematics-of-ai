**You:**

I’m ready for my next lesson.

* * *

**ChatGPT:**

Excellent. Last time we introduced Bayesian estimation:

* Prior: $P(\theta)$
* Likelihood: $P(D \mid \theta)$
* Posterior: $P(\theta \mid D)$
* Bayes' Rule: $$P(\theta \mid D)=\frac{P(D\mid\theta)P(\theta)}{P(D)}$$

The key conceptual shift was that **the parameter itself is now treated as uncertain**. Before seeing data, our uncertainty is described by a probability distribution. After seeing data, we update that distribution.

Today we'll make that update concrete.

---

# Lesson 20: Updating Beliefs

## Learning Objectives

By the end of this lesson you should be able to:

* Interpret Bayes' Rule as repeated belief updating.
* Compute a posterior from a simple discrete prior.
* Understand why evidence accumulates naturally.
* See why machine learning often prefers repeated small updates over one giant calculation.

---

# Part 1 — A Simple Example

Imagine a biased coin.

Its probability of heads could be one of three possibilities:

| Hypothesis | $\theta$ | Prior |
| --- | --- | --- |
| Fair | 0.5 | 0.50 |
| Slightly biased | 0.7 | 0.30 |
| Very biased | 0.9 | 0.20 |

This table is your prior belief.

Notice that the probabilities sum to 1.

---

## Exercise 1

Before flipping the coin, answer:

**Which hypothesis do you currently think is most likely?**

---

# Part 2 — New Evidence

You flip the coin once.

It lands **Heads**.

Now ask:

How likely was this observation under each hypothesis?

| Hypothesis | $P(H\mid\theta)$ |
| --- | --- |
| 0.5 | 0.5 |
| 0.7 | 0.7 |
| 0.9 | 0.9 |

These are the likelihoods.

Notice something subtle:

The observation itself didn't change.

Only **how compatible it is with each hypothesis** differs.

---

# Part 3 — Bayes' Rule in Practice

Bayes says

$$P(\theta\mid H)\propto P(H\mid\theta)P(\theta)$$

The proportionality symbol ($\propto$) means "equal up to a normalization constant."

So first compute the unnormalized scores.

| Hypothesis | Prior | Likelihood | Score |
| --- | --- | --- | --- |
| 0.5 | 0.50 | 0.50 | ? |
| 0.7 | 0.30 | 0.70 | ? |
| 0.9 | 0.20 | 0.90 | ? |

---

## Exercise 2

Fill in the Score column.

Don't normalize them yet.

---

# Part 4 — Normalization

Probability distributions must sum to 1.

So after computing the scores:

1. Add them together.
2. Divide each score by the total.

Those become the posterior probabilities.

---

## Exercise 3

Compute the normalized posterior.

Which hypothesis is now most likely?

---

# Part 5 — Updating Again

Suppose the second flip is also **Heads**.

Here's the important insight:

You do **not** go back to the original prior.

Instead:

> Yesterday's posterior becomes today's prior.

Mathematically,

$$P(\theta\mid D_1,D_2)  
\propto  
P(D_2\mid\theta)  
P(\theta\mid D_1)$$

This is one of the reasons Bayesian methods scale so well.

Evidence can be incorporated incrementally.

You don't need to recompute everything from scratch.

---

## Exercise 4

Without doing any arithmetic:

If the second flip is another Heads,

* Which hypothesis gains the most probability?
* Which loses the most?
* Why?

---

# Part 6 — Connection to Machine Learning

This idea appears everywhere.

Training data arrives one sample at a time.

Instead of thinking:

> "Recompute my entire belief from scratch."

Bayesian thinking says:

> "Take what I already believe and update it."

Modern optimization algorithms, online learning, particle filters, and even some reinforcement learning methods all exploit this incremental-update mindset.

---

# Intuition Check

Imagine two scientists.

Scientist A believes a coin is almost certainly fair.

Scientist B believes it's probably heavily biased.

They both watch the exact same sequence of flips.

**Question:**

Will they necessarily reach the same posterior after only a few observations?

Why or why not?

---

Take your time with the exercises and write down your reasoning as you've been doing. Once you've worked through them, upload your notes and we'll review them together before moving on to continuous priors and conjugate distributions.

* * *

**You:**

Note Jul 3, 2026.pdfPDF

* * *

**ChatGPT:**

Another solid lesson. You're starting to internalize Bayesian inference instead of just applying the formula.

### Exercise 1

> **The fair hypothesis is 50%.**

Correct. Before observing anything, the fair coin has the highest prior probability.

---

### Exercises 2 & 3

Your calculations are correct.

You computed the unnormalized scores:

| θ | Prior | Likelihood | Score |
| --- | --- | --- | --- |
| 0.5 | 0.50 | 0.50 | 0.25 |
| 0.7 | 0.30 | 0.70 | 0.21 |
| 0.9 | 0.20 | 0.90 | 0.18 |

Total:

$$0.25+0.21+0.18=0.64$$

Normalized:

| θ | Posterior |
| --- | --- |
| 0.5 | 0.39 |
| 0.7 | 0.33 |
| 0.9 | 0.28 |

You wrote approximately 0.44, 0.37, and 0.19. Those don't quite normalize correctly—the last score should have been **0.18**, not **0.11**, before normalization. Once that arithmetic slip is fixed, the posterior above follows.

This is a nice example of something you've mentioned before: the _concept_ is solid, and a little bookkeeping error crept into the arithmetic.

---

### Your observation

> _"The outcome of heads is expected, so it doesn't move the posterior much."_

I like this.

More precisely:

> Every hypothesis predicted Heads reasonably well, so none of them receives overwhelming support.

That's an intuition worth keeping.

---

### Exercise 4

You reasoned that another Heads continues shifting probability toward the biased hypotheses.

That's correct.

You even computed another posterior, and while there are a couple arithmetic slips again, the trend is exactly right:

* Fair keeps losing probability.
* Slightly biased gains.
* Very biased gains even more because it predicted repeated Heads best.

---

### I especially liked this notation

You wrote

$$P_n(\theta)=P(H\mid\theta)$$

I think what you intended was

$$P_n(\theta)  
=  
P(\theta\mid H_1,\ldots,H_n)$$

That notation is actually useful.

In Bayesian statistics it's common to write

* $P_0(\theta)$ — prior
* $P_1(\theta)$ — posterior after one observation
* $P_2(\theta)$ — posterior after two observations

and so on.

It's a nice way to emphasize that you're updating the same belief repeatedly.

---

## Intuition Check

This was my favorite answer.

You wrote:

> Their beliefs will converge over successive tests. Observations that are the most surprising will cause the biggest change in beliefs, so the one whose belief is the most out of line with reality will update the fastest, while the one that is closer to reality will not change nearly as much.

That's an excellent synthesis.

The only nuance I'd add is that they **don't necessarily converge** if they assign _zero probability_ to the true hypothesis. This is one reason Bayesians are cautious about assigning exact probabilities of 0 or 1. If you assign probability 0 to something, Bayes' rule can never resurrect it because

$$0 \times \text{likelihood} = 0.$$

Aside from that edge case, your intuition is exactly what Bayesian consistency theorems formalize: given enough evidence, different reasonable priors tend to become much less important.

---

## One conceptual connection

You've spent years in the LessWrong community, and I think there's a connection that may help organize your thinking.

You've probably heard phrases like:

> "Evidence is that which causes beliefs to pay rent."

Bayes gives that statement mathematical teeth.

An observation is _evidence for a hypothesis_ precisely to the extent that it changes your posterior belief. If an observation leaves every hypothesis equally likely, it wasn't evidence—it carried no information. The more an observation favors one hypothesis over another, the more informative it is.

This perspective will become central when we discuss concepts like **information gain** and **entropy** later in the course.

**Lesson 20 complete.**

Next we'll move to **Lesson 21: Conjugate Priors**, where you'll see a beautiful example of choosing a prior that makes Bayesian updating almost effortless. It's one of those ideas that makes Bayesian statistics feel less like repeated algebra and more like elegant machinery.