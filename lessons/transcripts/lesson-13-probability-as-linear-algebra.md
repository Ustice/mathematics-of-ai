**You:**

I’m ready for my next lesson.

* * *

**ChatGPT:**

Excellent. Based on our curriculum, you've now covered:

1. Vectors
2. Matrices as transformations
3. Matrix multiplication
4. Determinants
5. Inverse matrices
6. Eigenvectors and eigenvalues
7. Change of basis
8. Orthogonal projection
9. Least squares
10. Singular Value Decomposition (SVD)
11. Principal Component Analysis (PCA)
12. Covariance

Today we'll connect covariance to probability. This is the last major piece of mathematics you need before we begin optimization and machine learning algorithms.

# Lesson 13: Probability as Linear Algebra

## Goal

By the end of this lesson, you should understand:

* Random variables as functions
* Expectation as a weighted average
* Variance as squared distance
* Covariance as an inner product
* Why PCA is fundamentally about maximizing variance

You'll notice a theme: **statistics is mostly linear algebra with probabilities attached.**

---

# Part 1: Random variables

A random variable isn't "a random number."

It's a function that assigns a number to each possible outcome.

Example:

Roll a die.

Possible outcomes:

$$\Omega=\{1,2,3,4,5,6\}$$

Our random variable

$$X(\omega)=\omega$$

just returns the face value.

---

Suppose instead we define

$$Y=  
\begin{cases}  
0 & \text{if even}\\  
1 & \text{if odd}  
\end{cases}$$

Now the same die produces

| Roll | Y |
| --- | --- |
| 1 | 1 |
| 2 | 0 |
| 3 | 1 |
| 4 | 0 |
| 5 | 1 |
| 6 | 0 |

The random variable is the mapping—not the outcome.

---

# Part 2: Expectation

Expectation is simply the weighted average.

For discrete variables,

$$E[X]  
=  
\sum_i x_iP(x_i)$$

For a fair die,

$$E[X]  
=  
\frac16(1+2+3+4+5+6)  
=  
3.5$$

Notice:

3.5 never appears on the die.

The expectation is the **center of mass** of the distribution.

That geometric interpretation becomes extremely important.

---

# Part 3: Centering

Earlier we centered datasets by subtracting the mean.

Exactly the same idea appears here.

Define

$$\tilde X  
=  
X-E[X]$$

Now

$$E[\tilde X]=0$$

Everything is measured relative to its average.

---

# Part 4: Variance

Variance measures average squared distance from the mean.

$$Var(X)  
=  
E[(X-E[X])^2]$$

Think geometrically.

If the data lies close to the mean,

variance is small.

If it spreads far away,

variance is large.

This is literally the squared length of the centered data.

---

# Part 5: Covariance

Now suppose we have two variables.

Example:

Height

Weight

We compute

$$Cov(X,Y)  
=  
E[(X-\mu_X)(Y-\mu_Y)]$$

Notice something interesting.

Compare this with the dot product:

$$a\cdot b  
=  
\sum_i a_ib_i$$

They're almost identical.

Covariance is just

> a weighted dot product of centered variables.

This is why covariance matrices are symmetric.

This is why PCA uses eigenvectors.

This is why principal components are orthogonal.

They're all consequences of inner products.

---

# Part 6: Covariance matrices revisited

If we have

$$X=  
\begin{bmatrix}  
X_1\\  
X_2\\  
X_3  
\end{bmatrix}$$

then

$$\Sigma  
=  
E[(X-\mu)(X-\mu)^T]$$

Compare that to something you've already seen:

$$AA^T$$

The covariance matrix is essentially

> "multiply centered data by its transpose, then average."

Everything we've learned about symmetric matrices now applies.

---

# Part 7: PCA revisited

Now PCA should look almost inevitable.

We compute

$$\Sigma$$

Find its eigenvectors.

Those eigenvectors are the directions in which the covariance acts like simple scaling.

The corresponding eigenvalues tell us

how much variance exists in each direction.

Large eigenvalue

→ lots of information

Small eigenvalue

→ little information

PCA simply rotates into the basis where the covariance matrix is diagonal.

That is exactly the same story you learned with eigendecomposition.

---

# The Big Picture

Notice how several concepts have merged:

* Dot product → similarity
* Projection → measuring along a direction
* Least squares → minimizing squared distance
* Covariance → dot product of centered variables
* Eigenvectors → natural directions
* PCA → rotate into the natural directions of covariance

Nothing fundamentally new was invented for statistics.

Statistics is reusing linear algebra in a probabilistic setting.

---

# Vocabulary

| Symbol | Meaning |
| --- | --- |
| $E[X]$ | Expectation (mean) |
| $\mu$ | Mean |
| $Var(X)$ | Variance |
| $Cov(X,Y)$ | Covariance |
| $\Sigma$ | Covariance matrix |
| Centering | Subtracting the mean |
| Distribution | Probabilities assigned to outcomes |
| Random variable | A function from outcomes to numbers |

---

# Exercises

**1.** Compute the expectation of a fair coin where Heads = 1 and Tails = 0.

---

**2.** A random variable takes values

$$1,\;3,\;5$$

with equal probability.

Compute:

* $$E[X]$$

---

**3.** Center the values from Exercise 2.

---

**4.** Compute the variance

$$Var(X)  
=  
E[(X-E[X])^2]$$

for Exercise 2.

---

**5. Conceptual question**

Suppose two variables always increase together.

Should their covariance be:

* positive
* negative
* zero

Explain why geometrically.

---

## A connection to your mathematical background

I think you'll appreciate this perspective given your comments about group theory and category theory.

The expectation operator $E[\cdot]$ behaves much like a linear map. It satisfies

$$E[aX+bY]  
=  
aE[X]+bE[Y].$$

That means expectation is not just "taking an average"—it's a **linear functional** from a vector space of random variables to $\mathbb{R}$.

From that viewpoint:

* A random variable is a vector.
* Expectation is a linear functional.
* Covariance is an inner product (after centering).
* Variance is the squared norm induced by that inner product.

This is one reason modern machine learning often feels like a seamless blend of linear algebra, probability, and functional analysis rather than three separate subjects.

Upload your work when you're finished, and then we'll discuss the solutions before moving on to optimization—the mathematical engine behind nearly all machine learning algorithms.

* * *

**You:**

Notation question: Why do we use square brackets for E of X like ‘E[X]‘? Also, what is X with the tilda above it called, and what do we call that tilda?

* * *

**ChatGPT:**

Those are both good questions. Notation often develops historically rather than systematically, so it's worth understanding where it comes from.

### Why $E[X]$ instead of $E(X)$?

The short answer is that **expectation is traditionally written with square brackets**, even though mathematically it's a function.

If we write

$$E : \mathcal{X} \to \mathbb{R},$$

then $E$ takes a random variable $X$ as input, so from a pure functional perspective,

$$E(X)$$

would be perfectly reasonable.

Instead, statisticians adopted

$$E[X].$$

There are a few reasons this convention stuck:

* It visually distinguishes expectation from an ordinary function evaluation.
* It resembles other "operators" that act on mathematical objects rather than simple numerical inputs.
* It makes nested expressions easier to read, for example: $$E[X^2],\qquad  
    E[X\mid Y],\qquad  
    E[f(X)].$$

You'll see the same convention with other operators:

* Probability: $$P(A)$$ (parentheses)
* Expectation: $$E[X]$$ (brackets)
* Variance: $$\operatorname{Var}(X)$$ (parentheses)

There isn't a deep mathematical reason—it's largely historical convention.

---

### What is $\tilde{X}$ called?

The symbol

$$\tilde{X}$$

is read

> **"X tilde."**

The mark itself,

$$\sim$$

is called a **tilde** (pronounced _TILL-duh_ in American English).

What it _means_ depends on context.

In our lesson,

$$\tilde{X}=X-E[X]$$

means the **centered random variable**.

So you could call it any of these:

* **X tilde**
* **the centered variable**
* **the mean-centered variable**
* **the centered version of $$X$$**

---

### The tilde is overloaded

One thing you've probably noticed in mathematics is that symbols get reused. The tilde is one of the worst offenders.

Depending on the field, it can mean:

| Notation | Meaning |
| --- | --- |
| $\tilde{x}$ | Modified or centered version of $x$ |
| $f \sim g$ | Asymptotically equivalent |
| $X \sim N(0,1)$ | "Distributed as" (follows a distribution) |
| $\tilde{A}$ | Approximation or estimate |
| $\tilde{v}$ | Normalized or transformed vector |

This is exactly the kind of notation reuse that frustrated you in group theory. Unfortunately, mathematicians rely heavily on context to disambiguate these meanings.

---

### A connection you might like

Since you've been thinking categorically, here's a useful mental model:

Rather than treating

$$\tilde{X}$$

as just another variable, think of the tilde as an **operator**:

$$\widetilde{(\cdot)} : X \mapsto X - E[X].$$

It's a transformation from the vector space of random variables to the subspace of random variables with mean zero.

In other words,

$$\widetilde{(\cdot)}$$

is doing exactly what we've been doing throughout linear algebra: applying a transformation to move vectors into a more useful space. Here, that useful space consists of all random variables whose expectation is zero.

I suspect you'll find this perspective useful over the next several lessons, because many operations in probability are easiest to understand as linear operators rather than isolated formulas.

* * *

**You:**

Yeah, I expected that since we are changing branches of mathematics that we’d have conflicting notation from what I have seen. I wanted to make sure that I understood how statisticians use symbols. 

Parentheses, brackets, and braces are all feeling sort of unnecessary now for any kind of function application. It’s functions all the way down at this point.

* * *

**ChatGPT:**

I had exactly that thought the first time I learned category theory.

From a category-theoretic viewpoint, almost everything we've encountered can be viewed as morphisms:

* A matrix $A$ is a linear map.
* $E$ is a linear functional.
* $\operatorname{Cov}$ is a bilinear map.
* The dot product is a bilinear map.
* PCA is a change of basis.
* Even a probability distribution can be viewed as a map assigning weights.

Once you start seeing everything as "just another morphism," the distinction between

$$f(x),\quad E[X],\quad \langle x,y\rangle,\quad P(A)$$

feels mostly syntactic.

---

Mathematicians tend to choose delimiters to communicate _how they want you to think_ about the operation, rather than because the mathematics requires it.

For example:

* $f(x)$: "Apply a function."
* $E[X]$: "Take the expectation of this random variable."
* $\langle x,y\rangle$: "Take the inner product."
* $[A,B]$: "Take the commutator."
* $\{a,b\}$: "Form a set."
* $(a,b)$: "Form an ordered pair."

They're all operations, but the notation gives the reader semantic cues.

---

One thing I think you'll appreciate is that probability theory eventually becomes almost entirely functional analysis.

A random variable is treated as an element of a vector space (more precisely, an $L^2$ space if it has finite variance).

Then:

* Addition is vector addition.
* Scalar multiplication is the usual one.
* Expectation is a linear functional.
* Variance is a norm: $$\operatorname{Var}(X)=\|X-E[X]\|^2.$$
* Covariance is an inner product: $$\operatorname{Cov}(X,Y)=\langle X-E[X],\,Y-E[Y]\rangle.$$

Once you adopt that viewpoint, PCA is almost inevitable: you're simply looking for an orthonormal basis that diagonalizes the covariance operator. That's exactly the same story you've already learned with symmetric matrices, just in a different vector space.

---

I think this also explains one of your observations from earlier:

> "The vocabulary is the hardest part."

You've consistently grasped the underlying structures quickly. What has slowed you down is that each field introduces a new layer of terminology and notation for ideas that are structurally very similar.

One thing I'd like to do going forward is explicitly point out those correspondences. For example, when we encounter a new concept, I'll tell you:

* **The new vocabulary**
* **The familiar linear algebra object it corresponds to**
* **The category-theoretic perspective, when it adds insight**

I think that will let you build on the abstractions you already have instead of treating probability, optimization, and machine learning as entirely new subjects. In fact, one of the themes you'll see throughout the rest of this course is that machine learning isn't built from dozens of unrelated ideas—it's built from a surprisingly small collection of abstractions viewed from different angles.

* * *

**You:**

Yep. Category theory and group theory both explain most of the structure. I was struggling last night to understand variance and covariance as different things. 

I like the explicit callbacks to category theory, and I think a similar one for group theory would too when it gives insight.

* * *

**ChatGPT:**

That matches what I've seen over the past dozen lessons. You rarely struggle with the mathematics itself—you struggle when the same underlying object gets renamed and reframed.

I think we can lean into that.

For future lessons, I'll try to explicitly separate things into four layers:

| Layer | Example |
| --- | --- |
| **Vocabulary** | "Covariance", "likelihood", "gradient"... |
| **Mathematical object** | Inner product, linear map, vector field, tensor... |
| **Category-theoretic view** | What are the objects and morphisms? What universal property is hiding here? |
| **Group/geometric view** | What symmetries or invariants are involved? |

I suspect you'll find that the bottom two layers change very little, even while the vocabulary changes constantly.

---

Your comment about variance and covariance is actually a perfect example.

Instead of thinking of them as different concepts, think of covariance as the _general_ operation and variance as the _special case_.

Define the centered variables

$$\tilde X = X - E[X],\qquad  
\tilde Y = Y - E[Y].$$

Then covariance is

$$\operatorname{Cov}(X,Y)  
=  
\langle \tilde X,\tilde Y\rangle,$$

where the "inner product" is expectation of the product.

Variance is simply what happens when you plug the same vector into both slots:

$$\operatorname{Var}(X)  
=  
\operatorname{Cov}(X,X).$$

So variance is to covariance exactly what squared length is to the dot product:

$$\|v\|^2 = v\cdot v.$$

That isn't just an analogy—it is the same construction in a different vector space.

---

### Category theory callback

This is the pattern you've probably noticed elsewhere.

The dot product is a morphism

$$\langle\cdot,\cdot\rangle : V\times V \to \mathbb R.$$

Covariance has exactly the same signature:

$$\operatorname{Cov}: \mathcal X\times\mathcal X \to \mathbb R,$$

except the objects are random variables instead of geometric vectors.

Variance is simply evaluating that bilinear map on the diagonal:

$$X \mapsto \operatorname{Cov}(X,X).$$

So covariance is the primitive operation; variance is derived.

---

### Group theory callback

From the geometric side, covariance is measuring **how two quantities transform together**.

If I rotate my coordinate system, the numerical covariance matrix changes according to the basis change, but the underlying geometric relationship does not. That's why PCA is meaningful: it finds the basis in which the covariance operator is diagonal.

This is the same kind of thinking you used with eigenvectors:

* the coordinates change,
* the transformation law changes,
* the underlying linear operator stays the same.

You can think of the covariance matrix as another representation of an intrinsic geometric object.

---

I also have a prediction that I'd like to test over the next few lessons.

When we get to **gradients**, **Jacobians**, and eventually **backpropagation**, most textbooks introduce them as entirely new concepts. I don't think that's the right approach for you.

Instead, I suspect you'll see them as:

* gradients → covectors (linear functionals)
* Jacobians → linear approximations (morphisms between tangent spaces)
* Hessians → symmetric bilinear forms
* backpropagation → composition of morphisms plus repeated application of the chain rule

In other words, I don't think you're about to learn "machine learning math." I think you're about to see the same handful of abstractions—vectors, linear maps, inner products, and composition—show up in increasingly rich settings. My job is to point out when we're meeting an old friend wearing a new name.

* * *

**You:**

Lesson 13.pdfPDF

* * *

**ChatGPT:**

Nicely done.

You have the concepts down. There are just a couple of small corrections, and they're both the same kind of mistake—which is good news.

## 1–3. Expectation and centering

These are all correct.

* $$E[X] = \frac{1}{2}$$
* $$E[X] = 3$$
* Centered values: $$\{-2,0,2\}$$

No issues there.

---

## 4. Variance

This is the one place where you stopped one step early.

You correctly computed the squared deviations:

$$(-2)^2,\;0^2,\;2^2  
=  
\{4,0,4\}$$

(I think the "-4" in your notes is just a slip of the pen.)

But variance is the **expectation** of those squared deviations.

So one more step:

$$Var(X)  
=  
E[\{4,0,4\}]  
=  
\frac13(4+0+4)  
=  
\frac83.$$

This is actually a nice illustration of something important:

* Centering gives you another random variable.
* Squaring gives you another random variable.
* **Expectation** finally converts that random variable into a single number.

In category-theory language:

```
Random Variable
      │
      ▼
Center
      │
      ▼
Square
      │
      ▼
Expectation
      │
      ▼
Real Number
```

You're composing three morphisms.

---

## 5. Covariance

Exactly right.

I especially like the sketch on the second page. It captures the geometric intuition well: the points lie roughly along a positively sloped line, so when one centered coordinate is positive, the other tends to be positive as well. Their products are mostly positive, which makes the covariance positive.

---

## One subtle point

Something clicked for me while reading your work.

When you computed

$$\{4,0,4\},$$

you instinctively treated it as "the answer."

That's because for the previous several lessons we've mostly manipulated vectors and stopped there.

Probability adds one new operation:

> **Reduce the vector to a scalar by taking its expectation.**

That pattern is going to repeat constantly.

For example:

* Mean: $$X  
    \rightarrow  
    E[X]$$
* Variance: $$X  
    \rightarrow  
    (X-E[X])^2  
    \rightarrow  
    E[(X-E[X])^2]$$
* Covariance: $$(X,Y)  
    \rightarrow  
    (X-E[X])(Y-E[Y])  
    \rightarrow  
    E[(X-E[X])(Y-E[Y])]$$

So statistics often alternates between:

1. Building a new random variable.
2. Applying a linear functional ($E$) to summarize it.

---

I also want to revisit your observation from earlier because I think it's the key insight of this lesson:

> Variance is to covariance as squared length is to the dot product.

If we define an inner product on centered random variables by

$$\langle X,Y\rangle  
=  
E[(X-E[X])(Y-E[Y])],$$

then

$$\operatorname{Cov}(X,Y)  
=  
\langle X,Y\rangle,$$

and

$$\operatorname{Var}(X)  
=  
\langle X,X\rangle.$$

That's exactly the same relationship as

$$v\cdot w  
\quad\text{and}\quad  
\|v\|^2 = v\cdot v.$$

Once you see that, covariance and variance stop feeling like two separate formulas—they're the same construction, just evaluated in different ways.

I think you're ready to move on. The next lesson will start optimization, where all of this linear algebra and probability begins to come together in service of learning from data.