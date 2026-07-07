**You:**

Lesson 3

* * *

**ChatGPT:**

Great. Let's continue.

# Lesson 3 — Matrix Multiplication and Composition

So far we've established:

* **Lesson 1:** Vectors are points, directions, and elements of vector spaces.
* **Lesson 2:** A matrix is a linear transformation. Its columns tell you where the basis vectors end up.

Today we'll answer:

> **What does multiplying two matrices actually mean?**

---

## Core Idea

A matrix is a function.

If

$$A:\mathbb{R}^n \rightarrow \mathbb{R}^m$$

and

$$B:\mathbb{R}^m \rightarrow \mathbb{R}^k$$

then

$$BA$$

means

> Apply **A first**, then apply **B**.

Exactly like function composition:

$$(B\circ A)(x)=B(A(x))$$

This is why the order matters.

---

## Example

Let

$$A=  
\begin{bmatrix}  
2&0\\  
0&1  
\end{bmatrix}$$

(stretch x)

and

$$B=  
\begin{bmatrix}  
0&-1\\  
1&0  
\end{bmatrix}$$

(rotate 90° counter-clockwise)

Take

$$v=  
\begin{bmatrix}  
1\\  
2  
\end{bmatrix}$$

### Step 1

Stretch:

$$Av=  
\begin{bmatrix}  
2\\  
2  
\end{bmatrix}$$

### Step 2

Rotate:

$$BAv=  
\begin{bmatrix}  
-2\\  
2  
\end{bmatrix}$$

Instead of doing those two operations every time, we can combine them into one matrix.

---

## Where Matrix Multiplication Comes From

Suppose we want

$$BA.$$

Don't memorize the multiplication rule.

Instead ask:

> **Where does the combined transformation send each basis vector?**

Remember:

The columns of a matrix **are the images of the basis vectors.**

The columns of $A$ are

$$Ae_1=  
\begin{bmatrix}  
2\\  
0  
\end{bmatrix},  
\qquad  
Ae_2=  
\begin{bmatrix}  
0\\  
1  
\end{bmatrix}.$$

Now apply $B$.

First column:

$$B  
\begin{bmatrix}  
2\\  
0  
\end{bmatrix}  
=  
\begin{bmatrix}  
0\\  
2  
\end{bmatrix}$$

Second column:

$$B  
\begin{bmatrix}  
0\\  
1  
\end{bmatrix}  
=  
\begin{bmatrix}  
-1\\  
0  
\end{bmatrix}$$

Therefore

$$BA=  
\begin{bmatrix}  
0&-1\\  
2&0  
\end{bmatrix}$$

Notice:

We never used the row-by-column algorithm.

We only asked:

> "Where do the basis vectors end up after both transformations?"

The familiar multiplication algorithm is just a shortcut for computing those transformed basis vectors.

---

## Why Order Matters

Now compute

$$AB.$$

This means

Rotate first.

Stretch second.

The result is

$$AB=  
\begin{bmatrix}  
0&-2\\  
1&0  
\end{bmatrix}$$

Different matrix.

Different transformation.

Most linear transformations **do not commute**.

---

## Geometric Intuition

Imagine a rubber sheet.

* Matrix A stretches it.
* Matrix B rotates it.

Stretch then rotate:

```
□
↓

▭
↓

◇
```

Rotate then stretch:

```
□
↓

◇
↓

⬭
```

These are visibly different.

---

# Exercises

### 1.

Without multiplying matrices, explain in your own words why

$$BA$$

means "apply A first, then B."

---

### 2.

Suppose

$$A=  
\begin{bmatrix}  
1&0\\  
0&3  
\end{bmatrix}$$

and

$$B=  
\begin{bmatrix}  
0&1\\  
1&0  
\end{bmatrix}$$

Without doing row-by-column multiplication, determine the columns of $BA$.

(Hint: transform each basis vector.)

---

### 3.

Why is it enough to know where a linear transformation sends the basis vectors in order to know what it does to every vector?

---

This lesson is a turning point. Once you're comfortable viewing matrices as _functions_ and multiplication as _composition_, later topics—change of basis, eigenvectors, singular value decomposition, and neural network layers—become much more intuitive.

* * *

**You:**

Lesson 3.pdfPDF

* * *

**ChatGPT:**

Excellent work. I can see from your notes and diagrams that you're starting to think in terms of transformations instead of matrix arithmetic, which is exactly the goal.

### Exercise 1

> Give A stretches a vector, B rotates a vector by π/2, describe BA.

Your answer:

> "BA(v) = (B∘A)(v), 'B after A'. Matrix multiplication is isomorphic to function composition."

That's exactly right. I particularly liked that you connected it to category theory:

* Objects → vector spaces
* Morphisms → linear transformations (represented by matrices once a basis is chosen)
* Identity morphism → identity matrix

That's a very natural way to think about linear algebra if you already know category theory.

---

### Exercise 2

You reasoned geometrically instead of multiplying entries.

You found

$$A=\begin{bmatrix}1&0\\0&3\end{bmatrix}$$

stretches the $y$-axis, and

$$B=\begin{bmatrix}0&1\\1&0\end{bmatrix}$$

swaps the axes (reflection across $y=x$).

You correctly tracked the basis vectors:

* $$e_1 \mapsto (1,0) \mapsto (0,1)$$
* $$e_2 \mapsto (0,3) \mapsto (3,0)$$

giving

$$BA=  
\begin{bmatrix}  
0&3\\  
1&0  
\end{bmatrix}.$$

Perfect.

---

### Exercise 3

Your answer is essentially correct.

I would tighten the explanation slightly:

> Every vector can be written uniquely as a linear combination of the basis vectors. Since linear transformations preserve addition and scalar multiplication,
> 
> $$T(ae_1+be_2)=aT(e_1)+bT(e_2).$$
> 
> Therefore, once we know $T(e_1)$ and $T(e_2)$, we automatically know $T(v)$ for every vector $v$.

This is one of the central ideas of linear algebra. Matrices are simply a compact way to record those transformed basis vectors.

---

## One observation

You wrote:

> "Category of matrices"

I'd make one subtle distinction.

More precisely, there are two closely related categories:

* **Vect**: objects are vector spaces, morphisms are linear transformations.
* **Mat**: objects are natural numbers (dimensions), morphisms are matrices.

Once you've chosen a basis for each vector space, these categories are equivalent. That's why your intuition works so well—the matrix is a concrete representation of the abstract linear map.

---

## Assessment

* **Conceptual understanding:** 10/10
* **Geometric intuition:** 10/10
* **Connection to category theory:** Excellent
* **Reliance on rote computation:** Very little (which is exactly what we're aiming for)

You're learning linear algebra the way it's used in machine learning and modern mathematics: transformations first, computations second.

---

## Next Lesson

**Lesson 4: Invertibility, Rank, and Why Some Information Is Lost**

We'll answer questions like:

* What makes a matrix invertible?
* Why do some transformations destroy information?
* What is rank, geometrically?
* Why can't non-square matrices usually have inverses?
* How does this relate to dimensionality reduction and neural networks?

This is where linear algebra starts connecting directly to machine learning.