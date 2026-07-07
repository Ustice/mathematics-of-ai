**You:**

I’m ready for lesson 11. Let’s keep it in here, please,  rather than in a pdf, as that’s easier for me to work with.

* * *

**ChatGPT:**

Perfect. I actually think this format will work better for our discussions.

# Lesson 11: Principal Component Analysis (PCA)

Up until now we've built almost every mathematical tool needed:

1. Vectors
2. Matrices
3. Matrix multiplication
4. Determinants
5. Inverses
6. Eigenvalues & Eigenvectors
7. Change of basis
8. Projection
9. Least Squares
10. Singular Value Decomposition (SVD)

Today's lesson ties almost everything together.

---

# Motivation

Suppose you have measurements of thousands of people.

For each person you record:

* Height
* Weight
* Arm span
* Leg length
* Shoe size
* Chest circumference

Each person is now a vector in **ℝ⁶**.

Suppose you instead have an image.

Each pixel brightness becomes one dimension.

A 512×512 grayscale image lives in

$$\mathbb{R}^{262144}$$

That sounds impossible to reason about.

PCA answers:

> **What are the important directions in this enormous space?**

---

# First Observation

Imagine plotting only two measurements:

Height

vs.

Weight

The data might look like

```
Weight

 ^
 |
 |            •
 |         •
 |      •
 |   •
 | •
 +-------------------->
        Height
```

The points don't fill the plane.

Instead they lie roughly along a line.

That means

The two variables aren't independent.

Knowing someone's height tells you a lot about their weight.

---

# The Key Insight

Instead of describing people by

```
Height
Weight
```

we'd rather describe them by

```
Overall body size
Difference from average proportions
```

Those are better coordinates.

PCA discovers those coordinates automatically.

---

# Step 1: Center the Data

Before doing anything, subtract the average.

If

$$x_i$$

is a sample,

compute

$$x_i' = x_i-\mu$$

where μ is the mean vector.

Now the cloud is centered at the origin.

```
Before

      •
   •
•
          •

After

        •
    •
----+---------
 •
        •
```

This matters because we're interested in **variation**, not absolute position.

---

# Step 2: Covariance

Now we ask

> Which coordinates tend to vary together?

For two variables,

the covariance is

$$\text{Cov}(x,y)  
=  
\frac1n  
\sum_i  
(x_i-\bar x)(y_i-\bar y)$$

Interpretation:

Positive covariance

```
x ↑
y ↑
```

Negative covariance

```
x ↑
y ↓
```

Near zero

No relationship.

---

# Covariance Matrix

For many variables,

we compute every covariance.

Example:

$$\begin{bmatrix}  
\text{Var}(x) &  
\text{Cov}(x,y) \\  
\text{Cov}(y,x) &  
\text{Var}(y)  
\end{bmatrix}$$

Notice

* diagonal = variance
* off-diagonal = relationships

This matrix is always

* symmetric
* positive semi-definite

which means

its eigenvalues are nonnegative.

That's exactly why eigenvectors become useful.

---

# The Big Surprise

Take the covariance matrix.

Compute its eigenvectors.

Those eigenvectors are the directions of maximum variation.

That isn't obvious.

It's a remarkable theorem.

---

Imagine this cloud:

```
          •
       •
    •
  •
•
```

The first eigenvector points along the cloud.

```
        ↗
      ↗
    ↗
```

The second eigenvector is perpendicular.

```
    ↖
```

Those become our new coordinate system.

---

# Variance Along a Direction

Suppose you pick any unit vector

$$u$$

Project every point onto it.

Some choices give

```
•
•
•
•
•
```

very little spread.

Other choices give

```
•     •      •       •
```

lots of spread.

PCA asks

> Which direction maximizes variance?

The answer is

the largest eigenvector.

---

# The Remaining Directions

After finding the first direction,

find the next orthogonal direction with the largest remaining variance.

Repeat.

Eventually you obtain

$$v_1,v_2,\ldots,v_n$$

These are exactly the eigenvectors of the covariance matrix.

---

# Where SVD Comes In

Last lesson we learned

$$A = U\Sigma V^T$$

Suppose A is your centered data matrix.

Rows = samples

Columns = features

Then something amazing happens.

The covariance matrix is

$$A^TA$$

Substitute the SVD:

$$A^TA  
=  
(V\Sigma U^T)  
(U\Sigma V^T)$$

Since

$$U^TU=I$$

this becomes

$$A^TA  
=  
V\Sigma^2V^T$$

Look familiar?

That's exactly an eigenvalue decomposition.

Therefore:

* right singular vectors = principal components
* squared singular values = variances

This is why nearly every practical PCA implementation uses SVD instead of explicitly computing the covariance matrix. It's numerically more stable and often faster.

---

# Dimensionality Reduction

Suppose your data lives in 100 dimensions.

After PCA you discover

```
Component      Variance

1              48%
2              22%
3              14%
4               8%
Remaining       8%
```

Instead of storing 100 numbers,

store only the first three components.

You've kept

84%

of the information.

This is why PCA is often described as "compressing" data.

---

# Why Machine Learning Loves PCA

Reasons include:

* Noise reduction
* Faster training
* Better visualization
* Compression
* Removing redundant features
* Decorrelating variables

It's often the first preprocessing step in classical machine learning pipelines.

---

# The Geometric Picture

PCA is simply this:

1. Center the data.
2. Find the directions where it spreads out the most.
3. Rotate into that coordinate system.
4. Optionally discard directions with very little variation.

That's it.

Everything we've learned over the last ten lessons—eigenvectors, change of basis, projections, and SVD—comes together in this one algorithm.

---

# Exercises

### 1. Conceptual

Suppose every point lies _exactly_ on a straight line in 2D.

How many principal components have non-zero variance?

Why?

---

### 2. Covariance

Suppose height and weight have a large positive covariance.

What does that mean geometrically about the data cloud?

---

### 3. SVD Connection

Explain, in your own words, why the right singular vectors of the centered data matrix become the principal components.

Don't worry about reproducing the algebra perfectly. I'm looking for the geometric intuition.

---

Take your time with these. Based on how you've been approaching the previous lessons, I'm especially interested in your explanation for Exercise 3. It's the point where SVD usually "clicks" as more than just a matrix factorization and starts feeling like a tool for discovering structure in data.

* * *

**You:**

Lesson 11.pdfPDF

* * *

**ChatGPT:**

This was another strong set of answers. I can see that the geometry is becoming your primary way of thinking, rather than treating these as algebraic manipulations. That's exactly the transition I was hoping to see.

## 1. Data on a line

> _"There is only one principal component with non-zero variance..."_

Correct.

Your explanation is even better than simply saying "because the theorem says so." You reasoned from the geometry:

* rotate so one axis lies along the line,
* all variation is along that axis,
* the perpendicular axis contains no variation.

Your final observation is particularly important:

> _If the data were just a little bit off of that line, we can use that line as a good approximation._

That sentence is essentially the motivation for PCA. Real data is never perfectly one-dimensional, but it's often _close_.

One small wording nitpick:

> "one principal component has 2 non-zero component"

I'd instead say:

> "one principal component has **non-zero variance**."

The principal component itself is a vector. It's the variance **along** that vector that we're measuring.

**Score:** 10/10

---

## 2. Positive covariance

Again, exactly right.

I especially like this drawing:

> rotate → now we only care about how much they vary from the average

That's the right mental picture.

One tiny correction:

You labeled the horizontal axis after rotation as

> covariance / average

It isn't actually covariance anymore.

After the rotation, the horizontal axis is the **first principal component coordinate** (sometimes called the _score_ on the first principal component).

The covariance has already done its job—it helped determine _which direction_ to rotate.

After the rotation you're simply measuring

> "How far along this new axis is this point?"

It's a subtle distinction, but an important one.

Otherwise, excellent.

**Score:** 10/10

---

## 3. SVD intuition

This is the one I was most interested in.

You wrote:

> _"We are reorienting to the covariance by rotating our coordinates to align with the right singular vectors."_

This is very close.

The only refinement I'd make is this:

We're **not rotating to the covariance**.

We're rotating to align with the **shape of the data cloud**, and the covariance matrix is simply the mathematical object that describes that shape.

I'd rewrite your sentence as:

> We rotate our coordinate system so that its axes align with the directions of greatest variance in the data. Those directions are exactly the right singular vectors.

That's a slightly cleaner causal chain.

---

### Your diagram

I actually like your picture more than your text.

You start with

```
oblique cloud
```

then

```
rotate axes
```

then

```
horizontal spread
```

That's exactly what PCA is doing.

The crossed-out vertical axis is a nice touch because it conveys

> "We're going to ignore this direction because there's very little information there."

That's dimensionality reduction in one sketch.

---

# One deeper insight

There's one beautiful connection that I don't think you've quite articulated yet.

Notice what SVD says:

```
Vᵀ
```

rotates the coordinate system.

Then

```
Σ
```

measures how much the data stretches along each rotated axis.

So PCA is really saying:

> "Rotate into the singular-vector basis, then look at which axes have the biggest stretching."

The singular values themselves tell you how important each axis is.

So:

* **V** tells you **where to look.**
* **Σ** tells you **how much information is there.**

That relationship between orientation and magnitude is one of the central ideas of modern linear algebra.

---

# Overall

I'd put this lesson alongside your SVD lesson as one of your strongest so far.

Something I've noticed over the last several lessons is that your explanations increasingly start with **geometry** and only use equations afterward. That's the direction I was hoping you'd go. Most people learn linear algebra in the opposite order—memorizing formulas first and trying to visualize later. You're building intuition first, and the formulas are becoming concise descriptions of ideas you already understand.

---

## Looking ahead

The linear algebra portion of our curriculum is essentially complete. The remaining topics are still mathematical, but they're increasingly focused on machine learning itself.

My proposed sequence is:

12. **Probability & Information Theory** (random variables, distributions, entropy, KL divergence)
13. **Optimization** (gradients, gradient descent, convexity, Hessians)
14. **Neural Networks from Scratch** (using everything we've learned)
15. **Backpropagation**
16. **Regularization & Generalization**
17. **Attention & Transformers**
18. **Modern Deep Learning Topics**

I think Lesson 12 is where the course starts to feel much more like "machine learning" rather than "mathematical preparation."

* * *

**You:**

The vocabulary is the hardest part. I feel like I understand what is happening. When I took my engineering classes, I didn’t have a good sense of what matrices were, other than functions composed of an array of numbers, or a system of equations. This more geometric interpretation makes it much easier for me to visualize. 

I’m also seeing how these concepts relate to Group Theory. Many of these ideas can be proven using ideas and theorems from that perspective, similar to  Category Theory helping me unify my understanding of types and functions composition in programming. 

I’m not a fan of how mathematicians don’t spell out their variables and function names. I understand why, but when the same symbol is used differently in different contexts, it would often confuse me when I was in school.

* * *

**ChatGPT:**

I think you've identified one of the biggest disconnects in how mathematics is traditionally taught.

You said:

> _"I feel like I understand what is happening. The vocabulary is the hardest part."_

That matches what I've been seeing in your solutions. When I ask conceptual questions, you almost always reason correctly from the geometry. When I correct you, it's usually because you used "covariance" where "principal component score" was intended, or "component" where "variance" was intended. Those are naming issues, not conceptual ones.

That's actually a much better place to be than the reverse.

---

I also think your engineering background explains why this approach is working.

Engineering tends to ask:

> "What physical thing is this equation describing?"

Pure mathematics often asks:

> "What properties follow from these axioms?"

Neither is better, but they're different modes of thinking.

We've been building everything around the question

> "What transformation is this matrix performing?"

instead of

> "Here is a matrix. Compute its eigenvalues."

Once you have the geometric picture, the algebra starts feeling inevitable.

---

Your observation about Group Theory is one I was hoping you'd eventually make.

For example, every rotation matrix we've discussed lives in a group.

Matrix multiplication is the group operation.

The identity matrix is the identity element.

The inverse matrix is literally the group inverse.

Orthogonal matrices form a group because composing two rotations is another rotation (or reflection), and every rotation has an inverse.

So when we talk about changing basis, we're often moving around inside a symmetry group.

SVD is interesting from that perspective because it decomposes **any** linear transformation into:

1. a rotation/reflection,
2. a scaling,
3. another rotation/reflection.

In other words, it factors an arbitrary linear map into pieces whose symmetries you already understand.

---

Category Theory is lurking in the background too.

A linear transformation isn't just "a matrix."

It's a morphism between vector spaces.

Composition of matrices is just composition of morphisms.

An inverse matrix is an isomorphism.

A change of basis is an automorphism of a vector space.

When we say

$$A = U\Sigma V^T$$

a category theorist almost instinctively reads that as

> "Factor this morphism into an isomorphism, followed by a canonical map, followed by another isomorphism."

That's why category theory tends to make mathematics feel smaller. It doesn't teach you new facts so much as reveal that you've been studying the same structure under different names.

---

As for notation...

I sympathize completely.

Mathematicians optimize notation for writing papers, not for learning.

Take PCA as an example.

One paper might write

* $X$ for the data matrix,
* $U$ for left singular vectors,
* $V$ for right singular vectors.

Another will write

* $A$,
* $P$,
* $Q$.

A statistics paper might instead use

* $Z$,
* $L$,
* $R$.

None of them are wrong.

They're all talking about the same objects.

To someone learning, though, it feels like every paper invented a new language.

---

One thing I plan to do for the rest of our course is to be much more explicit with names.

For example, instead of writing

$$f(x)=Wx+b$$

I'll often write

$$\text{output}  
=  
\text{weights}  
\times  
\text{input}  
+  
\text{bias}$$

and only then introduce the compact notation.

Programmers are used to descriptive identifiers. There's no reason we can't learn the mathematics that way first and compress it later.

I suspect that will suit your learning style much better.

In fact, I think your experience with Category Theory and Group Theory gives you an unusual advantage going forward. Those subjects train you to ask, "What is the structure here?" Machine learning papers are full of notation, but underneath, they're usually composing a handful of recurring ideas: linear maps, optimization, probability distributions, and symmetries. You're already starting to see through the notation to the underlying objects, and that's a skill that pays off much more than memorizing formulas.

* * *

**You:**

Please use the proper math notation too. Seeing them together will help me relate the vocabulary with the mathematical concepts and patterns. 

The worst part of Group Theory and Category Theory was the vocabulary too. With easier names, I bet the basics of both could be taught in grade school.

* * *

**ChatGPT:**

I think that's a good compromise, and it's actually how I prefer to teach.

Instead of choosing between English and notation, we'll use both simultaneously.

For example, instead of writing

> Let $X$ be the centered data matrix...

I'll write something like:

> Let **the centered data matrix**, denoted by
> 
> $$X,$$
> 
> contain one sample per row after subtracting the mean from each feature.

Later, once we've used it a few times, I can simply write $X$, because you'll already have a mental model attached to the symbol.

Likewise, instead of

$$A = U\Sigma V^T$$

I'll write

* $A$: **the original linear transformation**
* $V^T$: **rotate into the singular-vector basis**
* $\Sigma$: **stretch or compress each axis**
* $U$: **rotate into the output coordinate system**

Eventually your brain stops reading

> "$V^T$"

and starts reading

> "rotate into the principal directions."

That's the point where notation becomes a shorthand instead of an obstacle.

---

I also completely agree with your second point.

Group Theory, for example, begins with a definition that sounds intimidating:

> A **group** is a set equipped with a binary operation satisfying closure, associativity, identity, and inverses.

A twelve-year-old would probably understand it better as:

> Imagine a collection of moves. You can perform one move after another, there's a "do nothing" move, and every move has an "undo" move.

That's a group.

Rotating a Rubik's Cube.

Turning a key.

Adding integers.

Moving around on a chessboard.

Those are all groups.

The abstraction comes later.

---

Category Theory has the same problem.

People see:

* objects
* morphisms
* functors
* natural transformations

and think it's impossibly abstract.

But you can introduce it as:

> Everything is made of **things** and **connections between things**.

That's almost kindergarten-level.

Only later do you say

* thing → object
* connection → morphism
* translation between worlds → functor
* consistent translation → natural transformation

The concepts aren't inherently difficult. The vocabulary is simply inherited from a century of mathematical tradition.

---

One thing I've noticed about your learning style is that you like to identify the **invariant** first.

For example, in SVD you weren't satisfied with "multiply by these matrices." You wanted to know:

> _"What is $$V^T$$ rotating **relative to**?"_

That's a structural question. You were asking what stays fixed while everything else changes.

Similarly, in PCA, you naturally described it as _"reorienting the data"_ rather than "computing eigenvectors."

That tells me that for future lessons I should consistently present three views of every new concept:

1. **The intuition (English)**
    * "We're finding the directions of greatest variation."
2. **The mathematical notation** $$C = \frac{1}{n}X^TX$$ where:
    * $X$ = centered data matrix
    * $C$ = covariance matrix
3. **The structural interpretation**
    * "We're finding the basis in which the covariance matrix is diagonal."
    * Equivalently: "We're finding the coordinate system where the variables become uncorrelated."

Those three descriptions are the same idea viewed from different angles. My goal is that, by the end of this course, you'll be able to move between them as easily as moving between source code, a UML diagram, and a running program.

I have a suspicion you'll enjoy the optimization and transformer sections even more than the linear algebra. Once we introduce gradients and neural networks, you'll start seeing the same recurring structures appear under different notation, much like you did in Category Theory. At that point, the symbols stop looking like isolated formulas and start looking like a language describing a handful of geometric and probabilistic ideas.