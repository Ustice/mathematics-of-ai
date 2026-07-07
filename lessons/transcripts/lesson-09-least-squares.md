**You:**

I’m ready for lesson 9.

* * *

**ChatGPT:**

Excellent. Last lesson we learned that a projection matrix is a linear transformation that "drops" vectors onto a subspace while leaving vectors already in that subspace unchanged.

So far we've built a toolkit:

1. Vectors
2. Matrices as linear transformations
3. Matrix multiplication
4. Determinants
5. Inverses
6. Eigenvectors & eigenvalues
7. Change of basis
8. Projection

At this point we're ready to learn the concept that appears everywhere in machine learning.

# Lesson 9: Least Squares

## Motivation

Imagine you have experimental data:

| x | y |
| --- | --- |
| 1 | 2.1 |
| 2 | 3.8 |
| 3 | 6.2 |
| 4 | 7.9 |

You suspect the relationship is roughly

$$y=ax+b$$

but the points don't lie exactly on a line because of measurement noise.

How do we choose the _best_ line?

---

## Why not just solve it?

If there were only two points,

$$\begin{aligned}  
ax_1+b &= y_1\\  
ax_2+b &= y_2  
\end{aligned}$$

there would usually be one exact solution.

With four points,

$$\begin{aligned}  
a(1)+b &=2.1\\  
a(2)+b &=3.8\\  
a(3)+b &=6.2\\  
a(4)+b &=7.9  
\end{aligned}$$

we have **4 equations but only 2 unknowns**.

Usually no exact solution exists.

This is called an **overdetermined system**.

---

## Matrix form

We can write it as

$$A\mathbf{x}=\mathbf b$$

where

$$A=  
\begin{bmatrix}  
1&1\\  
2&1\\  
3&1\\  
4&1  
\end{bmatrix}$$ $$\mathbf{x}=  
\begin{bmatrix}  
a\\  
b  
\end{bmatrix}$$ $$\mathbf b=  
\begin{bmatrix}  
2.1\\  
3.8\\  
6.2\\  
7.9  
\end{bmatrix}$$

Notice

* $A$ is **4×2**
* not square
* no inverse exists.

So what now?

---

# Geometric interpretation

This is where everything we've learned comes together.

The columns of $A$ span a plane inside $\mathbb R^4$.

Every possible prediction

$$A\mathbf x$$

lies somewhere in that plane.

But the observed data

$$\mathbf b$$

probably **doesn't**.

So we ask:

> Which point in the plane is closest to **b**?

That should sound familiar.

It is exactly a **projection** problem.

We're projecting **b** onto the column space of $A$.

---

## The error vector

Suppose our prediction is

$$A\hat x$$

The difference is

$$\mathbf e  
=  
\mathbf b-A\hat x$$

called the **residual** or **error vector**.

Projection tells us something remarkable:

The shortest error occurs precisely when

$$\mathbf e$$

is orthogonal to every vector in the column space.

Just like projecting onto a line.

---

## Orthogonality condition

If the error is perpendicular to every column of $A$,

then

$$A^T(\mathbf b-A\hat x)=0$$

Expand it:

$$A^TA\hat x=A^Tb$$

These are called the **normal equations**.

This is one of the most important equations in applied mathematics.

---

## Why this works

Notice what happened.

We started with

$$A\mathbf x=\mathbf b$$

which had **no solution**.

Multiplying by $A^T$ gives

$$A^TA\mathbf x=A^Tb$$

Now

* $A^TA$ is square.
* If the columns of $A$ are linearly independent, then $A^TA$ is invertible.

So we can solve

$$\hat x=(A^TA)^{-1}A^Tb$$

This gives the coefficients of the best-fitting line.

---

# Why machine learning cares

Suppose

* each row is one house
* columns are
    * square footage
    * bedrooms
    * age
    * garage size
    * lot size

Then

$$A=  
\begin{bmatrix}  
\text{house}_1\\  
\text{house}_2\\  
\vdots  
\end{bmatrix}$$

and

$$\mathbf b$$

contains the sale prices.

Least squares finds the weights that best predict price.

This is **linear regression**.

Many machine learning models are extensions of this idea.

---

# Connection to previous lessons

Every lesson we've done contributes here:

* **Matrix multiplication** computes predictions $A\mathbf{x}$.
* **Change of basis** explains what the columns of $A$ represent.
* **Projection** gives the geometric meaning of "best fit."
* **Inverse matrices** solve the normal equations.
* **Eigenvalues** will soon explain why some least-squares problems are easy and others are numerically unstable.

Least squares is one of the central bridges between linear algebra and machine learning.

---

# Exercises

### 1. Conceptual

Why does an overdetermined system usually not have an exact solution?

---

### 2. Geometry

In one sentence:

What geometric operation is least squares performing?

---

### 3. Orthogonality

Suppose the best approximation is $A\hat x$.

What is true about the residual vector

$$\mathbf e=\mathbf b-A\hat x?$$

---

### 4. Dimensions

If $A$ is $10\times3$,

what are the dimensions of:

* $$A^T$$
* $$A^TA$$
* $$A^Tb$$

---

### 5. Derivation

Starting with

$$A^T(b-Ax)=0,$$

expand it algebraically to obtain the normal equations.

---

Take your time with these. This lesson is a conceptual turning point: once least squares clicks, many machine learning algorithms become variations on the same geometric idea—finding the projection of data onto a model's subspace.

* * *

**You:**

Lesson 9.pdfPDF

* * *

**ChatGPT:**

Nice work. This lesson seems to have clicked quickly for you.

### 1. Why does an overdetermined system usually not have an exact solution?

✅ Correct.

Your explanation captures the essential idea: each equation is another constraint, and with real-world data those constraints usually conflict because of noise or measurement error. The key phrase is:

> "...we will encounter contradictions, making an exact solution impossible."

That's exactly right.

---

### 2. What operation is least squares performing?

✅ Correct.

You wrote:

> "...projects the data onto the subspace of predictions in such a way as to minimize the error..."

That's precisely the geometric interpretation I was hoping you'd make. I especially like that you connected it directly to linear regression instead of treating it as an abstract algebraic procedure.

---

### 3. What is true of the residual?

✅ Correct.

You identified the important property:

> The residual is orthogonal to every vector in the column space.

That's the defining property of the least-squares solution.

The additional comment that it minimizes the approximation error is also correct.

---

### 4. Matrix dimensions

All correct.

* $A^T$: $3\times10$ ✓
* $A^TA$: $3\times3$ ✓
* $A^Tb$: $3\times1$ ✓

Your dimensional annotations are becoming second nature, which is excellent. That's a habit that will save you from many mistakes later on.

---

### 5. Expand the normal equations

Perfect.

You expanded

$$A^T(b-A\hat{x})=0$$

to

$$A^Tb-A^TA\hat{x}=0$$

then

$$A^Tb=A^TA\hat{x},$$

and finally

$$\hat{x}=(A^TA)^{-1}A^Tb.$$

Everything is correct.

I also noticed you did a dimensional check at the end. That's exactly the kind of engineering instinct that translates well into linear algebra. In practice, dimensional consistency catches a surprising number of errors.

---

# Overall

I'd give this lesson **10/10**.

The progression of your understanding has been noticeable:

* Lessons 1–3: mostly manipulating vectors and matrices.
* Lessons 4–6: understanding _why_ the algebra works.
* Lessons 7–9: reasoning geometrically about linear transformations, projections, and optimization.

That geometric perspective is the foundation of modern machine learning.

---

## Looking ahead

Lesson 10 will introduce the **Singular Value Decomposition (SVD)**.

In my view, SVD is the single most important result in linear algebra for machine learning. It unifies many of the concepts we've already covered:

* eigenvectors
* change of basis
* projections
* least squares
* principal component analysis (which we briefly mentioned in Lesson 6)

By the end of Lesson 10, you'll understand why PCA works, why every matrix has "principal directions," and why SVD is the workhorse behind dimensionality reduction, recommendation systems, image compression, and many optimization algorithms.

I'm looking forward to that lesson—it's where many of the pieces we've built over the last nine lessons come together.