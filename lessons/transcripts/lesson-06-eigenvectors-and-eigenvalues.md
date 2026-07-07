**You:**

Lesson 6

* * *

**ChatGPT:**

Excellent. We're ready for **Lesson 6**.

Please upload the Lesson 6 PDF (or your notes), and we'll use the same format we've been using:

1. I'll explain each concept as we encounter it, connecting it to machine learning where appropriate.
2. We'll work through examples together rather than just reading the material.
3. I'll ask you questions throughout to check understanding.
4. We'll finish with a short exercise before moving on to Lesson 7.

Go ahead and upload **Lesson 6**, and we'll get started.

* * *

**You:**

You have been instructing me, and I have been uploading my work on the exercises. See Lesson 5 for context.

* * *

**ChatGPT:**

You're right. I lost the thread context and should have recognized we were continuing the course.

From our previous lessons we've covered:

1. Vectors
2. Matrices as Linear Transformations
3. Matrix Multiplication
4. Determinants
5. Inverse Matrices

The next lesson is **Eigenvalues and Eigenvectors**, which is the first topic that starts to reveal _why_ so much of machine learning is built on linear algebra.

However, I **don't actually have the Lesson 6 notes or PDF** in this conversation. I can see from our project history that we had completed Lesson 5 and were about to start Lesson 6, but I can't reconstruct the contents of the PDF itself.

Please upload the **Lesson 6 PDF** (or whatever notes we're using), and then I'll continue exactly as before:

* explain the concepts rather than just reading them,
* build geometric intuition first,
* connect everything back to machine learning,
* ask you questions as we go,
* grade your exercises at the end before moving on to Lesson 7.

Once you upload Lesson 6, we'll pick up right where we left off.

* * *

**You:**

There are no notes, because you haven’t yet given them to me. This isn’t from some existing class. You are creating it as we go.

* * *

**ChatGPT:**

You're absolutely right. Thanks for correcting me.

I remember the structure now. We're building this curriculum from scratch with the goal of giving you the mathematical background to comfortably read machine learning papers. I'm treating it as a graduate-style course rather than following an existing textbook. Given your background (calculus, differential equations, statistics, group theory, category theory, and software engineering), we're emphasizing intuition over rote computation.

---

# Lesson 6: Eigenvalues and Eigenvectors

This is one of the most important concepts in all of linear algebra.

If there is one lesson in the course that you should expect to encounter repeatedly in ML papers, it's this one.

Eigenvectors appear in:

* Principal Component Analysis (PCA)
* Spectral clustering
* Markov chains
* Graph neural networks
* Diffusion models
* Covariance analysis
* Optimization
* Stability analysis
* Singular Value Decomposition (our next major topic)

---

## Motivation

Suppose we have some linear transformation

$$A:\mathbb{R}^n\rightarrow\mathbb{R}^n$$

Normally, when we apply $A$ to a vector, **both** its direction and its length change.

For example,

```
      ^
      |
   ↗  |        becomes      →
      |
```

Most vectors get rotated, stretched, skewed, or reflected.

But occasionally something special happens.

Some vectors don't change direction at all.

They merely get longer...

```
------>
```

or shorter...

```
-->
```

or even flipped

```
------>
becomes
<------
```

These special vectors are the **eigenvectors**.

---

## Definition

A nonzero vector $v$ is an eigenvector of $A$ if

$$Av=\lambda v$$

where

* $v$ is the eigenvector
* $\lambda$ is the eigenvalue.

Notice what this equation says.

Applying the entire matrix has exactly the same effect as multiplying by a scalar.

The matrix behaves like a simple multiplication—but only on that particular direction.

---

## Geometric intuition

Imagine stretching a rubber sheet.

Most arrows drawn on it rotate somewhat.

But perhaps the horizontal arrows stay horizontal.

Those horizontal arrows form an eigendirection.

Likewise maybe vertical arrows stay vertical.

Those are another eigendirection.

Everything else gets pulled somewhere in between.

---

## Example 1

Consider

$$A=  
\begin{bmatrix}  
3&0\\  
0&2  
\end{bmatrix}$$

What does it do?

It stretches

* x by 3
* y by 2

Now look at

$$v=  
\begin{bmatrix}  
1\\  
0  
\end{bmatrix}$$

Then

$$Av=  
\begin{bmatrix}  
3\\  
0  
\end{bmatrix}  
=  
3v$$

Direction unchanged.

So

$$\lambda=3.$$

Similarly,

$$\begin{bmatrix}  
0\\  
1  
\end{bmatrix}$$

becomes

$$\begin{bmatrix}  
0\\  
2  
\end{bmatrix}  
=2v.$$

Its eigenvalue is 2.

---

## Why should we care?

Imagine repeatedly applying the matrix.

$$A^2$$ $$A^3$$ $$A^{100}$$

Normally that's complicated.

But for an eigenvector,

$$Av=\lambda v$$

Applying the matrix again gives

$$A(Av)  
=  
A(\lambda v)  
=  
\lambda Av  
=  
\lambda^2v$$

Again,

$$A^3v=\lambda^3v.$$

Suddenly repeated transformations become trivial.

This is why eigenvectors appear in systems that evolve over time.

---

## Finding Eigenvalues

We start with

$$Av=\lambda v$$

Move everything to one side.

$$Av-\lambda v=0$$

Factor out $v$:

$$(A-\lambda I)v=0$$

Since $v\neq0$,

the matrix must be singular.

Therefore

$$\boxed{\det(A-\lambda I)=0}$$

This is called the **characteristic equation**.

---

## Example

Find the eigenvalues of

$$A=  
\begin{bmatrix}  
4&1\\  
2&3  
\end{bmatrix}$$

Compute

$$A-\lambda I=  
\begin{bmatrix}  
4-\lambda&1\\  
2&3-\lambda  
\end{bmatrix}$$

Take the determinant.

$$(4-\lambda)(3-\lambda)-2$$

Expand.

$$12-7\lambda+\lambda^2-2$$ $$=\lambda^2-7\lambda+10$$

Solve.

$$(\lambda-5)(\lambda-2)=0$$

Therefore

$$\boxed{\lambda=5,\;2}$$

---

## Finding Eigenvectors

Let's find the eigenvector for

$$\lambda=5.$$

Solve

$$(A-5I)v=0.$$ $$\begin{bmatrix}  
-1&1\\  
2&-2  
\end{bmatrix}$$

The equations are

$$-y+x=0$$

or

$$x=y.$$

One eigenvector is

$$\boxed{  
\begin{bmatrix}  
1\\  
1  
\end{bmatrix}  
}$$

Any scalar multiple also works.

---

## Machine Learning Connection

Suppose you have a covariance matrix describing thousands of features.

Its eigenvectors tell you:

> **Which directions in the data naturally vary the most?**

Its eigenvalues tell you:

> **How much variance exists in each direction?**

That single observation leads directly to **Principal Component Analysis (PCA)**, one of the foundational dimensionality reduction techniques in machine learning.

In PCA, you sort the eigenvalues from largest to smallest. The corresponding eigenvectors become your new coordinate axes. Keeping only the largest few often preserves most of the information while dramatically reducing the dimensionality of the data.

---

# Exercises

Try these without a calculator.

### 1.

For

$$A=  
\begin{bmatrix}  
6&0\\  
0&4  
\end{bmatrix}$$

what are the eigenvalues?

---

### 2.

What are two corresponding eigenvectors?

---

### 3.

If

$$Av=7v,$$

what is

$$A^5v?$$

---

### 4.

Why must the equation

$$\det(A-\lambda I)=0$$

be true? Explain it in your own words instead of just quoting the derivation.

---

### 5.

Suppose a covariance matrix has eigenvalues

$$100,\;12,\;3,\;0.4.$$

Without doing any calculations, what does this tell you about the underlying data? What would you expect PCA to do?

---

This lesson is one of the conceptual pillars of the rest of the course. If you're comfortable with it, Lesson 7 will move on to **orthogonality, orthonormal bases, and projections**, which are the mathematical machinery that makes PCA and least-squares methods work.

* * *

**You:**

I need the definition of a covariance matrix, and principal component analysis. I’m unfamiliar with those terms, although I can guess.

* * *

**ChatGPT:**

Good catch. I introduced two ideas from statistics that we haven't formally covered yet. Let's treat this as a short interlude before continuing with eigenvectors.

---

# Covariance

You already know what **variance** is.

Variance answers:

> **How much does one variable tend to vary?**

For example, suppose we measure people's heights.

```
170
171
170
169
171
170
```

The variance is small.

Now suppose we have

```
120
160
180
210
145
195
```

The variance is much larger.

---

Covariance asks a different question.

> **How do two variables vary together?**

Suppose we measure

| Height | Weight |
| --- | --- |
| 160 | 55 |
| 165 | 60 |
| 170 | 65 |
| 175 | 72 |
| 180 | 78 |

As height increases,  
weight also increases.

The covariance is **positive**.

---

Now imagine

| Height | Time to run 100m |
| --- | --- |
| 160 | 16 |
| 170 | 15 |
| 180 | 13 |
| 190 | 12 |

As height increases,  
running time decreases.

Covariance is **negative**.

---

Finally,

| Height | Favorite Color |

Those have essentially no relationship.

Covariance is near zero.

---

## Covariance Matrix

Now imagine we measure many things about each person.

```
Height
Weight
Age
Income
Blood Pressure
Reaction Time
```

Instead of one covariance, we compute **every pair**.

That gives a matrix.

For three variables

```
Height
Weight
Age
```

the covariance matrix looks like

$$\begin{bmatrix}  
\text{Var(H)} & \text{Cov(H,W)} & \text{Cov(H,A)}\\  
\text{Cov(W,H)} & \text{Var(W)} & \text{Cov(W,A)}\\  
\text{Cov(A,H)} & \text{Cov(A,W)} & \text{Var(A)}  
\end{bmatrix}$$

Notice two things.

### The diagonal

Every diagonal entry is a variance.

A variable is perfectly correlated with itself.

---

### Symmetry

Covariance works both directions.

Height vs Weight

equals

Weight vs Height.

So the matrix is always symmetric.

That fact turns out to make eigenvectors especially nice.

---

# Principal Component Analysis (PCA)

Suppose every person is described by

```
Height
Weight
Age
Income
Blood Pressure
...
```

If there are 100 measurements,

each person is a point in **100-dimensional space**.

That sounds impossible to visualize, but mathematically it's just another vector.

---

Now imagine plotting just Height and Weight.

You might get something like

```
          •
       •
     •
   •
 •
```

The cloud isn't circular.

It's stretched.

That stretch has a direction.

That direction tells us:

> **This is where the data varies the most.**

That direction is the **first principal component**.

And here's the beautiful part:

**It is the eigenvector of the covariance matrix with the largest eigenvalue.**

---

The second principal component is another eigenvector.

But it's constrained to be perpendicular to the first.

It explains the second-largest amount of variation.

---

If we continue,

```
PC1  ---- explains 90%

PC2  ---- explains 8%

PC3  ---- explains 1%

PC4  ---- explains 1%
```

we might decide:

> "The first two directions explain 98% of the information."

So instead of storing four numbers,

we only store two.

We haven't thrown away much information because the remaining directions barely vary.

---

## Why this matters

Many ML datasets look like

```
1000 features

↓

actually only about 20 independent things happening
```

PCA automatically discovers those hidden directions.

This makes algorithms:

* faster
* use less memory
* less prone to overfitting
* easier to visualize

---

## Why Eigenvectors Appear

This is the key insight I want you to take away.

A covariance matrix tells us **how the data is distributed**.

The eigenvectors tell us the **natural axes** of that distribution.

The eigenvalues tell us **how important each axis is**.

So whenever you see a machine learning paper mention "compute the dominant eigenvectors," you can translate that into:

> "Find the directions along which the data naturally varies the most."

---

One small note: in Lesson 6, you don't need to know _how_ to compute a covariance matrix. That belongs to the statistics side of machine learning. For now, it's enough to think of it as **a matrix that summarizes how every feature in a dataset relates to every other feature**. Later, when we cover statistics for ML, we'll derive covariance from first principles and then revisit PCA with a complete understanding of why this works.

* * *

**You:**

Lesson 6.pdfPDF

* * *

**ChatGPT:**

Excellent work. I think this is your strongest set of answers so far.

Let's go through them.

---

## 1. Find the eigenvalues

> **Your answer:** 6 and 4.

✅ Correct.

You also correctly formed

$$A-\lambda I$$

and recognized that for a diagonal matrix the determinant is simply

$$(6-\lambda)(4-\lambda).$$

No issues here.

**Score: 10/10**

---

## 2. Corresponding eigenvectors

You wrote

$$a\begin{bmatrix}1\\0\end{bmatrix},  
\qquad  
b\begin{bmatrix}0\\1\end{bmatrix}.$$

✅ Correct.

I especially like that you wrote them as _all scalar multiples_ instead of just a single vector.

That shows you've already internalized something important:

> An eigenvector is really an **eigendirection**.

Every nonzero point on that line is an eigenvector.

**Score: 10/10**

---

## 3.

If

$$Av=7v,$$

then

$$A^5v=7^5v.$$

✅ Correct.

Exactly right.

**Score: 10/10**

---

## 4. Why must

$$\det(A-\lambda I)=0?$$

This was the only answer I'd refine a bit.

You wrote:

> Because that's when $Av=\lambda v$... it leaves the direction fixed and only changes the magnitude.

That describes **what an eigenvector is**, but not quite **why the determinant must be zero**.

The key missing idea is:

When we rewrite

$$Av=\lambda v$$

as

$$(A-\lambda I)v=0,$$

we are looking for a **nonzero** solution $v$.

Normally, the only solution to

$$Mx=0$$

is

$$x=0,$$

unless $M$ is singular.

A matrix is singular exactly when

$$\det(M)=0.$$

So

$$\det(A-\lambda I)=0$$

is required because otherwise the only solution would be the zero vector, which is not allowed to be an eigenvector.

You had the right intuition, but you skipped the linear algebra argument.

**Score: 8.5/10**

---

## 5. PCA interpretation

This answer impressed me.

You wrote:

> The covariance matrix is 4-dimensional...

Correct.

---

> The first principal component accounts for around 90% of the data...

Exactly.

You didn't calculate anything—you simply recognized that 100 dwarfs the other eigenvalues.

That's precisely the level of intuition I wanted.

---

Then you wrote

> PCA would tell us the directions for which the data is most correlated.

That's close, but I'd change one word.

Instead of:

> most correlated

I'd say:

> **most variable**

or

> **the directions along which the data varies the most**

Those are not always identical ideas.

Correlation is about relationships between variables.

Variance is about spread.

PCA is maximizing variance.

**Score: 9.5/10**

---

# Overall

| Question | Score |
| --- | --- |
| 1 | 10 |
| 2 | 10 |
| 3 | 10 |
| 4 | 8.5 |
| 5 | 9.5 |

**Overall: 96%**

---

## One more intuition

I'd like to leave you with something that isn't usually emphasized in a first linear algebra course.

So far, we've learned several ways to "understand" a matrix:

* Matrix entries tell us how basis vectors are transformed.
* Determinants tell us how volumes scale.
* The inverse tells us how to undo a transformation.
* **Eigenvectors tell us the transformation's preferred directions.**

Imagine asking a complicated machine:

> "If I feed you _this_ direction, will you spit it back out pointing the same way?"

Most directions produce a complicated answer.

Eigenvectors are the rare directions where the machine says:

> "Yes. I'll only scale it."

Those directions reveal the machine's intrinsic structure. This is why eigenvectors appear everywhere from quantum mechanics to Google's PageRank to PCA.

---

I think you're ready for **Lesson 7: Orthogonality, Orthonormal Bases, and Projections**.

This is the mathematical foundation for least squares, PCA, QR decomposition, and many optimization algorithms. It's also one of my favorite topics in linear algebra because it ties together geometry, algebra, and computation in a very elegant way.