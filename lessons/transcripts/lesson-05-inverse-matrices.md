**You:**

Lesson 5

* * *

**ChatGPT:**

Excellent. So far we've covered:

1. Vectors
2. Matrices as linear transformations
3. Matrix multiplication
4. Determinants

That gives us the foundations. The next major concept is one of the most important in all of linear algebra.

# Lesson 5: Inverse Matrices

## Motivation

Imagine you rotate an object 30°.

How do you undo it?

You rotate it **−30°**.

Matrices work the same way.

If a matrix transforms vectors one way, an **inverse matrix** transforms them back.

$$A^{-1}(A\mathbf{x})=\mathbf{x}$$

The inverse "cancels" the original transformation.

---

## A Simple Example

Suppose

$$A=  
\begin{bmatrix}  
2&0\\  
0&2  
\end{bmatrix}$$

This doubles every vector.

For example,

$$\begin{bmatrix}  
3\\  
4  
\end{bmatrix}  
\rightarrow  
\begin{bmatrix}  
6\\  
8  
\end{bmatrix}$$

To undo that, divide everything by 2.

The inverse is

$$A^{-1}=  
\begin{bmatrix}  
\frac12&0\\  
0&\frac12  
\end{bmatrix}$$

Notice

$$A^{-1}A=  
\begin{bmatrix}  
1&0\\  
0&1  
\end{bmatrix}$$

which is the **identity matrix**.

---

## The Identity Matrix

The identity matrix is the linear algebra equivalent of the number 1.

$$I=  
\begin{bmatrix}  
1&0\\  
0&1  
\end{bmatrix}$$

Multiplying by it changes nothing.

$$I\mathbf{x}=\mathbf{x}$$

Just like

$$1\times5=5$$

---

## Which Matrices Have Inverses?

Not all of them.

Recall from last lesson:

* determinant > 0 → preserves orientation
* determinant < 0 → flips orientation
* determinant = 0 → squashes space

A squashed space can't be unsquashed.

If

$$\det(A)=0$$

then **no inverse exists**.

This is why the determinant matters.

---

## Geometric Interpretation

Imagine flattening a cube into a sheet of paper.

Many different points now occupy the same location.

Once that information is lost, there is no unique way to recover it.

No inverse exists.

---

## Example

$$A=  
\begin{bmatrix}  
1&2\\  
2&4  
\end{bmatrix}$$

The second row is twice the first.

Everything gets projected onto a line.

Its determinant is

$$1\cdot4-2\cdot2=0$$

Therefore

$$A^{-1}$$

does not exist.

---

## Solving Linear Systems

Suppose we have

$$A\mathbf{x}=\mathbf{b}$$

If an inverse exists,

$$A^{-1}A\mathbf{x}=A^{-1}\mathbf{b}$$

which becomes

$$\mathbf{x}=A^{-1}\mathbf{b}$$

This is one reason inverse matrices are useful.

In practice, numerical software usually avoids computing the inverse directly and instead solves the system using methods like LU decomposition, because they're faster and more stable.

---

## Why Machine Learning Cares

Inverse matrices appear throughout machine learning:

* Solving least-squares regression
* Estimating covariance matrices
* Bayesian inference
* Kalman filters
* Whitening data
* Gaussian distributions
* Optimization algorithms

However, modern ML often works with matrices too large to invert directly, so specialized algorithms solve equivalent systems without explicitly computing the inverse.

---

# Exercises

### 1.

What is

$$I  
\begin{bmatrix}  
7\\  
-2  
\end{bmatrix}$$

---

### 2.

Find the inverse of

$$\begin{bmatrix}  
3&0\\  
0&3  
\end{bmatrix}$$

---

### 3.

Without calculating anything else, does this matrix have an inverse?

$$\begin{bmatrix}  
1&2\\  
3&6  
\end{bmatrix}$$

Why?

---

### 4.

Suppose

$$A=  
\begin{bmatrix}  
0&-1\\  
1&0  
\end{bmatrix}$$

This rotates vectors by 90°.

What geometric transformation should $A^{-1}$ perform?

---

### 5. (Conceptual)

Why does a determinant of zero guarantee that no inverse exists? Explain it geometrically rather than algebraically.

---

Take your time with these. I'll review your answers and then we'll move on to eigenvectors and eigenvalues, where many of the ideas from the first five lessons come together.

* * *

**You:**

Lesson 5.pdfPDF

* * *

**ChatGPT:**

Excellent work. I think this was your strongest lesson so far.

Here's my feedback.

### 1. Identity matrix ✓

Correct.

You not only gave the answer

$$\begin{bmatrix}7\\-2\end{bmatrix}$$

but justified it from the defining property of the identity matrix. That's exactly the right way to think about it.

---

### 2. Inverse of $3I$ ✓

Correct.

I especially liked your derivation:

$$AA^{-1}=I$$ $$3IA^{-1}=I$$ $$A^{-1}=\frac13I$$

Most people simply recognize the pattern immediately, but proving it algebraically shows you understand _why_ it works.

---

### 3. Is the matrix invertible? ✓+

This answer goes beyond what I expected.

You observed that

* one column is twice the other,
* the image collapses onto a line,
* the determinant is therefore zero,
* the transformation is not injective (many inputs map to one output),
* therefore it cannot be bijective and cannot have an inverse.

That's a complete chain of reasoning.

I also liked the sketch. The colored points mapping onto the same line demonstrates the information loss visually.

One small terminology note:

> "all vectors are transformed onto a line, which has zero volume"

I'd phrase it as

> "the image of the transformation is one-dimensional, so every parallelogram has zero area."

In 2D we usually talk about **area**, and in higher dimensions **volume**, but your intuition is exactly right.

---

### 4. Inverse of a rotation ✓+

Exactly.

A 90° counterclockwise rotation is undone by a 90° clockwise rotation.

I smiled at your complex-number observation:

$$A \cong i$$

so

$$A^{-1}\cong -i.$$

That's a nice connection. Rotation matrices and multiplication by complex numbers are two views of the same operation.

---

### 5. Why does determinant zero imply no inverse? ✓

Also correct.

The important idea is exactly what you wrote:

> Any volume becomes zero.

Once a region has been collapsed to zero area (or volume), there is no transformation that can recover the original shape uniquely. The information has been destroyed.

This geometric viewpoint is much more valuable than memorizing "determinant zero means no inverse."

---

# Overall

**Score: 5/5**

More importantly, I noticed something about your reasoning.

In Lesson 1, you were mostly recalling definitions.

By Lesson 5, you're connecting ideas across topics:

* determinants ↔ invertibility
* linear dependence ↔ dimension collapse
* injectivity ↔ existence of inverses
* rotation matrices ↔ complex multiplication

That's exactly the kind of interconnected understanding that makes advanced linear algebra much easier.

## Looking ahead

The next lesson is one of the biggest milestones in linear algebra:

**Lesson 6: Eigenvectors and Eigenvalues**

This is where many of the concepts you've learned start to come together. Eigenvectors identify directions that a transformation leaves unchanged (except for scaling), and eigenvalues tell you how much those directions are stretched or compressed. These ideas are central to PCA, spectral clustering, graph neural networks, diffusion models, and many optimization algorithms in machine learning.

I think you'll enjoy this one—it has a satisfying geometric interpretation and connects naturally to the transformation viewpoint you've been building over the past five lessons.