**You:**

I’m ready for Lesson 7

* * *

**ChatGPT:**

Excellent. So far we've built up the core pieces of linear algebra:

1. Vectors
2. Matrices as linear transformations
3. Matrix multiplication
4. Determinants
5. Inverse matrices
6. Eigenvalues and eigenvectors

Lesson 7 is where these ideas come together.

# Lesson 7: Orthogonal Matrices and Change of Basis

## Why this matters

Up until now we've always assumed there was one "correct" coordinate system.

Machine learning almost never does that.

One of the biggest ideas in linear algebra is:

> The data doesn't change.  
> Only our description of it changes.

Changing coordinates can make a complicated problem become simple.

This is exactly what PCA does—it finds a better coordinate system.

---

# Part 1 — Coordinates are arbitrary

Imagine the vector

$$v=\begin{bmatrix}3\\4\end{bmatrix}$$

Those aren't properties of the vector.

Those are its coordinates in **one basis**.

If we rotate our axes by 90°, the same vector suddenly has coordinates

$$\begin{bmatrix}  
4\\  
-3  
\end{bmatrix}$$

Nothing moved.

Only the measuring sticks changed.

This is a subtle but important shift in thinking.

---

# Part 2 — Bases

The standard basis is

$$e_1=  
\begin{bmatrix}  
1\\0  
\end{bmatrix},  
\qquad  
e_2=  
\begin{bmatrix}  
0\\1  
\end{bmatrix}$$

Every vector is

$$x e_1+y e_2$$

But we could instead use

$$u_1=  
\begin{bmatrix}  
1\\1  
\end{bmatrix},  
\qquad  
u_2=  
\begin{bmatrix}  
1\\-1  
\end{bmatrix}$$

These are also independent, so they form a basis.

Now every vector can be written

$$a u_1+b u_2$$

Different coordinates.

Same vector.

---

# Part 3 — Orthogonal vectors

Two vectors are orthogonal if

$$u\cdot v=0$$

Example

$$\begin{bmatrix}  
1\\1  
\end{bmatrix}  
\cdot  
\begin{bmatrix}  
1\\-1  
\end{bmatrix}  
=  
1-1=0$$

So these basis vectors are perpendicular.

Orthogonal bases are much easier to work with.

---

# Part 4 — Orthonormal bases

Even better:

Orthogonal **and** length 1.

For example

$$\frac1{\sqrt2}  
\begin{bmatrix}  
1\\1  
\end{bmatrix},  
\qquad  
\frac1{\sqrt2}  
\begin{bmatrix}  
1\\-1  
\end{bmatrix}$$

These satisfy

* length = 1
* perpendicular

This is an **orthonormal basis**.

---

# Part 5 — Orthogonal matrices

If the columns of a matrix are an orthonormal basis, something remarkable happens.

Example

$$Q=  
\frac1{\sqrt2}  
\begin{bmatrix}  
1&1\\  
1&-1  
\end{bmatrix}$$

Compute

$$Q^TQ$$

You get

$$I$$

Always.

So

$$Q^{-1}=Q^T$$

This is one of the nicest matrix identities in all of mathematics.

Instead of computing an inverse...

...you just transpose.

---

# Why?

Because the columns are

* unit length
* perpendicular

No information is stretched or squashed.

The transformation only rotates or reflects space.

Distances stay the same.

Angles stay the same.

---

# Part 6 — Rotation matrices

The classic example:

$$R=  
\begin{bmatrix}  
\cos\theta&-\sin\theta\\  
\sin\theta&\cos\theta  
\end{bmatrix}$$

This rotates every vector by $\theta$.

Check:

$$R^TR=I$$

Always.

Rotations preserve

* lengths
* angles
* dot products

Machine learning algorithms often rely on these preserved quantities.

---

# Part 7 — Change of basis

Suppose the columns of $Q$ are your new basis vectors.

If

$$x=  
\begin{bmatrix}  
3\\4  
\end{bmatrix}$$

then the coordinates in the new basis are

$$Q^Tx$$

Notice we didn't compute an inverse.

Because

$$Q^{-1}=Q^T.$$

This is why orthogonal matrices are everywhere in numerical computing—they're efficient and numerically stable.

---

# Part 8 — Connection to PCA

Recall the covariance matrix from Lesson 6.

Its eigenvectors are perpendicular.

After normalizing them, they become an orthonormal basis.

Stack those eigenvectors as columns:

$$Q=  
[v_1\ v_2\ \cdots]$$

Then

$$Q^Tx$$

expresses every data point in a new coordinate system.

This new coordinate system has a special property:

* the coordinates are uncorrelated,
* the first coordinate captures as much variance as possible,
* the second captures the next most,
* and so on.

That is the heart of PCA.

---

# Intuition

Think of watching a football game.

One camera points north-south.

Another points down the field.

The players don't move differently.

Only the camera angle changes.

PCA chooses the camera angle that best explains the data.

---

# Exercises

### 1.

Are these vectors orthogonal?

$$\begin{bmatrix}  
2\\1  
\end{bmatrix},  
\quad  
\begin{bmatrix}  
1\\-2  
\end{bmatrix}$$

---

### 2.

Find the length of

$$\begin{bmatrix}  
3\\4  
\end{bmatrix}$$

Normalize it.

---

### 3.

Show that

$$\frac1{\sqrt2}  
\begin{bmatrix}  
1\\1  
\end{bmatrix}$$

has length 1.

---

### 4.

Verify that

$$Q=  
\frac1{\sqrt2}  
\begin{bmatrix}  
1&1\\  
1&-1  
\end{bmatrix}$$

satisfies

$$Q^TQ=I.$$

Show the intermediate matrix multiplication rather than just stating the result.

---

### 5.

Suppose your data point is

$$x=  
\begin{bmatrix}  
2\\0  
\end{bmatrix}$$

Compute

$$Q^Tx$$

using the same matrix $Q$ above.

Interpret what the two resulting coordinates mean in terms of the new basis vectors.

---

This lesson introduces a conceptual shift that underlies much of modern machine learning. The next lesson will build directly on it by introducing the **Singular Value Decomposition (SVD)**, which generalizes eigenvectors to _every_ matrix—not just square ones—and forms the foundation for PCA implementations, recommendation systems, and many large-scale ML algorithms.

* * *

**You:**

Lesson 7.pdfPDF

* * *

**ChatGPT:**

Nice work. This was one of the strongest submissions you've turned in so far.

You seem to have crossed an important threshold: you're no longer just applying formulas, you're starting to reason geometrically. Your diagrams and explanations are becoming part of your proofs, which is exactly how experienced mathematicians think.

Here are a few comments.

---

### 1. Orthogonality

Perfect.

You computed

$$2(1)+1(-2)=0$$

which is sufficient.

I especially liked that you independently verified it with the Pythagorean theorem. That's not something I asked for, but it's a good consistency check.

---

### 2. Normalization

Exactly right.

$$\|a\|=5,\qquad  
\hat a=\begin{bmatrix}3/5\\4/5\end{bmatrix}$$

No issues.

---

### 3. Unit vector

Correct.

You showed

$$\left\|\frac1{\sqrt2}  
\begin{bmatrix}1\\1\end{bmatrix}\right\|  
=  
1.$$

That's all that was needed.

---

### 4. Showing $Q^TQ=I$

Excellent.

Your matrix multiplication is clean, and I particularly liked the observation

$$\begin{bmatrix}  
a&c\\  
b&d  
\end{bmatrix}  
\begin{bmatrix}  
x\\y  
\end{bmatrix}  
=  
x  
\begin{bmatrix}  
a\\b  
\end{bmatrix}  
+  
y  
\begin{bmatrix}  
c\\d  
\end{bmatrix}.$$

That decomposition into a linear combination of the columns is something we'll use repeatedly in later lessons.

---

### 5. Change of basis

Your computation is correct.

$$Q^Tx=  
\begin{bmatrix}  
2/\sqrt2\\  
2/\sqrt2  
\end{bmatrix}  
=  
\begin{bmatrix}  
\sqrt2\\  
\sqrt2  
\end{bmatrix}.$$

Your picture also captures the important idea:

* the vector itself doesn't move,
* the basis rotates,
* only the coordinates change.

That's the conceptual point I was hoping you'd internalize.

---

## One small correction

At the bottom you wrote

> $Q^T$ results in a rotation of the coordinate system by $\pi/4$ counter-clockwise.

It's almost right, but there's a subtle distinction.

The matrix

$$Q=  
\frac1{\sqrt2}  
\begin{bmatrix}  
1&1\\  
1&-1  
\end{bmatrix}$$

actually has determinant

$$\det(Q)=-1,$$

so it is **not** a pure rotation. It is a **reflection** (across the line $y=x$), expressed in an orthonormal basis.

Because the columns are at $45^\circ$ and $-45^\circ$, it's easy to visually interpret it as a rotated coordinate system, but mathematically it's an improper orthogonal matrix (determinant $-1$), not a rotation matrix (which must have determinant $+1$).

This distinction will become useful when we study SVD.

---

## Overall

I'd score this **10/10**.

More importantly, your reasoning has changed.

A few lessons ago, your work was mostly symbolic manipulation. Now you're routinely:

* drawing geometric interpretations,
* checking answers from multiple perspectives,
* preserving invariants (like vector length),
* thinking in terms of coordinate systems instead of just matrices.

That's exactly the progression I was hoping for.

---

## Looking ahead

Lesson 8 is one of the biggest milestones in applied linear algebra:

> **Singular Value Decomposition (SVD)**

You'll discover that **every** matrix—not just square ones, and not just diagonalizable ones—can be decomposed into three simple transformations:

1. Rotate (or reflect) the input space.
2. Stretch or compress along perpendicular directions.
3. Rotate (or reflect) again.

Once you understand SVD, you'll have the mathematical foundation behind PCA, latent semantic analysis, recommendation systems, image compression, and many modern machine learning algorithms. It's one of the most powerful ideas in linear algebra, and everything we've done so far has been preparing for it.