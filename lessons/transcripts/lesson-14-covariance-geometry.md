**You:**

I’m ready for lesson 14

* * *

**ChatGPT:**

Perfect. Last lesson we introduced probability from the perspective of linear algebra. We saw that probability distributions are vectors, expectations are linear maps, and covariance is really an operator describing the geometry of random variables.

Today we'll build directly on that.

# Lesson 14 — Covariance as Geometry

## Goal

By the end of this lesson you should understand:

* why covariance is really an inner product
* what correlation actually measures
* why whitening works
* why PCA is "just rotating into a better coordinate system"

This lesson is where probability and linear algebra finally merge into a single picture.

---

# Part 1 — Random variables as vectors

Last lesson we treated a random variable

$$X : \Omega \rightarrow \mathbb{R}$$

as a function on the sample space.

Instead of thinking

> "X is a random variable"

start thinking

> "X is a vector."

Not a vector in physical space.

A vector in the vector space of all random variables.

You can

* add them

$$X+Y$$

scale them

$$2X$$

and form linear combinations

$$aX+bY.$$

So all the vector space axioms hold.

---

## Question

If random variables are vectors...

what should the **dot product** be?

We need something that

* is symmetric
* is linear
* is positive

The obvious candidate is

$$E[XY].$$

Unfortunately,

$$E[XY]\neq0$$

doesn't necessarily mean the variables are unrelated.

Example:

$$X=100$$

(constant)

Then

$$E[XY]=100E[Y].$$

That mostly measures the mean.

We want to ignore means.

---

# Part 2 — Centering

Instead define

$$\tilde X=X-E[X]$$

and similarly

$$\tilde Y=Y-E[Y].$$

Recall your notation question yesterday:

The tilde

$$\tilde X$$

(pronounced **"X tilde"**)

means

> centered version of X

or

> mean-zero version.

Now define

$$\langle X,Y\rangle  
=  
E[\tilde X\tilde Y].$$

Look familiar?

That's exactly

$$\boxed{\operatorname{Cov}(X,Y)}$$

Covariance.

---

This means

$$\boxed{\text{Covariance is an inner product.}}$$

That single sentence explains almost every identity you've memorized in statistics.

---

# Why is this amazing?

Everything from linear algebra suddenly applies.

Orthogonality?

Now means

$$\operatorname{Cov}(X,Y)=0.$$

Length?

Becomes

$$\sqrt{\operatorname{Cov}(X,X)}  
=  
\sqrt{\operatorname{Var}(X)}.$$

Angles?

Exist.

Projection?

Exists.

Gram–Schmidt?

Exists.

Least squares?

Already uses this!

---

# Part 3 — Correlation is cosine

Remember

$$\cos\theta  
=  
\frac{x\cdot y}  
{\|x\|\|y\|}.$$

Replace the dot product.

Replace the norm.

We obtain

$$\rho(X,Y)  
=  
\frac{\operatorname{Cov}(X,Y)}  
{\sqrt{\operatorname{Var}(X)}  
\sqrt{\operatorname{Var}(Y)}}.$$

That is exactly Pearson correlation.

Notice something remarkable.

Correlation isn't some mysterious statistic.

It is literally

$$\boxed{\cos(\theta)}$$

between two centered random variables.

---

Therefore

If

$$\rho=1$$

the vectors point the same direction.

If

$$\rho=-1$$

they point opposite directions.

If

$$\rho=0$$

they are perpendicular.

Exactly like Euclidean geometry.

---

# Group Theory callback

An inner product lets us talk about **orthogonal transformations**: linear maps that preserve lengths and angles.

In ordinary Euclidean space, these form the **orthogonal group**

$$O(n).$$

When we rotate data for PCA, we're applying an element of $O(n)$. Because rotations preserve inner products, they preserve the geometric relationships in the data—they simply express them in a different basis.

So PCA isn't distorting the data. It's choosing a basis in which the covariance operator becomes as simple as possible.

---

# Part 4 — Covariance matrix

Suppose

$$x=  
\begin{bmatrix}  
X_1\\  
X_2\\  
X_3  
\end{bmatrix}.$$

Its covariance matrix is

$$\Sigma=  
E[(x-\mu)(x-\mu)^T].$$

Expand it.

$$\Sigma  
=  
\begin{bmatrix}  
\operatorname{Var}(X_1)  
&  
\operatorname{Cov}(X_1,X_2)  
&  
\operatorname{Cov}(X_1,X_3)  
\\  
\operatorname{Cov}(X_2,X_1)  
&  
\operatorname{Var}(X_2)  
&  
\operatorname{Cov}(X_2,X_3)  
\\  
\operatorname{Cov}(X_3,X_1)  
&  
\operatorname{Cov}(X_3,X_2)  
&  
\operatorname{Var}(X_3)  
\end{bmatrix}.$$

Notice

Diagonal:

variance

Off-diagonal:

inner products

So

$$\boxed{\Sigma}$$

is nothing more than the **Gram matrix** of our random-variable vectors.

You encountered Gram matrices earlier in linear algebra.

Here they reappear naturally.

---

# Category Theory callback

A Gram matrix is produced by applying a bilinear pairing—in this case covariance—to every pair of vectors.

You can think of covariance as a morphism

$$\mathrm{Cov}:V\times V\rightarrow\mathbb{R},$$

assigning a scalar to each pair of random-variable vectors while respecting linearity in each argument. The covariance matrix is simply the representation of that pairing in a chosen basis.

Changing basis changes the matrix representation, but not the underlying bilinear form.

---

# Part 5 — Whitening

Suppose

$$\Sigma=  
\begin{bmatrix}  
9&6\\  
6&9  
\end{bmatrix}.$$

The variables

* have variance

9

and

* are strongly correlated.

Imagine the data cloud.

It looks like a stretched ellipse.

PCA rotates the ellipse.

Now the covariance matrix becomes

$$\Lambda  
=  
\begin{bmatrix}  
15&0\\  
0&3  
\end{bmatrix}.$$

Still stretched.

Just aligned.

Whitening performs one more operation.

Scale each axis by

$$\Lambda^{-1/2}.$$

Now

$$\Sigma  
=  
I.$$

The ellipse becomes a circle.

Every direction now has

* variance 1
* covariance 0

Everything has been standardized.

---

Why do many machine learning algorithms like whitened data?

Because every feature now has the same "units" from the algorithm's perspective. Gradient-based methods often converge more easily when one direction isn't thousands of times "longer" than another.

---

# The complete picture

Notice the progression:

Original coordinates

↓

Ellipse

↓

Rotate

↓

Diagonal covariance

↓

Scale

↓

Identity covariance

---

That sequence appears everywhere.

PCA

↓

Whitening

↓

Independent Component Analysis

↓

Many optimization methods

↓

Neural network preprocessing

It's one geometric story told repeatedly.

---

# Mental model

Imagine every feature is an arrow in a high-dimensional space of random variables.

The covariance between two features tells you how much those arrows point in the same direction.

The covariance matrix collects all those pairwise relationships into a single operator describing the shape of the data cloud.

PCA finds a new set of perpendicular arrows aligned with that shape.

Whitening rescales those arrows so every direction has equal variance.

You're no longer doing "statistics." You're doing geometry in the vector space of random variables.

---

# Exercises

### 1. Geometry

Suppose

$$\operatorname{Var}(X)=25,\qquad  
\operatorname{Var}(Y)=9,\qquad  
\operatorname{Cov}(X,Y)=12.$$

Compute:

a)

$$\|X\|$$

b)

$$\|Y\|$$

c)

their correlation

d)

the angle between them.

---

### 2. Covariance matrix

Construct the covariance matrix if

$$\operatorname{Var}(X)=4,$$ $$\operatorname{Var}(Y)=16,$$ $$\operatorname{Cov}(X,Y)=-6.$$

Is the covariance matrix symmetric? Why should it be?

---

### 3. Conceptual

Without doing any calculations, explain why PCA always produces a diagonal covariance matrix.

Use the geometric picture rather than the algorithm.

---

## Preview of Lesson 15

Today we treated covariance as geometry.

Next we'll make a small conceptual leap: **probability distributions themselves are vectors** that can be transformed by matrices.

That viewpoint leads naturally to **Markov chains**, where a matrix doesn't transform points in space—it transforms entire probability distributions. This is another place where the "everything is linear algebra" perspective pays off.

* * *

**You:**

Lesson 14.pdfPDF

* * *

**ChatGPT:**

Excellent work. You're no longer just applying formulas—you're reasoning geometrically. That's exactly the transition I was hoping you'd make.

Let's go through it.

---

## Exercise 1

Everything is correct.

You recognized immediately that

$$\|X\|=\sqrt{\operatorname{Var}(X)}$$

and

$$\|Y\|=\sqrt{\operatorname{Var}(Y)}.$$

Then

$$\rho=\frac{12}{5\cdot3}=\frac45.$$

I especially like that you drew the $3$-$4$-$5$ triangle.

That wasn't necessary—but it's exactly the geometric intuition I wanted you to build.

Then

$$\theta=\cos^{-1}\left(\frac45\right)\approx0.644\text{ rad}$$

which is about

$$36.87^\circ.$$

Perfect.

---

## Exercise 2

Again, completely correct.

You produced

$$\Sigma=  
\begin{bmatrix}  
4&-6\\  
-6&16  
\end{bmatrix}$$

and correctly justified symmetry by observing

$$\operatorname{Cov}(X,Y)  
=  
\operatorname{Cov}(Y,X).$$

One subtle point that's worth adding:

The symmetry is deeper than just the definition.

Since covariance is an inner product,

$$\langle X,Y\rangle  
=  
\langle Y,X\rangle,$$

every covariance matrix must be symmetric for exactly the same reason every Gram matrix is symmetric.

That's another nice callback to linear algebra.

---

## Exercise 3

I like your explanation.

You wrote:

> PCA rotates the covariance matrix into a reference frame where the basis vectors are orthogonal.

That's almost exactly how I'd explain it.

I'd only tweak one sentence.

Instead of

> "when vectors are orthogonal, their covariance is zero"

I'd say

> "PCA chooses a basis consisting of eigenvectors of the covariance operator. Since the covariance matrix is symmetric, its eigenvectors are orthogonal. In that basis, covariance between different basis directions is zero, leaving only variances on the diagonal."

It's a tiny distinction, but it emphasizes that orthogonality comes from the covariance operator itself, not merely from rotating to any orthogonal basis.

---

# The extra PCA work

This was the interesting part.

You decided to actually compute PCA yourself.

I was very happy to see this.

---

### Example 1

You started with

$$\Sigma=  
\begin{bmatrix}  
25&12\\  
12&9  
\end{bmatrix}.$$

Your characteristic polynomial became

$$\lambda^2-34\lambda+81.$$

Correct.

The eigenvalues are

$$17\pm4\sqrt{13}.$$

Exactly right.

Nice algebra.

---

You then jumped to

$$\Lambda=  
\begin{bmatrix}  
17+4\sqrt{13}&0\\  
0&17-4\sqrt{13}  
\end{bmatrix}.$$

That is correct.

What you're missing is the **rotation**.

Remember SVD?

Remember eigenvectors?

Those eigenvectors form

$$V$$

and PCA is really

$$\Sigma  
=  
V\Lambda V^T.$$

The eigenvalues tell us **how stretched** each axis is.

The eigenvectors tell us **where those axes point.**

Without the eigenvectors, PCA is only half finished.

---

## Example 2

For

$$\begin{bmatrix}  
9&6\\  
6&9  
\end{bmatrix}$$

you obtained

$$15,\;3.$$

Correct.

This one has particularly nice eigenvectors:

$$\frac1{\sqrt2}  
\begin{bmatrix}  
1\\  
1  
\end{bmatrix}$$

and

$$\frac1{\sqrt2}  
\begin{bmatrix}  
1\\  
-1  
\end{bmatrix}.$$

Notice something beautiful.

Those are exactly a **45° rotation.**

So the ellipse is pointing diagonally.

PCA rotates it back so its axes become horizontal and vertical.

---

## Example 3

For

$$\begin{bmatrix}  
4&-6\\  
-6&16  
\end{bmatrix}$$

you approximated

$$18.5,\;1.5.$$

You're close, but there's a small arithmetic error.

Let's compute it.

Characteristic polynomial:

$$\lambda^2-20\lambda+28.$$

Then

$$\lambda  
=  
\frac{20\pm\sqrt{400-112}}2  
=  
\frac{20\pm\sqrt{288}}2.$$

Since

$$\sqrt{288}  
=  
12\sqrt2  
\approx16.97,$$

the eigenvalues are

$$18.49$$

and

$$1.51.$$

Your approximation rounded them to

$$18.5,\;1.5,$$

which is perfectly fine. You wrote "$\sqrt{288}\approx17$" and propagated that approximation consistently.

---

# The bigger picture

Something I noticed while reading your work:

When you learned determinants and eigenvalues a few lessons ago, they were abstract algebraic procedures.

Now you're voluntarily using them to answer a geometric question.

That's a sign the ideas are integrating.

---

# One thing I'd like you to try

For the first covariance matrix,

$$\begin{bmatrix}  
25&12\\  
12&9  
\end{bmatrix},$$

find the **eigenvectors**.

Don't worry about whitening yet.

Just compute the eigenvectors and sketch what they mean geometrically.

I think you'll recognize that you're doing exactly what we learned in Lessons 6, 10, and 11:

1. Compute eigenvalues.
2. Compute eigenvectors.
3. Form the orthonormal matrix $V$.
4. Rotate into that basis.
5. The covariance matrix becomes diagonal.

You're about one lesson away from seeing that PCA is almost literally the spectral theorem wearing a statistics hat.

I think that realization is going to click for you.

* * *

**You:**

Note Jul 1, 2026.pdfPDFHow can I keep from drowning in complexity? These are just 2x2 matrices. 

I’m sure I’m doing something wrong, beyond dropping some component of a matrix multiplication. 

I understand eigenvectors and eigenvalues on a conceptual level. I’m struggling on the computation level.

* * *

**ChatGPT:**

Jason, I actually think I see exactly what's happening.

You're **not** drowning because the mathematics is too complicated.

You're drowning because you're trying to compute **too much**.

There are two conceptual mistakes in your notes that together increase the amount of work by almost an order of magnitude.

---

## Mistake 1: You're solving for both components of the eigenvector

On page 1 you correctly arrive at

$$(\Sigma-\lambda I)v=0.$$

Then you solve

$$12v_0+\frac{-1-4\sqrt{13}}{2}v_1=0.$$

This is exactly right.

But then something subtle happens.

You treat this like a system with a unique solution.

It isn't.

Remember what

$$(\Sigma-\lambda I)v=0$$

means.

Because

$$\det(\Sigma-\lambda I)=0,$$

the rows are linearly dependent.

There is **one degree of freedom**.

That means you can literally say

> Let $v_1=1$.

Or

> Let $v_1=24$.

Or

> Let $v_1=\pi$.

Anything except zero.

Then solve for the other coordinate.

You're finding a **direction**, not a point.

---

Notice how much work disappears.

Instead of

$$v=  
\begin{bmatrix}  
24\\  
-1+4\sqrt{13}  
\end{bmatrix},$$

I'd probably write

$$v=  
\begin{bmatrix}  
\dfrac{4\sqrt{13}-1}{24}\\  
1  
\end{bmatrix}.$$

Same vector.

Much less work.

Then normalize.

Done.

---

## Mistake 2 (the big one)

This is the real source of the explosion.

On page 2 you write

$$\Sigma=V\Lambda V^T.$$

Correct.

Then immediately you try to verify it by multiplying everything out.

**Don't.**

Almost never.

That's not how people use diagonalization.

Instead, think of the decomposition as a _change of coordinates_.

---

Suppose I hand you

$$V$$

and

$$\Lambda.$$

The theorem already tells you

$$V^T\Sigma V=\Lambda.$$

You don't multiply three symbolic matrices unless you're proving the theorem.

In applications you stop as soon as you've found

* eigenvalues
* orthonormal eigenvectors

because you're done.

---

## Compare it to programming

Imagine someone asks you

> "Sort this array."

You write

```TypeScript
array.sort(...)
```

Then, to verify it, you decide to manually simulate quicksort on paper.

Technically possible.

Almost nobody does it.

That's what you're doing with matrix multiplication.

The theorem is the API.

You don't reimplement the API every time you call it.

---

## The third thing

I noticed something else.

You're carrying exact radicals everywhere.

For learning, that's admirable.

For intuition, it's awful.

If I were doing this by hand I'd write

$$\lambda_1\approx31.42$$ $$\lambda_2\approx2.58$$

immediately.

Then

$$(\Sigma-\lambda I)$$

becomes

$$\begin{bmatrix}  
-6.42&12\\  
12&-22.42  
\end{bmatrix}$$

Now it's obvious the first row says

$$-6.42x+12y=0$$

so

$$x\approx1.87y.$$

That's the eigenvector.

No radicals.

No pages of algebra.

Machine learning practitioners do this constantly because the data is already floating point.

---

## Here's the workflow I want you to internalize

Every symmetric $2\times2$ problem should feel like this:

1. Compute the characteristic polynomial.
2. Find the eigenvalues.
3. For each eigenvalue:
    * Plug it into $A-\lambda I$.
    * Use **one row only**.
    * Set one variable equal to $1$.
    * Solve for the other.
    * Normalize.
4. Stop.

That's it.

No giant symbolic matrix multiplications.

No expanding $V\Lambda V^T$.

No verification by brute force.

---

## The conceptual shift I'd like you to make

You've mentioned several times that category theory helps you organize mathematics.

Here's the category-theoretic version of what's happening.

Right now you're reasoning at the **implementation level**.

You have a decomposition

$$A = V\Lambda V^T,$$

and you're expanding every multiplication, just as you might inline every function call in a program.

A more abstract view is to treat $V$ as an **isomorphism** between two coordinate systems.

```
standard coordinates
        │
        │ Vᵀ
        ▼
eigenvector coordinates
        │
        │ Λ
        ▼
scaled eigenvector coordinates
        │
        │ V
        ▼
standard coordinates
```

The only interesting operation is the scaling by $\Lambda$. The rotations $V$ and $V^T$ are just changes of basis. Once you trust that interpretation, you stop expanding them by hand—just as you stop inlining every function when you read a well-factored program.

---

I actually think you're ready for one change in our curriculum.

Up until now I've been assigning exercises that emphasize **calculation**. Given your background, I think you'll learn faster if we separate the two skills:

* **Computation drills:** short, mechanical exercises where the goal is fluency.
* **Conceptual exercises:** the kinds of geometric and structural questions you've been excelling at.

That mirrors how mathematics is taught at a higher level. The calculations become a language you're fluent in, while most of your effort goes into understanding why the structures work the way they do.

I think that balance will fit the way you naturally learn.

* * *

**You:**

Can you show me an example, start to finish, please?

* * *

**ChatGPT:**

Yes. Let’s use your matrix:

$$\Sigma=  
\begin{bmatrix}  
25&12\\  
12&9  
\end{bmatrix}$$

## 1. Find eigenvalues

$$\det(\Sigma-\lambda I)=0$$ $$\det  
\begin{bmatrix}  
25-\lambda&12\\  
12&9-\lambda  
\end{bmatrix}  
=0$$ $$(25-\lambda)(9-\lambda)-144=0$$ $$\lambda^2-34\lambda+81=0$$ $$\lambda=\frac{34\pm\sqrt{34^2-4(81)}}2$$ $$\lambda=\frac{34\pm\sqrt{832}}2$$ $$\lambda=17\pm4\sqrt{13}$$

Approximate:

$$\lambda_1\approx31.42$$ $$\lambda_2\approx2.58$$

So:

$$\Lambda=  
\begin{bmatrix}  
31.42&0\\  
0&2.58  
\end{bmatrix}$$

---

## 2. Find eigenvector for $\lambda_1$

Use:

$$(\Sigma-\lambda_1 I)v=0$$ $$\begin{bmatrix}  
25-31.42&12\\  
12&9-31.42  
\end{bmatrix}  
\begin{bmatrix}  
x\\y  
\end{bmatrix}  
=  
\begin{bmatrix}  
0\\0  
\end{bmatrix}$$ $$\begin{bmatrix}  
-6.42&12\\  
12&-22.42  
\end{bmatrix}  
\begin{bmatrix}  
x\\y  
\end{bmatrix}  
=  
0$$

Use one row:

$$-6.42x+12y=0$$ $$12y=6.42x$$

Set:

$$x=1$$

Then:

$$y=\frac{6.42}{12}\approx0.535$$

So one eigenvector is:

$$v_1=  
\begin{bmatrix}  
1\\  
0.535  
\end{bmatrix}$$

Normalize it:

$$\|v_1\|  
=  
\sqrt{1^2+0.535^2}  
\approx1.134$$ $$\hat v_1=  
\begin{bmatrix}  
1/1.134\\  
0.535/1.134  
\end{bmatrix}  
\approx  
\begin{bmatrix}  
0.882\\  
0.472  
\end{bmatrix}$$

---

## 3. Find eigenvector for $\lambda_2$

$$\Sigma-\lambda_2 I  
=  
\begin{bmatrix}  
25-2.58&12\\  
12&9-2.58  
\end{bmatrix}$$ $$=  
\begin{bmatrix}  
22.42&12\\  
12&6.42  
\end{bmatrix}$$

Use one row:

$$22.42x+12y=0$$ $$12y=-22.42x$$

Set:

$$x=1$$ $$y\approx-1.868$$

So:

$$v_2=  
\begin{bmatrix}  
1\\  
-1.868  
\end{bmatrix}$$

Normalize:

$$\|v_2\|  
=  
\sqrt{1^2+(-1.868)^2}  
\approx2.119$$ $$\hat v_2  
\approx  
\begin{bmatrix}  
0.472\\  
-0.882  
\end{bmatrix}$$

---

## 4. Form $V$

Put the normalized eigenvectors as columns:

$$V=  
\begin{bmatrix}  
0.882&0.472\\  
0.472&-0.882  
\end{bmatrix}$$

Then:

$$\Sigma  
=  
V\Lambda V^T$$

and equivalently:

$$V^T\Sigma V  
=  
\Lambda$$ $$V^T\Sigma V  
\approx  
\begin{bmatrix}  
31.42&0\\  
0&2.58  
\end{bmatrix}$$

That’s PCA.

The first principal direction points roughly:

$$\begin{bmatrix}  
0.882\\  
0.472  
\end{bmatrix}$$

The second points roughly:

$$\begin{bmatrix}  
0.472\\  
-0.882  
\end{bmatrix}$$

So the data cloud’s long axis points mostly in the $X$ direction, but tilted upward. Its variance along that axis is about $31.42$. The short axis is perpendicular to it, with variance about $2.58$.

* * *

**You:**

Cool. So we aren’t calculating V^T*sigma*V, or V*lambda*V^T because we know it due to our theorems. Once we get lambda, the eigenvalues, and V, the eigenvectors, we’re done.

* * *

**ChatGPT:**

Exactly.

In fact, I'd go one step further.

You're not just "avoiding the computation." You're using the **Spectral Theorem** as an abstraction.

The theorem says:

> Every real symmetric matrix can be orthogonally diagonalized.

So once you've found

* the eigenvalues, and
* an orthonormal basis of eigenvectors,

you already know the decomposition.

The theorem has done the matrix multiplication for you.

---

Think of it like software engineering.

Suppose you have

```TypeScript
const sorted = sort(array);
```

You don't expand the implementation of `sort()` every time you use it.

You trust its contract:

> Returns the array in sorted order.

The Spectral Theorem is exactly that kind of contract.

Once you've established

$$V=  
\begin{bmatrix}  
|&|\\  
v_1&v_2\\  
|&|  
\end{bmatrix}$$

and

$$\Lambda=  
\begin{bmatrix}  
\lambda_1&0\\  
0&\lambda_2  
\end{bmatrix},$$

the theorem guarantees

$$\Sigma = V\Lambda V^T.$$

You don't need to prove it again.

---

### There's another insight hiding here

Notice what you've been doing over the last few lessons:

* **Lesson 6:** Eigenvectors were "directions that don't rotate."
* **Lesson 10 (SVD):** We found special coordinate systems for arbitrary linear maps.
* **Lesson 11 (PCA):** We projected data onto principal components.
* **Lesson 14:** We discovered those principal components are just the eigenvectors of the covariance matrix.

Those weren't four separate algorithms.

They're one algorithm viewed from different perspectives.

The only thing that changed was what the matrix represented.

| Matrix | Eigenvectors mean |
| --- | --- |
| General linear map | Invariant directions |
| Covariance matrix | Principal axes of the data |
| Quadratic form | Principal axes of the ellipse |
| Hessian | Principal directions of curvature |
| Graph Laplacian | Fundamental modes of a graph |

The computation is identical.

Only the interpretation changes.

---

### One more thing

I think I also understand why you've been feeling overwhelmed.

As an engineer, you're used to understanding _how_ an abstraction works, so you've been trying to re-derive everything from first principles.

That's a useful instinct when learning.

But mathematics has a hierarchy of trusted results. Once you've proved or accepted a theorem, you're expected to treat it as a building block. If every proof required reproving all of linear algebra beneath it, mathematics wouldn't scale.

You're reaching the point where the right strategy is:

1. Understand why a theorem is true (once).
2. Trust it thereafter.
3. Spend your effort understanding how different theorems connect.

Given your comments about category theory and group theory, I suspect that's the mode of thinking you'll enjoy most. You're already looking for the common structure behind seemingly different ideas, and that's exactly where modern mathematics becomes both more powerful and, in many ways, simpler.

* * *

**You:**

Yeah, it’s abstraction and encapsulation. I get it.

* * *

**ChatGPT:**

Exactly.

And I think you've just identified the bridge between software engineering and higher mathematics.

When mathematicians say

> "Apply the Spectral Theorem"

they're really saying

```TypeScript
const { eigenvectors: V, eigenvalues: Λ } = spectralTheorem(Σ);
```

They aren't saying

> "Go re-prove the Spectral Theorem."

They're calling an API.

---

In fact, most of mathematics is built this way.

Calculus says:

```TypeScript
const area = integrate(f);
```

Nobody recomputes the Riemann sums anymore.

---

Linear algebra says:

```TypeScript
const {Q, R} = qr(A);
```

Nobody derives Householder reflections every time.

---

Probability says:

```TypeScript
const covariance = Cov(X, Y);
```

Nobody expands

$$E[(X-E[X])(Y-E[Y])]$$

every single time.

---

One of the reasons category theory clicked for you is that it's **the study of abstractions themselves**. It teaches you to ask:

> What are the interfaces? What are the contracts? Which implementation details can I ignore?

That's not just a programming habit—it's how modern mathematics scales.

---

I also think this changes how we should approach the rest of the course.

Instead of treating each new topic as a separate algorithm to memorize, let's explicitly identify its abstraction.

For example:

| Concept | Software analogy |
| --- | --- |
| Vector space | Interface |
| Basis | Concrete representation |
| Change of basis | Serialization/deserialization |
| Linear map | Pure function |
| Matrix | Implementation of a linear map in one representation |
| Eigenvector | Fixed point of the representation change |
| Spectral theorem | Canonical decomposition API |
| SVD | Universal factorization API |
| Covariance | Inner-product implementation |
| PCA | Coordinate optimization |

I don't think this is merely an analogy. I think it's a faithful correspondence between two ways of organizing knowledge.

---

One small correction to that table, because I know you'll appreciate the nuance:

> **A matrix is not the linear transformation.**

A matrix is **one representation** of a linear transformation in a particular choice of basis.

That's exactly like an object being serialized to JSON.

The object hasn't changed.

Only its representation has.

That's why changing basis changes the matrix but not the underlying transformation.

I have a feeling that perspective is going to make tensors much less intimidating when we eventually get there. A tensor, too, is an abstract object with many coordinate representations—the same idea, one level higher.

* * *

**You:**

Alright I feel comfortable with this material now. Thank you. 

Looking at whitening, I need a refresher on matrix exponentiation.

* * *

**ChatGPT:**

I'm glad to hear that. I think this lesson was a turning point. You stopped thinking of PCA as "a bunch of formulas" and started seeing it as "the spectral theorem applied to covariance."

Now, let's talk about matrix powers, because whitening is where they first appear in a meaningful way.

---

# Matrix powers

Suppose

$$A=  
\begin{bmatrix}  
2&0\\  
0&3  
\end{bmatrix}.$$

Integer powers are exactly what you'd expect.

$$A^2  
=  
AA  
=  
\begin{bmatrix}  
4&0\\  
0&9  
\end{bmatrix}$$ $$A^3  
=  
\begin{bmatrix}  
8&0\\  
0&27  
\end{bmatrix}$$

Every diagonal entry is raised to that power.

---

## Fractional powers

Now suppose I ask for

$$A^{1/2}.$$

What matrix multiplied by itself gives back $A$?

Since $A$ is diagonal, this is easy:

$$A^{1/2}  
=  
\begin{bmatrix}  
\sqrt2&0\\  
0&\sqrt3  
\end{bmatrix}$$

because

$$A^{1/2}A^{1/2}  
=  
A.$$

Likewise,

$$A^{-1/2}  
=  
\begin{bmatrix}  
1/\sqrt2&0\\  
0&1/\sqrt3  
\end{bmatrix}.$$

---

## What if the matrix isn't diagonal?

Here's the beautiful trick.

Suppose

$$\Sigma  
=  
V\Lambda V^T.$$

Since $V$ is just a rotation (an orthogonal change of basis), all the "hard work" happens in the diagonal matrix.

So we define

$$\boxed{\Sigma^{1/2}=V\Lambda^{1/2}V^T}$$

and similarly

$$\boxed{\Sigma^{-1/2}=V\Lambda^{-1/2}V^T.}$$

Notice what happened.

We **never** take the square root of the entries of $\Sigma$.

We:

1. Rotate into the eigenbasis.
2. Take the square roots of the eigenvalues.
3. Rotate back.

Exactly like PCA.

---

## Why does this work?

Think back to the decomposition:

```
standard coordinates
      │
      ▼
     Vᵀ
      │
      ▼
eigenbasis
      │
      ▼
      Λ
      │
      ▼
     V
      │
      ▼
standard coordinates
```

Applying

$$\Sigma$$

means

1. rotate,
2. scale,
3. rotate back.

Applying

$$\Sigma^{1/2}$$

means

1. rotate,
2. scale by the **square roots**,
3. rotate back.

Same rotations.

Different scaling.

---

## Whitening

Suppose PCA produced

$$\Lambda  
=  
\begin{bmatrix}  
25&0\\  
0&4  
\end{bmatrix}.$$

Then

$$\Lambda^{-1/2}  
=  
\begin{bmatrix}  
1/5&0\\  
0&1/2  
\end{bmatrix}.$$

What does this do geometrically?

The first principal component had standard deviation

$$\sqrt{25}=5.$$

Multiply by $1/5$, and it becomes 1.

The second had standard deviation

$$\sqrt4=2.$$

Multiply by $1/2$, and it also becomes 1.

So after whitening, both principal directions have unit variance.

---

## The complete whitening transform

If $x$ is your centered data, then

$$z=\Lambda^{-1/2}V^Tx.$$

Read it left to right:

* $V^T$: rotate into the principal-component basis.
* $\Lambda^{-1/2}$: scale each principal component to have variance 1.

That's the whitening transformation.

Some authors write it as

$$z=\Sigma^{-1/2}x,$$

which is equivalent because

$$\Sigma^{-1/2}=V\Lambda^{-1/2}V^T.$$

They're the same transformation expressed from different viewpoints.

---

## The pattern

This is the pattern I hope you'll start recognizing:

> If a matrix is diagonalizable, and you want to apply a function $f$ to the matrix...

you do **not** apply $f$ entry-by-entry.

Instead,

$$A=V\Lambda V^{-1}$$

becomes

$$\boxed{f(A)=Vf(\Lambda)V^{-1}.}$$

The function only touches the eigenvalues.

For example:

* Square:

$$A^2=V\Lambda^2V^{-1}$$

* Square root:

$$A^{1/2}=V\Lambda^{1/2}V^{-1}$$

* Inverse:

$$A^{-1}=V\Lambda^{-1}V^{-1}$$

* Inverse square root:

$$A^{-1/2}=V\Lambda^{-1/2}V^{-1}$$

This is one of the reasons eigenvalues and eigenvectors are so useful: they reduce a matrix function to applying an ordinary scalar function to each eigenvalue.

---

If you've noticed, we're quietly building toward a much more general principle:

> **Diagonalize whenever possible, do the easy operation in the diagonal basis, then transform back.**

That's exactly what you've already seen with PCA, and it's a recurring strategy throughout linear algebra, differential equations, quantum mechanics, and machine learning. Once you recognize that pattern, many seemingly different algorithms become variations on the same theme.

* * *

**You:**

That’s easy enough. Thanks for the explanation. I’ll see you in the next lesson.

* * *

**ChatGPT:**

You're welcome. I enjoyed this lesson.

I also learned something about how you learn.

Early on, I was emphasizing the mechanics because they're important. But once we connected everything back to abstraction, category theory, and software engineering, the pieces started falling into place much faster. We'll lean into that more going forward.

The next few lessons are where linear algebra starts feeling less like a collection of techniques and more like a single coherent language.

We've built up:

* Vectors → points in a space.
* Matrices → linear transformations.
* Eigenvectors → invariant directions.
* SVD → canonical factorization of any linear map.
* Covariance → an inner product on random variables.
* PCA → the spectral theorem applied to covariance.
* Whitening → applying a matrix function by diagonalizing first.

From here, you'll see those same ideas reappear in probability, optimization, and eventually neural networks.

One prediction, since you've mentioned both group theory and category theory several times: I think **optimization** is going to be the next big "click" for you. Once gradients become "the direction of steepest ascent under an inner product," a lot of machine learning starts looking like geometry instead of calculus.

Have a good evening, and I'll see you in Lesson 15. I think you're going to enjoy it.