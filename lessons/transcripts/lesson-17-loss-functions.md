**You:**

I’m ready for lesson 17.

* * *

**ChatGPT:**

Excellent. Lesson 17 is where statistics starts feeling less like a collection of formulas and more like optimization.

So far we've learned:

* Linear algebra → represent data.
* Probability → describe uncertainty.
* Gaussian distributions → model noise.
* Maximum Likelihood Estimation (MLE) → fit model parameters.

Today we connect all of those ideas.

---

# Lesson 17 — From Likelihood to Loss Functions

## Goal

Understand why machine learning almost always talks about **loss functions** instead of **likelihoods**, and why minimizing a loss is the same as maximizing likelihood.

By the end of this lesson you'll understand where familiar losses like **Mean Squared Error (MSE)** come from.

---

# Part 1 — A reminder

Suppose we observe

$$D=\{x_1,\dots,x_n\}$$

and we have a model with parameters

$$\theta.$$

MLE says

$$\hat{\theta}  
=  
\arg\max_\theta  
P(D\mid\theta).$$

Instead of asking

> Which parameters make the data most probable?

we often ask

> Which parameters minimize some cost?

Those are actually the same question.

---

# Part 2 — Take the logarithm

We already learned that

$$\log(ab)=\log a+\log b.$$

For independent samples,

$$L(\theta)  
=  
\prod_i  
P(x_i\mid\theta).$$

Taking logs,

$$\ell(\theta)  
=  
\sum_i  
\log P(x_i\mid\theta).$$

This doesn't change where the maximum occurs because the logarithm is monotonic.

---

# Part 3 — Introduce the negative sign

Optimization libraries usually **minimize**.

Instead of maximizing

$$\ell(\theta),$$

we minimize

$$-\ell(\theta).$$

This is called the **negative log-likelihood (NLL).**

---

Think of it as changing

> Highest score wins.

into

> Lowest penalty wins.

Same optimum.

---

# Part 4 — Why every ML paper talks about "loss"

A loss is simply

$$\text{Loss}  
=  
-\log P(\text{data}\mid\theta).$$

Different probability models create different losses.

| Probability model | Loss produced |
| --- | --- |
| Gaussian | Mean Squared Error |
| Laplace | Absolute Error |
| Bernoulli | Cross Entropy |
| Poisson | Poisson Loss |

This is one of the central ideas in statistical machine learning.

You don't invent a loss.

You choose a probabilistic model.

The loss falls out automatically.

---

# Part 5 — The Gaussian example

Suppose

$$y_i=f_\theta(x_i)+\epsilon_i$$

where

$$\epsilon_i  
\sim  
N(0,\sigma^2).$$

That means

$$P(y_i\mid x_i,\theta)  
=  
\frac{1}{\sqrt{2\pi\sigma^2}}  
\exp\left(  
-\frac{(y_i-f_\theta(x_i))^2}  
{2\sigma^2}  
\right).$$

---

Take the logarithm.

Ignoring constants,

$$\log P  
=  
-\frac{(y_i-f_\theta(x_i))^2}  
{2\sigma^2}.$$

Sum over all observations,

$$\ell(\theta)  
=  
-\frac{1}{2\sigma^2}  
\sum_i  
(y_i-f_\theta(x_i))^2  
+\text{constant}.$$

Now negate it,

$$-\ell(\theta)  
=  
\frac{1}{2\sigma^2}  
\sum_i  
(y_i-f_\theta(x_i))^2  
+\text{constant}.$$

Notice something important.

Everything except

$$\sum_i  
(y_i-f_\theta(x_i))^2$$

is a constant with respect to $\theta$.

Therefore,

minimizing the negative log-likelihood is exactly the same as minimizing

$$\sum_i  
(y_i-f_\theta(x_i))^2.$$

That is the origin of **least squares**.

Least squares is not just an arbitrary objective—it is the maximum likelihood estimator under the assumption of Gaussian noise.

---

# Part 6 — Why we can ignore constants

Suppose

$$L(\theta)  
=  
x^2+17.$$

Where is the minimum?

At

$$x=0.$$

Now remove the 17.

Still

$$x=0.$$

Optimization only cares about quantities that change with the parameters.

Any constant disappears.

---

# Part 7 — A bigger picture

You've now seen a chain that appears throughout machine learning:

```
Choose probability distribution
          ↓
Likelihood
          ↓
Log-likelihood
          ↓
Negative log-likelihood
          ↓
Loss function
          ↓
Gradient descent
```

Almost every modern ML algorithm follows this pattern.

---

# Exercises

### 1.

Why do we usually maximize the **log-likelihood** instead of the likelihood?

---

### 2.

Why do we negate the log-likelihood?

---

### 3.

Suppose someone adds **+5000** to a loss function.

Will the optimal parameter values change?

Why or why not?

---

### 4.

Suppose we multiply a loss function by **100**.

Will the optimum change?

Will gradient descent behave exactly the same?

---

### 5.

In your own words, explain why least squares appears naturally when we assume Gaussian noise.

---

## Looking ahead

The next lesson is one of my favorites because it completes another important connection:

> **Maximum Likelihood → Cross-Entropy → Logistic Regression**

Up to now we've assumed outputs are continuous (like heights or temperatures). Next we'll move to binary outcomes ("yes/no", "spam/not spam", "cat/not cat") and derive the cross-entropy loss from first principles, just as we derived mean squared error today.

This is the point where many of the standard loss functions in machine learning stop looking like memorized recipes and start looking like inevitable consequences of probability.

* * *

**You:**

I need the symbols defined in part 5, please.

* * *

**ChatGPT:**

Good catch. As we've started deriving equations instead of just using them, it's worth being explicit about every symbol.

In Part 5 we wrote

$$y_i = f_\theta(x_i) + \epsilon_i$$

Here's what each symbol means:

| Symbol | Meaning |
| --- | --- |
| $i$ | Index of the observation (1st sample, 2nd sample, etc.) |
| $x_i$ | The input (features) for the $i$-th observation. |
| $y_i$ | The observed output (target value) for the $i$-th observation. |
| $f_\theta$ | Our model—a function that maps inputs to predictions. |
| $f_\theta(x_i)$ | The model's prediction for input $x_i$. |
| $\theta$ | All of the model's parameters (weights, coefficients, biases, etc.). |
| $\epsilon_i$ | The random error (or **noise**) for the $i$-th observation. |

So the equation simply says:

> **Observed value = Model prediction + Random noise**

or

$$\text{data} = \text{signal} + \text{noise}.$$

---

We then assumed

$$\epsilon_i \sim N(0,\sigma^2).$$

This introduces a few more symbols:

| Symbol | Meaning |
| --- | --- |
| $\sim$ | "Is distributed as." |
| $N(\mu,\sigma^2)$ | A Gaussian (normal) distribution with mean $\mu$ and variance $\sigma^2$. |
| $0$ | The noise has zero mean, so it doesn't systematically bias predictions high or low. |
| $\sigma$ | The standard deviation of the noise. |
| $\sigma^2$ | The variance of the noise. |

This assumption means:

> Each prediction error is a random draw from a bell curve centered at zero.

Most errors are small, while large errors become increasingly unlikely.

---

Finally, we wrote

$$P(y_i \mid x_i,\theta).$$

This is read as:

> "The probability density of observing $y_i$, given the input $x_i$ and the model parameters $\theta$."

Breaking it apart:

* $P(\cdot)$: probability (or, for continuous variables, probability density)
* $y_i$: the observed output
* "$\mid$": "given"
* $x_i$: the known input
* $\theta$: the current model parameters

In other words:

> "If my model has parameters $\theta$, how plausible is it that I would observe this particular output $y_i$ for this input $x_i$?"

---

I think it's worth adding one more notation convention to our "vocabulary" going forward:

* **Data**: $(x_i, y_i)$ is one training example.
* **Model**: $f_\theta$ is a function parameterized by $\theta$.
* **Prediction**: $\hat{y}_i = f_\theta(x_i)$, where the hat (called a **hat** or **circumflex**) means "estimated" or "predicted."

That lets us rewrite the model as

$$y_i = \hat{y}_i + \epsilon_i,$$

which many texts find a little easier to read. We'll use $\hat{y}$ frequently in future lessons.

* * *

**You:**

Where does the probability density function for a Gaussian distribution come from? You said it’s because the error is a normal distribution centered on zero, and a variance of ro^2, but I don’t remember that function. Did we already talk about it before?

* * *

**ChatGPT:**

Excellent question. And the answer is: **we never actually introduced the Gaussian probability density function.** We talked about Gaussian distributions conceptually in Lesson 15, but I intentionally skipped the formula because it wasn't important yet. Now it is.

This is one of those places where it's worth slowing down.

## Where does this formula come from?

The probability density function (PDF) of a Gaussian random variable is

$$p(x)=  
\frac{1}{\sqrt{2\pi\sigma^2}}  
\exp\!\left(  
-\frac{(x-\mu)^2}{2\sigma^2}  
\right).$$

Let's decode it before worrying about where it came from.

### The exponent

$$-\frac{(x-\mu)^2}{2\sigma^2}$$

This measures **how far $x$ is from the mean**.

* $x-\mu$ is the error from the center.
* Squaring makes positive and negative deviations equally important.
* Dividing by $\sigma^2$ scales the distance relative to the spread of the distribution.
* The negative sign makes the function shrink as you move away from the center.

So this term says:

> "Points farther from the mean become exponentially less likely."

---

### The exponential

$$e^{-z}$$

The exponential function is special because it decreases smoothly and never becomes negative.

If $z$ grows,

$$e^{-z}$$

drops very quickly:

| $z$ | $e^{-z}$ |
| --- | --- |
| 0 | 1.000 |
| 1 | 0.368 |
| 2 | 0.135 |
| 3 | 0.050 |
| 4 | 0.018 |

So once the squared distance gets large, the probability density becomes tiny.

---

### The constant

$$\frac{1}{\sqrt{2\pi\sigma^2}}$$

This doesn't change the shape.

It simply rescales the curve so that the total area underneath it is exactly 1, as every probability density must satisfy:

$$\int_{-\infty}^{\infty} p(x)\,dx = 1.$$

Without this normalization constant, the curve would have the right shape but wouldn't represent a valid probability distribution.

---

## Why did we replace $x$ with $y_i$?

In Lesson 17 we assumed

$$y_i=f_\theta(x_i)+\epsilon_i,$$

where

$$\epsilon_i\sim N(0,\sigma^2).$$

Since

$$\epsilon_i = y_i-f_\theta(x_i),$$

we substitute the error into the Gaussian PDF.

The mean of the error is $0$, so $\mu=0$:

$$p(\epsilon_i)  
=  
\frac{1}{\sqrt{2\pi\sigma^2}}  
\exp\!\left(  
-\frac{\epsilon_i^2}{2\sigma^2}  
\right).$$

Replacing $\epsilon_i$ with $y_i-f_\theta(x_i)$ gives

$$P(y_i\mid x_i,\theta)  
=  
\frac{1}{\sqrt{2\pi\sigma^2}}  
\exp\!\left(  
-\frac{(y_i-f_\theta(x_i))^2}  
{2\sigma^2}  
\right),$$

which is exactly the expression we used in the derivation.

---

## But where did the Gaussian PDF originally come from?

That's a deeper question.

Historically, mathematicians such as Abraham de Moivre and Carl Friedrich Gauss discovered it while studying repeated measurements and errors. Mathematically, it also emerges naturally from the Central Limit Theorem: sums of many small independent random effects tend toward a Gaussian distribution.

The specific formula can be **derived**, but the derivation uses calculus (evaluating a famous Gaussian integral) and properties of the exponential function. It isn't something people usually memorize from first principles.

I think it's worth dedicating an entire lesson to the Gaussian PDF itself—why its shape is exponential, where the normalization constant comes from, and why it appears everywhere in nature and machine learning. That lesson would fit nicely after we've finished maximum likelihood, because by then you'll have a strong reason to care about the formula rather than just accepting it.

* * *

**You:**

Lesson 17 .pdfPDF

* * *

**ChatGPT:**

Overall, I think this is your strongest lesson yet. You're no longer just recalling definitions—you are reasoning from the concepts we've built over the last 16 lessons.

Here's my feedback.

---

## 1. Why maximize the log-likelihood?

**Your answer:** ✔ Correct.

I especially liked this:

> "log is an almost magical function..."

It really is. The three transformations you listed are exactly why it's so useful:

* exponentiation → multiplication
* multiplication → addition
* addition → constants

That last point is subtle but important. It lets us ignore constant terms when optimizing.

**Score:** 10/10

---

## 2. Why negate the log-likelihood?

This answer mixes together a few ideas.

You correctly remembered that likelihoods are usually tiny, and that taking logs makes them numerically manageable.

However, **that's not why we negate them.**

The negative sign is almost entirely a matter of convenience.

We could maximize

$$\ell(\theta)$$

or minimize

$$-\ell(\theta).$$

Those are mathematically identical.

The reason nearly everyone minimizes is because optimization software is generally written to minimize objective functions.

You also mentioned unsigned integers and avoiding a sign bit. That's a clever engineering thought, but it isn't the motivation here. In practice we use floating-point numbers anyway, so the sign isn't a concern.

**Score:** 6/10

You understood the role of the logarithm, but attributed that motivation to the negation.

---

## 3. Add 5000 to the loss

Perfect.

The optimum doesn't move.

I like your phrase:

> "They'll just be shifted."

Exactly.

**Score:** 10/10

---

## 4. Multiply the loss by 100

This one has one important mistake.

You correctly said:

> the optimum doesn't change.

Correct.

But then you wrote:

> Gradient descent should be unaffected.

This is the part I wanted you to notice.

If

$$L' = 100L,$$

then

$$\nabla L' = 100\nabla L.$$

Every gradient becomes 100× larger.

So gradient descent would take 100× larger steps **unless** you also divided the learning rate by 100.

The landscape has the same shape, but it's been stretched vertically.

Your drawing is actually very good—it captures that the minimum stays in the same place. The only missing piece is that the slope is now much steeper.

**Score:** 8/10

---

## 5. Why least squares?

This is the answer that impressed me most.

You weren't trying to memorize the derivation—you were connecting it to previous lessons.

You naturally brought in

* residuals
* variance
* covariance
* covariance matrices

That's exactly what I hoped would happen after Lessons 12–15.

The only thing missing is the final bridge:

> Because the Gaussian probability density contains

$$\exp\!\left(  
-\frac{\epsilon^2}{2\sigma^2}  
\right),$$

taking the log turns the exponential into

$$-\frac{\epsilon^2}{2\sigma^2},$$

and the only parameter-dependent term left is the sum of squared residuals.

That's the one algebraic step that actually produces least squares.

Everything you wrote is excellent context for why that result makes sense.

**Score:** 9/10

---

# Overall

| Question | Score |
| --- | --- |
| 1 | 10 |
| 2 | 6 |
| 3 | 10 |
| 4 | 8 |
| 5 | 9 |

**Overall: 8.6/10**

But here's what I find more interesting than the score.

A few lessons ago, your answers were mostly localized to the current topic. In this lesson, you repeatedly reached back to covariance, linear algebra, and changes of reference frame to explain what was happening. That's a sign that the material is becoming integrated rather than isolated facts.

One thing I'd like to add to your Learning Journal after this lesson is:

> **New insight:** "Many ML loss functions are not arbitrary design choices. They are the negative log-likelihoods implied by probabilistic assumptions about the data."

I think that's the central idea of Lesson 17, and it's one you'll see repeatedly as we move into logistic regression, neural networks, and Bayesian methods.