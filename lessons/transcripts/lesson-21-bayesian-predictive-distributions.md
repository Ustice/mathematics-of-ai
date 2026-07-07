**You:**

On to lesson 21

* * *

**ChatGPT:**

Excellent. Lesson 21 is where we transition from **estimating unknown parameters** to **making predictions**. Up to now we've mostly asked:

> "Given the data, what is the most likely value of θ?"

Now we'll ask:

> "Given the data, what do I expect to observe next?"

That subtle shift is one of the defining ideas of Bayesian statistics.

---

# Lesson 21 — Bayesian Predictive Distributions

## Goal

Understand why Bayesians usually **predict by averaging over many hypotheses** instead of choosing a single "best" hypothesis.

---

## Review

So far we have

* Prior

$$P(\theta)$$

* Likelihood

$$P(D\mid\theta)$$

* Posterior

$$P(\theta\mid D)  
=  
\frac{P(D\mid\theta)P(\theta)}{P(D)}$$

where $D$ is our observed dataset.

The posterior is **not a single answer.**

It is a probability distribution over possible parameter values.

---

## A Frequentist Prediction

Suppose you've estimated

$$\hat{\theta}=0.73$$

Then predicting the next observation is easy:

$$P(x_{\text{next}})  
=  
P(x_{\text{next}}\mid\hat{\theta})$$

Everything depends on one parameter estimate.

---

## Bayesian Prediction

Bayes says:

> We don't actually know θ.

Instead we know

$$P(\theta\mid D)$$

Some values are more likely than others.

Instead of pretending one value is correct, we average over every possible θ.

That gives

$$P(x_{\text{next}}\mid D)  
=  
\int  
P(x_{\text{next}}\mid\theta)  
P(\theta\mid D)  
\,d\theta$$

This is called the **posterior predictive distribution**.

---

## Intuition

Imagine you're trying to guess tomorrow's temperature.

You have three weather models.

| Model | Probability | Tomorrow |
| --- | --- | --- |
| A | 50% | 70°F |
| B | 30% | 75°F |
| C | 20% | 80°F |

A frequentist might choose Model A.

Prediction:

70°F

A Bayesian combines them.

Expected prediction

$$0.5(70)  
+  
0.3(75)  
+  
0.2(80)  
=  
73.5^\circ$$

Notice:

The prediction reflects uncertainty.

---

## Coin Example

Suppose yesterday's lesson ended with this posterior.

| θ | Posterior |
| --- | --- |
| 0.3 | 0.2 |
| 0.5 | 0.5 |
| 0.7 | 0.3 |

What's the probability the next flip is heads?

Each hypothesis predicts

$$P(H\mid\theta)=\theta$$

Average them:

$$0.2(0.3)  
+  
0.5(0.5)  
+  
0.3(0.7)$$ $$=  
0.06+0.25+0.21  
=  
0.52$$

So

$$P(H_{\text{next}})  
=  
0.52$$

We never committed to a single θ.

---

## Why This Matters

Imagine the posterior looks like this.

```
θ

0.4      0.6
 ^        ^
  \______/
```

Both parameter values are plausible.

Choosing

$$\theta=0.5$$

would actually choose a value that has **less posterior probability than either peak**.

Averaging predictions instead avoids pretending the uncertainty disappeared.

This is one reason Bayesian prediction is often more robust.

---

# Geometric Interpretation

Think back to our discussions of linear algebra.

A posterior is like a weighted combination of basis vectors.

Instead of selecting one basis vector,

we form a weighted sum.

Likewise,

instead of choosing one model,

we form a weighted average of all models.

The posterior predictive distribution is another weighted combination.

Category-theoretically, this resembles taking an expectation over the space of hypotheses: mapping each hypothesis to its prediction and then averaging with respect to the posterior measure.

---

# Vocabulary

| Term | Meaning |
| --- | --- |
| Posterior | Probability distribution over parameters after seeing data |
| Posterior predictive | Distribution of future observations after averaging over the posterior |
| Model averaging | Combining predictions from many hypotheses instead of selecting one |

---

# Exercises

### 1. Conceptual

Why might using only the MAP estimate lose information compared with using the full posterior?

---

### 2. Calculation

Suppose your posterior is

| θ | Probability |
| --- | --- |
| 0.2 | 0.1 |
| 0.4 | 0.2 |
| 0.6 | 0.4 |
| 0.8 | 0.3 |

What is the probability the next flip is heads?

---

### 3. Prediction

Suppose your posterior has become very narrow around

$$\theta=0.75.$$

How should the Bayesian prediction compare to the prediction made using the MLE or MAP estimate? Explain why.

---

### 4. Reflection

Earlier in the course, we treated vectors as weighted combinations of basis vectors, and more recently we treated beliefs as probability distributions over hypotheses.

What structural similarity do you see between these two ideas? How does that analogy help you understand Bayesian prediction?

---

Take your time with these. Based on your answers so far, I expect Exercise 4 will probably be the most interesting one to discuss together.

* * *

**You:**

Lesson 21.pdfPDF

* * *

**ChatGPT:**

I enjoyed reading your answers. You're starting to synthesize ideas from different areas of mathematics instead of treating each topic in isolation, which is exactly where I hoped we'd end up by this point.

Let's go through them.

---

## 1. MAP vs. the full posterior

> _"MAP assumes a single model, so it doesn't include the information that comes from a larger space of hypotheses."_

Exactly.

The key word I'd add is **uncertainty**.

The posterior tells us:

* which hypotheses are plausible,
* how plausible they are relative to each other,
* and how uncertain we remain.

MAP throws almost all of that away.

Suppose the posterior is

```
θ

0.49      0.51
^^^^      ^^^^
```

MAP picks 0.51.

But it completely ignores that 0.49 is essentially just as believable.

The posterior predictive remembers both.

---

## 2. Calculation

You computed

$$\frac{58}{100}=0.58.$$

Perfect.

This is simply

$$0.2(0.1)+0.4(0.2)+0.6(0.4)+0.8(0.3)  
=0.58.$$

No issues there.

---

## 3. Narrow posterior

You wrote:

> Since all three should generally converge... they will look very similar.

Exactly right.

The reason is worth stating mathematically.

If

$$P(\theta\mid D)$$

is concentrated almost entirely around

$$\theta=0.75,$$

then

$$P(x_{\text{next}}\mid D)  
=  
\int  
P(x_{\text{next}}\mid\theta)  
P(\theta\mid D)\,d\theta$$

is approximately

$$P(x_{\text{next}}\mid0.75).$$

The integral is averaging over almost identical values.

So Bayesian prediction naturally reduces to MAP or MLE once there is very little uncertainty left.

This is one reason Bayesian methods often "agree" with classical statistics once the dataset becomes very large.

---

# 4. The fun one

This is where your mathematical instincts took over. You wandered into territory that is much deeper than the lesson itself.

Let's separate what I think is correct from what I think is premature.

---

### I like this

You wrote

> "Beliefs are the weighted combination of the base hypotheses."

I think that's exactly the right mental picture.

Instead of

$$v  
=  
a_1e_1+a_2e_2+\cdots$$

we have

$$P(\theta)  
=  
w_1H_1+w_2H_2+\cdots$$

The weights now happen to sum to one.

Conceptually that's a beautiful analogy.

---

I also liked

> "Data will point toward hypotheses, creating a cloud..."

Yes.

That "cloud" is literally the posterior distribution.

As more evidence arrives, the cloud contracts.

---

## Where I think you got ahead of the mathematics

Then you started asking

> Can Bayes theorem define an inner product?

That's an interesting research question.

People absolutely study geometry on probability distributions.

For example:

* information geometry
* Hilbert spaces
* reproducing kernel Hilbert spaces
* kernel methods
* Gaussian processes
* quantum probability

So your instinct isn't crazy.

But Bayes' theorem itself isn't an inner product.

It doesn't satisfy the axioms we'd need.

Instead, it transforms one probability distribution into another.

---

### PCA

You also wondered whether PCA would find "orthogonal hypotheses."

Not quite.

PCA finds orthogonal **directions in the data space**, not in the hypothesis space.

Those are different vector spaces.

One contains observations.

The other contains models.

Much later in machine learning we'll see methods that operate directly in parameter space, where your intuition becomes more applicable.

---

## Your inner-product exploration

I smiled reading pages 3 and 4 because this is exactly how mathematicians play.

You started checking the axioms.

* symmetry
* positivity
* linearity

That's the correct way to investigate whether some new object deserves to be called an inner product.

Then you noticed linearity starts getting weird.

Good catch.

That wasn't an accident.

Probability normalization

$$\sum_i P_i = 1$$

doesn't behave like vector addition.

Probability distributions don't form an ordinary vector space because adding two probability distributions usually produces something that is **not** a probability distribution.

You have to renormalize afterward.

That "renormalize" note you wrote in the margin is exactly where the difficulty comes from.

---

## A connection I think you'll enjoy

Because you've studied category theory, here's another viewpoint.

A probability distribution is less like a vector and more like a **formal weighted sum**.

For example

$$0.2H_1  
+  
0.5H_2  
+  
0.3H_3.$$

Notice this looks exactly like a vector.

But the coefficients have two extra constraints:

* they're nonnegative,
* they sum to one.

That object is called a **convex combination**.

A posterior is a convex combination of hypotheses.

A vector is an arbitrary linear combination of basis vectors.

So Bayesian inference is often better thought of as living in **convex geometry** than in linear algebra.

I suspect you'll enjoy convex analysis when we eventually get there, because it feels like the missing bridge between linear algebra and probability.

---

## Overall

Another strong lesson.

You're no longer just answering the exercises—you've started testing whether the mathematical structures from one field can be transported into another. That's a habit worth cultivating. Sometimes the analogy will break, as it did with the inner product, but discovering _where_ it breaks is often as informative as discovering where it holds.

**Preview of Lesson 22:** We'll make posterior prediction concrete by introducing **conjugate priors**. You'll see why some priors are considered "natural" partners for particular likelihoods, because Bayes' theorem produces a posterior in the same family as the prior. That gives us closed-form updates instead of difficult integrals, and you'll finally see Bayesian updating carried out from start to finish on a realistic example.