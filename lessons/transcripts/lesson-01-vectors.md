**You:**

Let’s start Lesson 1

* * *

**ChatGPT:**

Excellent. Given what I know about your background, I'm going to assume you're comfortable with proofs, abstraction, and programming. Rather than reteaching undergraduate math, we'll focus on the mathematics that shows up repeatedly in modern machine learning papers.

# Lesson 1 — Vectors as Data

## Goal

By the end of this lesson, you should be comfortable with the idea that almost everything in machine learning is represented as points or transformations in high-dimensional vector spaces.

This idea underlies almost every modern paper.

---

## Why vectors?

Suppose you have an image.

A 1920×1080 RGB image contains

```
1920 × 1080 × 3
= 6,220,800 numbers
```

To a neural network, that image is simply

$$x \in \mathbb{R}^{6,220,800}$$

Likewise:

* a sentence
* a sound clip
* a game state
* a protein
* a customer

can all be represented as vectors.

The rest of machine learning is largely about transforming vectors into other vectors.

---

# Geometry matters

Consider three points

```
Alice
Bob
Carol
```

Instead of names, imagine

```
a = (1,2)

b = (2,2)

c = (9,7)
```

Immediately we can ask

* Which are close?
* Which direction?
* Which cluster?
* Which lie on the same manifold?

Notice none of these questions depend on what the vectors _mean_.

Only their geometry matters.

This is an important philosophical shift.

Machine learning often ignores semantics initially and operates purely on geometry.

---

# Distance

The Euclidean distance is

$$d(x,y)=\|x-y\|$$

where

$$\|x\|  
=  
\sqrt{x_1^2+\cdots+x_n^2}$$

Suppose

$$x=(2,3)$$ $$y=(5,7)$$

Then

$$x-y=(-3,-4)$$

so

$$\|x-y\|=5$$

Nothing surprising yet.

---

# Dot product

The dot product is

$$x\cdot y  
=  
\sum_i x_i y_i$$

Example

$$(1,2,3)\cdot(4,5,6)  
=  
32$$

But the geometric interpretation is more important:

$$x\cdot y  
=  
\|x\|  
\|y\|  
\cos\theta$$

This tells us how aligned two vectors are.

---

## Why ML cares about angle

Suppose

```
A = (1000,1000)

B = (1,1)
```

These represent the same direction.

A document containing every word 1000 times should mean nearly the same thing as one containing each word once.

So many ML algorithms compare

$$\cos\theta  
=  
\frac{x\cdot y}  
{\|x\|\|y\|}$$

instead of Euclidean distance.

This is **cosine similarity**, one of the most common similarity measures in information retrieval, embeddings, and language models.

---

# High dimensions are weird

Suppose we randomly generate vectors.

In 2D, random vectors point everywhere.

In 1000 dimensions,

almost all random vectors are nearly perpendicular.

That sounds bizarre, but it's a consequence of the geometry of high-dimensional spaces. As the dimension increases, the distribution of angles between random vectors concentrates around 90°. This fact explains why designing useful embeddings is hard: meaningful relationships must stand out against a background where "random" already looks orthogonal.

We'll return to this when we discuss the **curse of dimensionality**.

---

# Linear combinations

Given vectors

$$v_1,v_2,\dots,v_n$$

a linear combination is

$$a_1v_1+\cdots+a_nv_n$$

Everything in linear algebra is built on this idea.

Neural networks repeatedly compute expressions of the form

$$Wx+b$$

which is just a structured linear combination followed by a nonlinear function.

---

# Mental model

Rather than thinking

> "This neuron detects cats"

think

> "This layer rotates, stretches, and translates one vector space into another."

This geometric viewpoint scales from the first layer of a small network to the attention mechanism in large language models.

---

# Exercises

1. Compute the Euclidean distance between: $$(2,1,4)  
    \quad\text{and}\quad  
    (1,3,0)$$
2. Compute the dot product: $$(2,-1,5)  
    \cdot  
    (4,3,-2)$$
3. Show that if two nonzero vectors are orthogonal, their cosine similarity is zero.
4. Without calculating, explain why cosine similarity would judge `(10, 10, 10)` and `(1, 1, 1)` to be identical, while Euclidean distance would not.
5. Consider the set of all vectors of the form $$(a,b,a+b).$$ Is this set a vector subspace of $\mathbb{R}^3$? If so, what is its dimension?

---

## Looking ahead

If this lesson establishes **what data is** (vectors), Lesson 2 will cover **what models do**: linear maps, matrices, basis changes, rank, and why matrix multiplication is the core operation in neural networks. That lesson will connect directly to GPU computation and should feel familiar given your graphics and HLSL experience.

* * *

**You:**

1. 21
2. -5
3. Orthogonality means that the angle between them is pi/2. cos(pi/2) =0 
4. Vector a is just a scaled version of b. It has a larger magnitude, but they have the same angle, and therefore the angle between them is 0. cos(0) =1
5. It is a subspace of R^3, assuming that a and b are confined to the Real numbers. It’s dimension is 2, because the third value is completely defined by the first two values.

* * *

**ChatGPT:**

Good work. Only #1 needs correction.

$$(2,1,4)-(1,3,0)=(1,-2,4)$$ $$\sqrt{1^2+(-2)^2+4^2}=\sqrt{21}$$

So the **squared distance** is 21, but the Euclidean distance is:

$$\sqrt{21}$$

2. Correct:

$$8-3-10=-5$$

3. Correct.
4. Correct.
5. Correct. More explicitly:

$$(a,b,a+b)=a(1,0,1)+b(0,1,1)$$

Those two spanning vectors are linearly independent, so the subspace has dimension 2.

# Lesson 1 takeaway

You’ve got the core idea: magnitude and direction are different kinds of information, and ML often cares about one, the other, or both depending on the representation.

Next lesson: matrices as linear transformations.