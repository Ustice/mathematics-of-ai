**You:**

I’m ready for lesson 18

* * *

**ChatGPT:**

Excellent. Lesson 18 is where several threads we've been building finally come together.

So far we've learned:

1. Linear algebra (vectors, matrices, eigenvectors, SVD, PCA)
2. Probability (expectation, covariance, Gaussian distributions)
3. Estimation (MLE)
4. Loss functions

The next step is:

# Lesson 18 — Maximum A Posteriori (MAP) Estimation

**Goal:** Understand how prior knowledge changes parameter estimation.

---

# Part 1 — The Problem with MLE

Recall that MLE chooses

$$\hat{\theta}_{MLE}  
=  
\arg\max_\theta  
P(D|\theta)$$

where

* $D$ = observed data
* $\theta$ = model parameters

MLE asks

> "Which parameter makes this data most likely?"

Notice something missing.

It doesn't care whether that parameter is itself reasonable.

Imagine fitting a line to only two noisy points.

MLE might decide

$$w = 500$$

because that perfectly explains those two observations.

But your intuition says

> "A slope of 500 is ridiculous."

MLE has no way to express that intuition.

---

# Part 2 — Bayesian Thinking

Instead of asking

$$P(D|\theta)$$

Bayes asks

> "What is the probability of the parameter after seeing the data?"

That is

$$P(\theta|D)$$

called the **posterior**.

Bayes' theorem says

$$P(\theta|D)  
=  
\frac{  
P(D|\theta)  
P(\theta)  
}  
{  
P(D)  
}$$

Let's identify every piece.

### Likelihood

$$P(D|\theta)$$

How well the parameter explains the data.

---

### Prior

$$P(\theta)$$

How plausible we thought the parameter was before seeing data.

---

### Posterior

$$P(\theta|D)$$

Our updated belief after seeing the data.

---

### Evidence

$$P(D)$$

A normalization constant ensuring probabilities sum (or integrate) to 1.

For optimization, it doesn't depend on $\theta$, so we can ignore it.

---

# Part 3 — MAP Estimation

Instead of maximizing likelihood,

maximize the posterior.

$$\hat{\theta}_{MAP}  
=  
\arg\max_\theta  
P(\theta|D)$$

Using Bayes

$$=  
\arg\max_\theta  
P(D|\theta)  
P(\theta)$$

since $P(D)$ is constant.

This is the fundamental MAP equation.

---

# Part 4 — Logs Again

Take the logarithm.

$$\log P(D|\theta)  
+  
\log P(\theta)$$

Instead of optimizing one term,

we optimize two.

One rewards fitting the data.

One rewards reasonable parameters.

---

# Part 5 — A Gaussian Prior

Suppose we believe weights should usually be close to zero.

Model that belief as

$$\theta  
\sim  
\mathcal N(0,\tau^2)$$

where

* mean = 0
* variance = $\tau^2$

The density is

$$P(\theta)  
=  
\frac{1}  
{\sqrt{2\pi\tau^2}}  
\exp  
\left(  
-\frac{\theta^2}{2\tau^2}  
\right)$$

Take the log.

Ignoring constants,

$$\log P(\theta)  
=  
-  
\frac{\theta^2}{2\tau^2}$$

Interesting!

The prior contributes

$$-\theta^2$$

to the objective.

Large parameters become less likely.

---

# Part 6 — What Does MAP Optimize?

Suppose our likelihood came from Gaussian noise.

From the last lesson,

negative log likelihood became

$$\frac1{2\sigma^2}  
\sum_i  
(y_i-f_\theta(x_i))^2$$

Now subtract the log prior.

The optimization becomes

$$\frac1{2\sigma^2}  
\sum_i  
(y_i-f_\theta(x_i))^2  
+  
\frac1{2\tau^2}  
\theta^2$$

Look familiar?

It should.

This is exactly

**Mean Squared Error + L2 penalty.**

---

# Part 7 — The Surprise

Machine learning textbooks often introduce

"L2 Regularization"

as though it's simply a trick to reduce overfitting.

But mathematically,

L2 regularization is the negative log of a Gaussian prior.

That means

> Regularization is Bayesian reasoning.

Not a heuristic.

Not a hack.

A probabilistic assumption.

---

# Part 8 — Visual Intuition

Imagine the loss landscape as a valley.

MLE looks only at how well the data fit:

```
      *
     /
    /
___/________
```

MAP adds a gentle pull toward the origin:

```
       *
      /
 \   /
  \_/
```

The best solution shifts slightly toward smaller parameter values because very large weights were considered unlikely before seeing the data.

---

# Part 9 — Connection to Earlier Lessons

This lesson ties together several ideas we've developed:

* **Lesson 12–15 (Covariance and Gaussians):** The Gaussian distribution now appears as a _prior_ over parameters, not just as a model of data.
* **Lesson 16 (MLE):** MAP extends MLE by incorporating prior beliefs through Bayes' theorem.
* **Lesson 17 (Loss Functions):** A Gaussian likelihood gave us MSE; adding a Gaussian prior gives us **MSE + L2 regularization**.

One recurring pattern is worth noticing:

> **Negative log probabilities become optimization objectives.**

You've now seen this happen twice:

* Likelihood → loss function
* Prior → regularization term

This pattern will appear again in probabilistic graphical models, variational inference, and deep learning.

---

# Exercises

### **1. Conceptual**

In one sentence, describe the difference between MLE and MAP.

---

### **2. Prior intuition**

Suppose your prior is

$$\theta \sim \mathcal N(0,1)$$

Which parameter is considered more plausible _before_ seeing any data?

* $$0.2$$
* $$8$$

Why?

---

### **3. Reasoning**

Suppose you have only **three** training examples.

Would MAP usually differ from MLE more or less than if you had **three million** examples?

Explain your intuition.

---

### **4. Connection**

Why does a Gaussian prior produce an L2 penalty instead of an L1 penalty?

(No derivation needed—just think about the shape of the Gaussian log density.)

---

### **5. Looking ahead**

Suppose instead of a Gaussian prior, you chose a distribution with much sharper peak at zero and heavier tails, such as a Laplace distribution.

Without worrying about formulas, what kind of model behavior do you think that prior would encourage compared to the Gaussian prior?

---

Take your time with these. I'm especially interested in your intuition for exercises 3 and 5—those are the ideas that become central when we get to regularization, sparse models, and modern machine learning.

* * *

**You:**

Have we discussed the L2 penalty before?

* * *

**ChatGPT:**

Briefly, but not in detail.

We have implicitly built up to it:

* **Lesson 17** derived the **Mean Squared Error (MSE)** loss from a Gaussian likelihood.
* In **Lesson 18**, we added a Gaussian prior, and that naturally produced the extra term: $$\lambda \|\theta\|^2$$ where $\lambda$ is some positive constant that absorbs factors like $\frac{1}{2\tau^2}$.

This is the **L2 penalty**, also called **L2 regularization** or **weight decay** (although "weight decay" is implemented slightly differently by some optimizers).

For a parameter vector

$$\theta =  
\begin{bmatrix}  
\theta_1\\  
\theta_2\\  
\vdots\\  
\theta_n  
\end{bmatrix},$$

the squared L2 norm is

$$\|\theta\|^2  
=  
\theta_1^2+\theta_2^2+\cdots+\theta_n^2.$$

So the complete loss becomes

$$\text{Loss}  
=  
\text{MSE}  
+  
\lambda\|\theta\|^2.$$

The effect is simple:

* Small weights add very little to the penalty.
* Large weights become increasingly expensive because the penalty grows quadratically.

This encourages the model to explain the data with **smaller, simpler parameters** unless larger weights produce a substantial improvement in fit.

---

One thing I intentionally postponed until now is **why** smaller weights tend to generalize better. Up to this point we've only shown that the mathematics of Bayesian inference produces an L2 penalty. In the next few lessons, we'll connect that to overfitting, bias–variance tradeoffs, and model complexity, so the statistical intuition catches up with the math.

* * *

**You:**

And the L1?

* * *

**ChatGPT:**

Good question. We haven't discussed **L1 regularization** yet, but now is a great time because it contrasts nicely with L2.

Suppose we have a parameter vector

$$\theta =  
\begin{bmatrix}  
\theta_1\\  
\theta_2\\  
\vdots\\  
\theta_n  
\end{bmatrix}.$$

Then:

### L2 penalty

$$\|\theta\|_2^2  
=  
\sum_i \theta_i^2$$

The loss becomes

$$\text{Loss}  
=  
\text{MSE}  
+  
\lambda  
\sum_i \theta_i^2.$$

Large weights are penalized much more heavily than small ones because of the square.

---

### L1 penalty

Instead of squaring the parameters, we take their absolute values:

$$\|\theta\|_1  
=  
\sum_i |\theta_i|.$$

The loss becomes

$$\text{Loss}  
=  
\text{MSE}  
+  
\lambda  
\sum_i |\theta_i|.$$

Now the penalty grows linearly rather than quadratically.

---

## The geometric intuition

Imagine just two parameters, $\theta_1$ and $\theta_2$.

The contours of equal penalty look different:

* **L2**: $$\theta_1^2 + \theta_2^2 = c$$ Circles (or spheres in higher dimensions).
* **L1**: $$|\theta_1| + |\theta_2| = c$$ Diamonds (or octahedra in higher dimensions).

Those sharp corners on the L1 diamond turn out to matter a lot during optimization.

---

## The practical difference

Suppose your model learns these weights.

Without regularization:

| Weight | Value |
| --- | --- |
| $w_1$ | 4.8 |
| $w_2$ | -2.1 |
| $w_3$ | 0.9 |
| $w_4$ | 0.2 |
| $w_5$ | -0.1 |

### L2 tends to produce

| Weight | Value |
| --- | --- |
| 3.9 |  |
| -1.8 |  |
| 0.7 |  |
| 0.15 |  |
| -0.08 |  |

Everything gets pulled toward zero, but rarely reaches exactly zero.

---

### L1 tends to produce

| Weight | Value |
| --- | --- |
| 4.2 |  |
| -1.9 |  |
| 0 |  |
| 0 |  |
| 0 |  |

Many weights become **exactly zero**.

This is called **sparsity**.

---

## Why?

The reason is partly geometric and partly analytical.

The derivative of the L2 penalty is

$$\frac{d}{d\theta}\theta^2  
=  
2\theta.$$

As $\theta$ gets close to zero, the gradient also gets close to zero, so the "pull" toward zero weakens.

For L1,

$$\frac{d}{d\theta}|\theta|  
=  
\begin{cases}  
1 & \theta>0\\  
-1 & \theta<0  
\end{cases}$$

(It's not differentiable exactly at zero.)

Away from zero, the magnitude of the gradient stays constant. That persistent pull tends to drive small coefficients all the way to zero.

---

## The Bayesian interpretation

This is the connection to today's lesson.

* A **Gaussian prior** on the parameters gives rise to an **L2 penalty**.
* A **Laplace prior** (also called a double exponential distribution) gives rise to an **L1 penalty**.

So regularization isn't just an optimization trick—it reflects assumptions about what parameter values are likely _before_ seeing the data.

---

You'll appreciate this even more after we study optimization. There, we'll see how the geometry of the loss function interacts with algorithms like gradient descent. That's where the sparse behavior of L1 becomes almost inevitable once you see the shape of the optimization landscape.

* * *

**You:**

What is the L in the name? It’ll help me remember the term.

* * *

**ChatGPT:**

The **L** stands for **Lebesgue**.

More specifically, **L1** and **L2** refer to members of the family of **$L^p$ spaces**, named after the mathematician Henri Lebesgue.

The corresponding **$L^p$ norm** is

$$\|x\|_p  
=  
\left(  
\sum_i |x_i|^p  
\right)^{1/p}.$$

Different values of $p$ give different notions of "size."

For example:

* **L1 norm** $$\|x\|_1  
    =  
    \sum_i |x_i|$$ Sum of absolute values.
* **L2 norm** $$\|x\|_2  
    =  
    \sqrt{\sum_i x_i^2}$$ The ordinary Euclidean length of a vector.
* **L∞ norm** $$\|x\|_\infty  
    =  
    \max_i |x_i|$$ The largest absolute component.

---

One small detail that often confuses people:

In machine learning, when people say **"L2 regularization,"** they almost always mean

$$\lambda \|w\|_2^2  
=  
\lambda \sum_i w_i^2,$$

which is the **square of the L2 norm**, not the norm itself.

Why use the square?

* It avoids the square root.
* It's differentiable everywhere.
* It produces a simple gradient: $$\nabla \|w\|_2^2 = 2w.$$

So the terminology is a little sloppy: we call it "L2 regularization" even though the penalty is technically the **squared L2 norm**.

As someone with your background, you can think of the $L^p$ norms as different **metrics** on the same vector space. They all measure "size," but they induce different geometries, and those different geometries are exactly why L1 encourages sparsity while L2 encourages small-but-nonzero weights.

* * *

**You:**

Lesson 18.pdfPDF

* * *

**ChatGPT:**

First, your reaction to Question 1 made me laugh.

> "Dude... Seriously, ONE sentence?"

Yes. 😄 That was deliberate. One-sentence definitions are a good test of whether you've distilled the essence of an idea. And your sentence is actually pretty good.

I'd tighten it just a little:

> **MLE chooses the parameter that best explains the data, while MAP chooses the parameter that best explains the data after incorporating prior beliefs.**

Or, more mathematically:

> **MLE maximizes the likelihood; MAP maximizes the posterior.**

Your version ("MLE is the special case when your priors don't apply") is essentially correct, though I'd phrase it as _"when the prior is uniform (or ignored)."_

---

## 2. Prior intuition

Excellent.

You correctly identified **0.2** as more plausible.

I especially liked this sentence:

> "Our beliefs tend toward zero without evidence to the contrary."

That's exactly the right intuition.

The only subtle correction is that the prior isn't saying **zero is true**. It's saying:

> _Before seeing evidence, smaller parameter values are more probable than larger ones._

This is a weak preference, not an assumption of truth.

---

## 3. Three examples vs. three million

This is the one place where your intuition flipped.

You wrote that MAP would differ **more** from MLE after **3 million** examples because we'd have accumulated more evidence.

That sounds reasonable at first, but notice something:

The **prior doesn't accumulate evidence.**

The **data** accumulates evidence.

Bayes is

$$P(\theta\mid D)  
\propto  
P(D\mid\theta)\,P(\theta).$$

As $D$ gets larger, the likelihood term $P(D\mid\theta)$ becomes increasingly sharp, while the prior stays the same. Eventually the data overwhelms the prior.

So:

* **3 examples:** prior matters a lot → MAP and MLE may differ substantially.
* **3 million examples:** data dominates → MAP and MLE become nearly identical.

Your die example is actually a good analogy, but it points in the opposite direction:

After three rolls, a skeptical prior ("it's probably a fair die") has a noticeable effect.

After three million rolls, the observed frequencies dominate your prior almost completely.

A common saying in Bayesian statistics is:

> **The prior washes out as the sample size grows.**

---

## 4. Gaussian prior → L2

This answer shows you're connecting ideas across lessons, which is great.

You tied together:

* Euclidean geometry
* spherical Gaussians
* covariance
* whitening

Those are exactly the connections I hoped you'd make.

The one part I'd change is this sentence:

> "Bayes Theorem says that if a credence is zero, it can never rise..."

That's true in general Bayesian reasoning, but it isn't the reason a Gaussian prior gives L2 regularization.

The direct reason is much simpler:

The Gaussian density contains

$$e^{-x^2}.$$

Taking the logarithm gives

$$-x^2,$$

which becomes an L2 penalty.

That's the entire derivation.

The geometry explains **why** Gaussians look the way they do, but the algebra explains why the penalty is quadratic.

---

## 5. Laplace prior

This one is close, but I'd nudge the intuition in a different direction.

The key features of a Laplace prior are:

* **Sharper peak at zero** → it has a stronger preference for parameters being exactly or very close to zero.
* **Heavier tails** → if a parameter really needs to be large to explain the data, the prior is more willing to "accept" that than a Gaussian prior would.

So compared to a Gaussian prior, a Laplace prior encourages models with:

* many coefficients exactly zero,
* a few coefficients that can remain fairly large.

That's why L1 regularization is so useful for **feature selection**. The model naturally decides that many features contribute nothing at all.

---

# Overall

Another strong lesson.

Here's what I'm seeing in your progression:

* You're no longer treating probability and linear algebra as separate subjects.
* You're using geometric intuition naturally.
* You're recognizing recurring abstractions (covariance, norms, metrics, Bayesian updating) across different domains.

The only consistent pattern I'd like to keep improving is distinguishing between:

1. **The algebraic reason** something is true (e.g., $\log e^{-x^2} = -x^2$), and
2. **The conceptual reason** it makes sense (e.g., spherical symmetry, Euclidean distance, simpler models).

You're very good at building conceptual models. The next step is to consciously ask, _"What is the minimal mathematical fact that forces this result?"_ That habit will make reading ML papers much easier, because papers often omit the intuition and present only the algebra.

**Grade:** **A−**

The only deduction is for Question 3, where the role of the prior versus accumulated evidence got reversed. Everything else demonstrates that the core ideas have landed. I think you're ready for Lesson 19, where we'll start looking at optimization algorithms and how these loss functions are actually minimized.