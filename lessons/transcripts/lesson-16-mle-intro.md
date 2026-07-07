**You:**

Ready for 16

* * *

**ChatGPT:**

Excellent. Lesson 16 is where the individual ideas from the last several lessons start fitting together into a coherent statistical picture.

Here's where we are so far:

1. Vectors
2. Matrices as transformations
3. Matrix multiplication
4. Determinants
5. Inverses
6. Eigenvalues & eigenvectors
7. Change of basis
8. Projection
9. Least squares
10. Singular Value Decomposition
11. Principal Component Analysis
12. Covariance
13. Probability as Linear Algebra
14. Covariance Geometry
15. Multivariate Gaussian

Notice the progression:

* **Linear algebra:** "How do vectors move?"
* **Statistics:** "How is data distributed?"
* **Geometry:** "What shape does that distribution have?"

The multivariate Gaussian tied all three together. The covariance matrix **is** the geometry of uncertainty.

## Lesson 16: Maximum Likelihood Estimation (MLE)

This is one of the most important ideas in all of machine learning.

Every time you train a regression model, logistic regression, Naive Bayes classifier, Gaussian mixture model, Hidden Markov Model, or many neural networks, you're really solving an optimization problem based on **likelihood**.

By the end of this lesson you'll understand:

* what a likelihood is
* why we maximize it
* why everyone takes logarithms
* why least squares is secretly MLE
* why almost every ML loss function comes from probability

---

### Part 1 — A thought experiment

Suppose someone hands you a bag of marbles.

They won't tell you how many red or blue marbles are inside.

You draw with replacement:

```
Red
Blue
Red
Red
Red
Blue
Red
Red
```

Question:

> What fraction of the marbles do you think are red?

You'd probably say

> About 75%.

Notice what you just did.

You inferred an unknown parameter from observed data.

---

### The hidden parameter

Let's call

$$\theta = P(\text{Red})$$

You don't know θ.

You only know the observations.

Different values of θ make your observations more or less plausible.

For example

```
θ = 0.2

Red Red Red Red Red ...
```

That seems unlikely.

Meanwhile

```
θ = 0.75
```

fits much better.

So we'd like a mathematical way to measure

> "How well does this parameter explain the data?"

That measure is called the **likelihood**.

---

### Part 2 — Probability vs. Likelihood

These are easy to confuse.

Suppose

$$\theta = 0.75$$

Then

$$P(\text{our observations}\mid\theta)$$

means

> If the true red probability is 75%, what is the probability of seeing exactly these draws?

That's an ordinary probability.

Now imagine we've already observed the data.

The data is fixed.

Instead we ask

> Which θ best explains these observations?

Now θ is the variable.

That same expression is viewed as a function of θ:

$$L(\theta)  
=  
P(\text{Data}\mid\theta)$$

This is called the **likelihood function**.

The formula is identical.

Only our perspective changes.

A helpful way to think about it is:

* **Probability:** parameter fixed, data varies.
* **Likelihood:** data fixed, parameter varies.

---

### Part 3 — Computing a likelihood

Suppose our data is

```
R R R B R
```

That's

4 reds

1 blue

If

$$\theta=P(R)$$

then

$$L(\theta)  
=  
\theta^4(1-\theta)^1$$

Why?

Each red contributes

$$\theta$$

Each blue contributes

$$1-\theta$$

Multiply them together because the draws are independent.

---

### Exercise 1

Without differentiating anything yet:

Sketch (qualitatively) the graph of

$$L(\theta)=\theta^4(1-\theta)$$

for

$$0\le\theta\le1.$$

Just answer these questions:

1. Where is the likelihood zero?
2. Roughly where should it reach its maximum?
3. Why doesn't it peak exactly at 1?

Don't worry about finding the exact maximum yet. I want you to build intuition before we introduce calculus.

* * *

**You:**

Lesson 16.pdfPDFI did the Calculus to check my intuition, but I did it after answering, so the answers still represent my intuition.

* * *

**ChatGPT:**

I like that you did the calculus **after** committing to your intuition. That's exactly the right habit to develop. The intuition comes first; the calculus is there to verify it, not replace it.

Overall, I think this was an excellent exercise.

### 1. Your sketch

Your graph is exactly what I hoped to see.

* It starts at 0.
* It rises smoothly.
* It reaches one peak.
* It falls back to 0 at θ = 1.

That tells me you're already thinking about how the factors $\theta^4$ and $(1-\theta)$ compete.

---

### 2. The maximum at $4/5$

You wrote $4/5$ from intuition, then later confirmed it with calculus.

That's a surprisingly good intuition.

In hindsight it makes sense:

* four observations are pushing θ upward,
* one observation is pushing θ downward,

so the "best compromise" ought to be around

$$\theta=\frac{4}{5}.$$

Next lesson we'll prove that this always happens:

If you observe

* $k$ successes
* $n-k$ failures

then the MLE is

$$\hat\theta=\frac{k}{n}.$$

So you independently discovered the general rule in this example.

---

### 3. The part about "why not 1?"

This is the one place where I think your probability instincts leaked in. That's completely normal.

You started reasoning about the **area under the curve** and whether it should integrate to 1.

That is true for a **probability density**.

But a **likelihood function isn't a probability distribution over θ.**

This is probably the single biggest conceptual hurdle in MLE.

The function

$$L(\theta)=\theta^4(1-\theta)$$

is just a _score_.

Its absolute size doesn't matter.

Only comparisons matter.

For example, if I multiplied the entire function by 100,

$$100\,\theta^4(1-\theta),$$

the maximum would occur at exactly the same θ.

Likewise if I divided by 20.

Nothing changes.

This is why we don't require

$$\int_0^1L(\theta)\,d\theta=1.$$

Your computation that the integral is $1/20$ is completely correct—but the conclusion ("my intuition was incorrect") isn't. The integral simply isn't something likelihood theory cares about.

---

### 4. Your reasoning about more samples

I actually liked this paragraph more than your calculus.

You wrote:

> "As the number of samples increases, we will become more and more certain... the mass of the likelihood should be more and more centered around the real value."

Exactly.

That's one of the deepest ideas in statistics.

Suppose the true parameter is

$$\theta=0.73.$$

With five observations, lots of different θ values are plausible.

With 500 observations, almost all of those alternatives become wildly unlikely.

The likelihood curve becomes narrower and more sharply peaked around the true value.

You don't know it yet, but you're describing the intuition behind **consistency** of estimators and, eventually, the **Central Limit Theorem**.

---

So I'd summarize your work like this:

* ✅ Excellent qualitative sketch.
* ✅ Correct intuition that the maximum is near $4/5$.
* ✅ Correct calculus verification.
* ✅ Nice insight that more data concentrates the estimate.
* 🔶 The only misconception was treating likelihood as though it were a probability density.

That last distinction is subtle enough that nearly everyone trips over it at first.

I have one question for you before we continue:

Suppose I define a new function

$$L'(\theta)=10^9\,L(\theta).$$

Would $L'$ produce a different maximum-likelihood estimate than $L$? More importantly, can you explain _why_ without doing any calculus? That's the key intuition we'll build on next.

* * *

**You:**

The likelihood estimate for L' would increase, but the maximum value would still be at theta=4/5. We aren’t changing how theta functions behaves. We just scaled it by 10^9. The total area would increase, but as I now know, it doesn’t mean much (or it doesn’t have a meaning that I know yet).

* * *

**ChatGPT:**

Exactly.

There's one tiny wording change I'd make:

> The likelihood estimate for $L'$ would increase...

I'd instead say:

> **The likelihood values** increase by a factor of $10^9$.

The **estimate** (the MLE) does **not** change.

So

$$L(\theta)=\theta^4(1-\theta)$$

and

$$L'(\theta)=10^9\theta^4(1-\theta)$$

have different heights but the same maximizing parameter:

$$\hat\theta=\frac45.$$

---

This observation is actually why statisticians are so willing to manipulate likelihoods.

Suppose we define

$$\ell(\theta)=\log L(\theta).$$

Since the logarithm is strictly increasing, it preserves ordering.

If

$$L(\theta_1)>L(\theta_2),$$

then

$$\log L(\theta_1)>\log L(\theta_2).$$

So **the maximum occurs at exactly the same value of $\theta$.**

That sounds almost too simple, but it is one of the biggest computational tricks in all of statistics.

---

### A programming analogy

I think this will resonate with your software background.

Imagine you have a comparator function.

Instead of comparing

```
score(x)
```

you compare

```
f(score(x))
```

where `f` is monotonic.

You haven't changed the ordering of the candidates.

You've only changed the _representation_ of the score.

Maximum likelihood does exactly this.

We replace

```
Likelihood
```

with

```
Log-Likelihood
```

because:

* products become sums,
* exponentials disappear,
* derivatives become much simpler,
* floating-point underflow largely disappears.

The optimizer doesn't care whether it's climbing a mountain that's 1,000 meters tall or one that's 6.9 units tall. It only cares which direction is uphill.

---

One more observation from reading your notes.

You wrote:

> "The total area would increase, but ... it doesn't mean much."

I would actually strengthen that statement:

> **The area is not merely unimportant—it is arbitrary.**

That's a subtle but profound distinction.

For a probability density, the area **must** equal 1.

For a likelihood function, I can multiply it by:

* 2
* $$10^9$$
* $$1/17$$
* $$\pi$$

and nothing about inference changes.

That freedom is what makes likelihood such a useful optimization objective rather than a probability distribution.

I think you're developing exactly the intuition I hoped for. You're no longer asking, "What's the formula?" You're asking, "What information does this object actually encode?" That's the question that makes the later statistical machinery feel much more natural.

* * *

**You:**

Got it. The likelihood value is a score, and we can use whatever arbitrary scale we want. Using log makes sense when we are talking large numbers.

* * *

**ChatGPT:**

Exactly. And there's one more connection that I think you'll appreciate.

You said:

> "Using log makes sense when we are talking large numbers."

That's true, but the **more important reason** is actually algebraic simplification.

Suppose you have 1,000 independent observations.

Without logs:

$$L(\theta)=\prod_{i=1}^{1000} P(x_i\mid\theta).$$

That's a product of 1,000 terms.

Take the logarithm:

$$\log L(\theta)  
=  
\sum_{i=1}^{1000}\log P(x_i\mid\theta).$$

The product becomes a sum.

This is one of the most useful identities in applied mathematics.

For our marble example,

$$L(\theta)=\theta^4(1-\theta)$$

becomes

$$\log L(\theta)  
=  
4\log\theta+\log(1-\theta).$$

Notice what happened:

* the exponent became a coefficient,
* multiplication disappeared,
* differentiation became almost trivial.

Later, when we compute the derivative, it will look like

$$\frac{d}{d\theta}\log L(\theta)  
=  
\frac{4}{\theta}  
-  
\frac{1}{1-\theta},$$

instead of differentiating products of powers.

This is why essentially every machine learning textbook switches to the **log-likelihood** almost immediately.

---

The numerical stability is the second major benefit.

Imagine 10,000 observations where each probability is around 0.01.

The likelihood is roughly

$$(0.01)^{10000}  
=  
10^{-20000},$$

which is far smaller than a floating-point number can represent—it underflows to zero.

The log-likelihood is simply

$$10000\log(0.01)\approx -46052.$$

That's a perfectly ordinary floating-point number.

So the log solves **two** problems at once:

1. **Mathematics:** products become sums, exponents become coefficients.
2. **Computation:** tiny numbers become manageable numbers.

---

I think you're going to enjoy what comes next because it's one of those moments where two seemingly unrelated topics snap together.

We're going to derive the MLE for the Gaussian distribution, and at the end we'll discover that maximizing the log-likelihood is **exactly the same optimization problem as minimizing the sum of squared errors**.

In other words, all the least-squares geometry from Lessons 8–10 turns out to be a consequence of probabilistic reasoning. It's one of the nicest unifications in machine learning.