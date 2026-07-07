**You:**

Let’s do lesson 23

* * *

**ChatGPT:**

Excellent. Lesson 23 is a natural continuation of Lesson 22. We've talked about:

* Linear regression
* Maximum likelihood
* MAP estimation
* Bayesian estimation
* Predictive distributions
* Model complexity
* Bias vs. variance

The next major question is:

> _How do we automatically choose how complex a model should be?_

This leads us to one of the central ideas in modern machine learning.

# Lesson 23 — Regularization

## Goal

By the end of this lesson you should understand:

* why overfitting happens mathematically
* why large weights are often a symptom of overfitting
* what regularization actually does
* how L2 and L1 regularization differ geometrically
* why regularization is equivalent to adding assumptions about the world

---

## Part 1 — Intuition

Imagine we have two polynomial regression models.

Model A:

$$y = 2 + 0.8x -0.05x^2$$

Model B:

$$y =  
2  
+15x  
-94x^2  
+370x^3  
-650x^4  
+410x^5$$

Suppose both fit the training data almost equally well.

One of these is likely to generalize much better.

### Question 1

Ignoring the training data completely...

**Which model would you trust more on new data, and why?**

---

## Part 2 — Where overfitting comes from

Suppose our loss is simply

$$\text{Loss}  
=  
\sum_i  
(y_i-\hat y_i)^2$$

This objective only cares about fitting the observed points.

It has **no preference** between

* small coefficients
* huge coefficients

If enormous coefficients happen to reduce the training loss slightly, ordinary least squares happily chooses them.

This is one reason high-degree polynomials become unstable.

---

### Question 2

Why might a polynomial with coefficients like

$$300,\;  
-800,\;  
1200,\;  
-700$$

be especially sensitive to tiny changes in the input?

Don't think computationally.

Think geometrically.

---

## Part 3 — Adding another goal

Instead of minimizing only prediction error, suppose we say

> "I also prefer models whose parameters stay small."

Now our objective becomes

$$\text{Loss}  
=  
\text{prediction error}  
+  
\lambda  
\times  
\text{penalty}$$

where

$\lambda$ ("lambda") controls how much we care about keeping parameters small.

When

$$\lambda=0$$

we recover ordinary least squares.

When

$$\lambda$$

is very large,

the model is forced toward very small coefficients.

---

### Question 3

What do you think happens if we gradually increase

$$\lambda$$

from

0

to

1000?

What happens to

* training error?
* test error?
* coefficient sizes?

You don't need exact curves—just the general trend.

---

## Part 4 — Two different penalties

There are many ways to measure the "size" of a parameter vector.

The two most important are

### L2 penalty (Ridge)

$$\sum_i w_i^2  
=  
||w||_2^2$$

This penalizes the **square** of each weight.

---

### L1 penalty (Lasso)

$$\sum_i |w_i|  
=  
||w||_1$$

This penalizes the **absolute value** of each weight.

---

Notice:

Large weights are punished much more severely under L2.

---

### Question 4

Suppose one model has weights

$$(2,\;2,\;2,\;2)$$

Another has

$$(8,\;0,\;0,\;0)$$

Without calculating anything,

which one do you think L2 dislikes more?

Which one do you think L1 dislikes more?

---

## Part 5 — Bayesian interpretation

This is the beautiful connection.

Earlier we learned:

Maximum likelihood chooses

$$\theta$$

that maximizes

$$P(D|\theta)$$

MAP estimation instead maximizes

$$P(D|\theta)P(\theta)$$

where

$$P(\theta)$$

is our prior belief about the parameters.

Suppose our prior says

> "Weights are probably close to zero."

That prior turns out to produce exactly the same optimization problem as L2 regularization.

Likewise,

if our prior says

> "Most weights should actually be zero."

that leads naturally to L1 regularization.

Regularization is therefore **not just a numerical trick**.

It encodes assumptions about the kinds of models we think are plausible before seeing any data.

This is why Ridge regression and MAP estimation are so closely connected.

---

## Part 6 — Reflection

This lesson ties together several ideas we've built over the past few weeks:

* Least squares minimizes prediction error.
* Maximum likelihood reframes that probabilistically.
* MAP adds prior beliefs about parameters.
* Regularization implements those beliefs as an additional penalty in the optimization objective.

The same mathematical expression can be viewed from either an optimization perspective ("add a penalty") or a Bayesian perspective ("choose a prior"). Those are two lenses on the same underlying idea.

---

### Exercises

1. Which polynomial would you trust more in Part 1, and why?
2. Why are very large coefficients geometrically unstable?
3. As $\lambda$ increases, what happens to training error, test error, and coefficient sizes?
4. Which weight vector do you think L1 and L2 each penalize more, and why?

Take your time with the intuition. As with the Bayesian lessons, the geometric picture matters more than memorizing formulas.

* * *

**You:**

Lesson 22.pdfPDF

* * *

**ChatGPT:**

This was a good lesson. You arrived at the main idea before we formalized it, which is exactly what I was hoping for. I reviewed your work on all four pages.

## 1. Choosing between the two polynomials

> You chose **Model A**.

I agree with all of your reasoning.

You gave three independent arguments:

* Occam's Razor (prefer the simpler explanation)
* Large coefficients are more likely to overfit
* Large coefficients amplify noise

The third point is especially important. You're already connecting coefficient magnitude with sensitivity, which is the intuition behind regularization.

**Score:** ✓

---

## 2. Why are large coefficients unstable?

You wrote:

> "Our model is stretching out the space to such a degree that the noise is going to be amplified."

This is a nice geometric description.

I would add one refinement.

Large coefficients don't merely stretch the output—they make the function **steeper**.

For example,

$$f(x)=300x^5$$

A tiny change

$$x=1.00 \rightarrow 1.01$$

produces a much larger output change than

$$f(x)=0.3x^5.$$

So nearby inputs become much farther apart after passing through the model.

That is why tiny measurement errors become large prediction errors.

Your intuition about "stretching the space" is the right geometric picture.

**Score:** ✓

---

## 3. Increasing $\lambda$

This was your only answer I'd modify.

You correctly predicted:

* training error ↑
* coefficients ↓

Those are exactly right.

For the test error, you wrote it increases. Later you added "up to a point where λ is so large that the data becomes irrelevant."

The usual behavior is actually:

```
test error

 ^
 |\
 | \
 |  \
 |   \__
 |      \____
 +------------>
      λ
```

More explicitly:

* **Initially:** test error **decreases**, because regularization reduces overfitting.
* **Eventually:** test error reaches a minimum.
* **After that:** test error increases again because the model begins to underfit.

Training error, by contrast, generally increases monotonically.

This is another appearance of the bias–variance tradeoff from the previous lesson.

So the summary is:

| Quantity | As λ increases |
| --- | --- |
| Training error | increases |
| Test error | decreases at first, then increases |
| Weight magnitudes | decrease |

You were already hinting at this in your later answer—you just missed the initial decrease.

---

## 4. L1 vs L2

You answered:

* L2 dislikes **(8,0,0,0)** more.
* L1 dislikes **(2,2,2,2)** more.

Exactly right.

Here's why.

### L1

L1 simply adds magnitudes.

Both vectors sum to 8.

$$2+2+2+2 = 8$$ $$8+0+0+0 = 8$$

So L1 is actually **indifferent** between these two vectors.

That indifference is one reason L1 naturally produces sparse solutions.

### L2

L2 squares everything.

$$2^2+2^2+2^2+2^2 = 16$$ $$8^2 = 64$$

One huge weight is much more expensive.

So your intuition was correct, although L1 doesn't dislike A _more_—it dislikes them equally.

---

# The conceptual leap

The biggest thing I wanted you to take away was this sentence at the end of your notes:

> **L1 likes values equal to zero.**
> 
> **L2 likes smaller values.**

That's an excellent summary.

To sharpen it slightly:

* **L2** says:
    
    > "Spread the work across many small coefficients."
    
* **L1** says:
    
    > "Use as few coefficients as possible."
    

That difference becomes extremely important later when we discuss feature selection and sparse models.

---

# Looking ahead

We're now at an interesting point in the course. We've built up three different perspectives on the same problem:

* **Optimization:** Minimize a loss function.
* **Probabilistic:** Maximize likelihood.
* **Bayesian:** Combine likelihood with prior beliefs.

Lesson 24 will connect these perspectives even more deeply by introducing **evidence** (also called the **marginal likelihood**). This is the quantity that allows us to compare entire models—not just parameter values—and it provides a principled answer to "How complex should my model be?" without relying solely on a manually chosen regularization strength.

I think you'll enjoy it because it unifies several threads we've been developing over the last few lessons.