**You:**

Ready for lesson 10

* * *

**ChatGPT:**

Excellent. We've reached one of the most important topics in applied linear algebra.

# Lesson 10: Singular Value Decomposition (SVD)

Up to now we've learned:

1. Vectors
2. Matrices as linear transformations
3. Matrix multiplication
4. Determinants
5. Matrix inverses
6. Eigenvectors and eigenvalues
7. Change of basis
8. Projection
9. Least squares

Notice the progression:

* Eigenvectors showed us that _some_ matrices have special directions that don't rotate.
* Least squares introduced $A^TA$, which is always symmetric and well-behaved.

Today we're going to combine those ideas into a theorem that works for **every matrix**, even rectangular ones.

The key insight is:

> Every linear transformation can be decomposed into:
> 
> 1. a rotation (or reflection),
> 2. independent stretching along perpendicular axes,
> 3. another rotation (or reflection).

That decomposition is the **Singular Value Decomposition (SVD)**.

Unlike eigendecomposition, **every real matrix has an SVD**.

I've prepared the lesson notes here:

**📄**

---

### What I'd like you to focus on

As you read, don't get caught up in the notation.

Instead, build the geometric picture:

> **Rotate → Stretch → Rotate**

Once that picture "clicks," SVD becomes much easier to remember, and you'll start recognizing it everywhere in machine learning.

---

Complete the five exercises in your notes as usual. Upload your work when you're finished, and we'll go through each answer together before moving on to **Principal Component Analysis**, where SVD becomes a practical tool for understanding high-dimensional data.

* * *

**You:**

What is the initial rotation/reflection that V^T rotating the vector into? I know that we are changing our basis, but in relation to what?

* * *

**ChatGPT:**

This is an excellent question. In fact, this is the question that makes SVD "click."

The short answer is:

> **$$V^T$$ rotates the vector into the coordinate system where the transformation acts as simple scaling.**

But let's unpack what that actually means.

---

### Recall change of basis

Suppose your original vector is

$$x =  
\begin{bmatrix}  
x_1\\  
x_2  
\end{bmatrix}$$

Those coordinates are with respect to the **standard basis**

$$e_1=  
\begin{bmatrix}1\\0\end{bmatrix},  
\qquad  
e_2=  
\begin{bmatrix}0\\1\end{bmatrix}.$$

When we multiply by $V^T$,

$$x' = V^T x,$$

we are **not changing the vector itself**.

We're expressing that same vector in a **new orthonormal basis**.

The natural question is:

> "Where did this new basis come from?"

---

### The new basis is discovered from the matrix

This is the beautiful part.

The basis isn't chosen arbitrarily.

It is **determined by the matrix $A$.**

Specifically,

the columns of $V$ are the eigenvectors of

$$A^T A.$$

Remember Lesson 9?

$A^TA$ is symmetric, so its eigenvectors are

* perpendicular
* unit length
* form a complete basis

Those eigenvectors are exactly the directions that become the axes of the new coordinate system.

---

### Why these directions?

Imagine $A$ turns circles into ellipses.

Some directions get stretched a lot.

Some get stretched a little.

Some maybe not at all.

The eigenvectors of $A^TA$ point exactly along those "principal stretch" directions.

So $V^T$ rotates your coordinate system until its axes line up with those directions.

Once you've done that...

...the transformation becomes incredibly simple.

Instead of shearing and rotating and stretching all at once, it's just

$$\Sigma  
=  
\begin{bmatrix}  
\sigma_1&0\\  
0&\sigma_2  
\end{bmatrix},$$

which scales each axis independently.

---

### Then comes $U$

After the scaling,

the result is still expressed in this special coordinate system.

$U$ rotates it into the final output coordinate system.

So the whole process is

```
Standard basis
      │
      ▼
Vᵀ  → rotate into principal-stretch coordinates

      │
      ▼
Σ   → stretch along those axes

      │
      ▼
U   → rotate into the final output orientation
```

---

### An analogy

Imagine you're carrying a rectangular box through a doorway.

If you try to push it straight through, it won't fit.

First you **rotate the box** until its long edge lines up with the doorway.

Then you slide it straight through.

Finally you rotate it again inside the room.

Nothing magical happened to the box.

You simply found the orientation where the motion became easiest.

SVD does exactly this with linear transformations.

---

### One subtle but important point

You asked:

> "In relation to what?"

The answer is:

* The **input vector** starts in the standard basis.
* $V^T$ changes coordinates into the basis that **the matrix itself prefers**.
* $\Sigma$ acts in that preferred basis.
* $U$ converts from that preferred basis into the output basis.

The "preferred basis" is not something external. It is **intrinsic to the matrix**—it is the set of directions along which the matrix acts as pure stretching, with no mixing between coordinates.

---

I think you're asking exactly the right questions. Once you see SVD as _discovering the coordinate systems in which a complicated transformation becomes a simple diagonal scaling_, PCA and many machine learning algorithms become much more intuitive.

* * *

**You:**

Lesson 10.pdfPDF

* * *

**ChatGPT:**

Nice work. I can tell you're starting to think geometrically rather than mechanically, which is exactly what I want from this course. I'll comment on each answer.

### 1. Geometric decomposition

I can't see your full written answer because it's cut off in the uploaded image, but based on the visible ending ("...respectively"), I assume you described the three stages (rotate, stretch, rotate). If so, that's exactly the right idea.

The important takeaway is:

> SVD isn't just a way to factor a matrix. It's a description of **what the transformation does to space.**

---

### 2. $\Sigma = \operatorname{diag}(5,2)$

Again, the beginning of the answer isn't visible, but if you answered that vectors on the first principal axis are stretched by 5 and vectors on the second are stretched by 2, then that's correct.

Notice the word **principal**. After the $V^T$ rotation, these are the special axes along which no mixing occurs.

---

### 3. Singular value of zero

> "There is a reduction of dimension, as the axis will be collapsed down to zero."

Exactly right.

A singular value of zero means that an entire direction is annihilated.

A 3D object could become a plane.  
A plane could become a line.  
A line could become a point.

This also immediately tells us the matrix is **not invertible**.

**Score:** ✓

---

### 4. Why are the eigenvectors of $A^TA$ orthogonal?

You wrote:

> "$A^TA$ is symmetric. The eigenvectors find the axis of this symmetry."

That's a nice intuition, and your sketch captures the idea well.

I would tighten the wording just a little:

> Since $A^TA$ is symmetric, the **Spectral Theorem** guarantees that eigenvectors corresponding to distinct eigenvalues are orthogonal.

Your phrase "axes of symmetry" is a good geometric picture, even if it's not the formal proof.

**Score:** ✓

---

### 5. Rank-1 approximation

This answer deserves a bit of discussion.

You wrote that the first singular value accounts for roughly 80%, the second about 19%, and the third less than 1%.

The reasoning is excellent, but there's one subtle mathematical mistake.

For SVD, the amount of variance (or "energy") captured is proportional to the **squares** of the singular values, not the singular values themselves.

Here the singular values are

$$100,\;20,\;1$$

so the energies are

$$100^2=10000,\qquad  
20^2=400,\qquad  
1^2=1.$$

Total energy:

$$10000+400+1=10401.$$

Therefore:

* first component: $10000/10401 \approx 96.1\%$
* second component: $400/10401 \approx 3.8\%$
* third component: $1/10401 \approx 0.01\%$

So a rank-1 approximation would retain **over 96%** of the information, not 80%.

This isn't a mistake in your understanding of SVD—it's an easy trap. Even experienced engineers occasionally forget that PCA and SVD use the **squares** of the singular values when measuring explained variance.

---

## Overall

I'd give this **9.5/10**.

The only correction is Question 5's variance calculation. Everything else shows that you're seeing SVD as a geometric object rather than just memorizing $A = U\Sigma V^T$.

### One observation

Over the past ten lessons I've noticed a pattern in how you learn.

When we started, your questions were mostly computational ("How do I calculate this?").

Now they're almost entirely structural:

* _What basis is $$V^T$$ rotating into?_
* _In relation to what?_
* _Why are these the preferred axes?_

Those are the questions that lead to a deep understanding of linear algebra. They're also exactly the kinds of questions that make the next lesson—**Principal Component Analysis (PCA)**—feel almost inevitable instead of like another disconnected algorithm.

I think you're ready for Lesson 11. PCA will mostly be an application of everything you've already learned, rather than introducing much new mathematics.

* * *

**You:**

Lesson 10.pdfPDFIs this better?

* * *

**ChatGPT:**

Yes—Question 1 is significantly stronger now.

> "$V^T$ rotates/reflects the vector acted upon into a coordinate system where the $\Sigma$ transformation is just scaling, and then rotating back into the original coordinate system via $U$."

This is a clear geometric description. If I were grading it, I'd give it full credit.

There are just two small refinements I'd suggest.

First, the last phrase isn't quite precise:

> "...rotating back into the original coordinate system via $U$."

The output isn't necessarily returned to the **original** coordinate system. $U$ rotates into the **output basis**. Those happen to be the same only when $U=I$.

I'd phrase it as:

> "$V^T$ rotates the input into the principal coordinate system, $\Sigma$ stretches along those axes, and $U$ rotates the result into its final orientation."

That's a subtle distinction, but an important one.

---

The only remaining issue is still Question 5.

You are still computing the contribution of each singular value using

$$\frac{100}{121},\quad  
\frac{20}{121},\quad  
\frac{1}{121},$$

but PCA doesn't measure importance that way.

It measures

$$\sigma_1^2,\;  
\sigma_2^2,\;  
\sigma_3^2.$$

So the calculation is

$$\frac{100^2}{100^2+20^2+1^2}  
=  
\frac{10000}{10401}  
\approx96.1\%.$$

This is one of the few places in machine learning where people routinely trip up. The singular values themselves tell you the amount of stretching. The **squares** tell you the variance or energy preserved.

In fact, this is exactly the bridge into Lesson 11. One of the first things we'll prove is that PCA ranks components by the **squared singular values**, not the singular values themselves.

---

One more comment on your drawing for Question 4: I really like it. Your sketch communicates something that many textbooks don't—the idea that changing to the eigenbasis "untangles" the transformation so it acts independently along orthogonal directions. That's the geometric intuition I want you to develop. It will serve you well when we start talking about covariance matrices and principal components.

* * *

**You:**

The squares! Yep. That makes sense. Thanks for the correction.

* * *

**ChatGPT:**

You're welcome. And I actually like that you made that mistake, because it's a very revealing one.

You were thinking:

> "The transformation stretches by 100, 20, and 1, so those are the relative importances."

That's a perfectly reasonable intuition.

The missing insight is that **variance is a quadratic quantity**.

If one direction is stretched by a factor of 10, points don't become "10 times more spread out" in the variance sense—they become **100 times more spread out**.

This is because variance is essentially an average of squared distances from the mean.

That means

* Stretch by 2 → variance ×4
* Stretch by 5 → variance ×25
* Stretch by 10 → variance ×100

That's why PCA ranks components using

$$\sigma_i^2,$$

not

$$\sigma_i.$$

---

One thing I've intentionally been doing over the past few lessons is planting seeds before introducing new topics:

* **Covariance matrix** was mentioned in Lesson 6.
* **Least squares** naturally produced $A^TA$ in Lesson 9.
* **SVD** revealed the eigenvectors and singular values of $A^TA$ in Lesson 10.

Lesson 11 will connect all three. You'll see that PCA isn't really a new algorithm—it's the inevitable consequence of everything you've already learned.

My goal is that when we derive PCA, you'll think:

> "Of course that's the answer."

rather than

> "Here's another formula to memorize."

That's the point where the mathematics starts feeling cohesive instead of like a collection of techniques. I think you're getting very close to that point.