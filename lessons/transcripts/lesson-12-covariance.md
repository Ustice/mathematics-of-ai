**You:**

I’m ready for my next lesson.

* * *

**ChatGPT:**

Excellent. Last time we covered **Principal Component Analysis (PCA)**. You also made an observation that I think is important:

> A matrix isn't just an array of numbers—it's an object that transforms space.

That geometric viewpoint is exactly what makes the rest of machine learning mathematics much easier.

# Lesson 12: Covariance — Measuring How Variables Move Together

This lesson explains _why_ PCA works.

---

## Goal

By the end of this lesson you should understand:

* what covariance actually measures
* how to compute a covariance matrix
* why eigenvectors of the covariance matrix are the principal components
* why PCA finds the "best" directions

---

# Part 1 — Variance

Suppose we measure people's heights.

```
170
171
169
170
170
```

Everyone is close together.

Now suppose instead we have

```
120
170
220
165
175
```

These are spread out.

That spread is called the **variance**.

Mathematically,

$$\operatorname{Var}(X)  
=  
\frac1n  
\sum_{i=1}^{n}  
(x_i-\mu)^2$$

where

* $x_i$ is a sample
* $\mu$ is the mean

Notice we square the differences.

That makes

* positive and negative deviations both count
* larger deviations matter more

Variance is simply

> **"How spread out is this variable?"**

---

# Part 2 — Two Variables

Now imagine every person has

* height
* weight

Each person becomes a point

$$(height,\ weight)$$

Suppose we plot them.

```
weight
 ^
 |
 |           •
 |        •
 |     •
 |   •
 | •
 +-------------------->
          height
```

As height increases...

weight tends to increase.

The variables move together.

---

Now imagine

```
weight
 ^
 | •
 |      •
 |   •
 |        •
 | •
 +-------------------->
          height
```

No obvious relationship.

---

Or

```
weight
 ^
 |•
 |  •
 |     •
 |         •
 |            •
 +-------------------->
          height
```

Suppose the x-axis is **temperature** instead.

Higher temperature means lower heating bill.

One increases.

The other decreases.

---

# Covariance

Covariance measures whether two variables move together.

The formula is

$$\operatorname{Cov}(X,Y)  
=  
\frac1n  
\sum_{i=1}^{n}  
(x_i-\mu_x)  
(y_i-\mu_y)$$

Notice how similar this is to variance.

Variance was

$$(x_i-\mu)^2$$

Covariance is

$$(x_i-\mu_x)(y_i-\mu_y)$$

Instead of multiplying a deviation by itself...

...we multiply the deviation of **two different variables**.

---

# Interpreting Covariance

Positive covariance

```
High X  -> High Y

Low X   -> Low Y
```

Negative covariance

```
High X -> Low Y

Low X -> High Y
```

Near zero covariance

No consistent relationship.

---

# Part 3 — The Covariance Matrix

Now suppose each point has two coordinates.

$$(x,y)$$

We build a matrix

$$\Sigma  
=  
\begin{bmatrix}  
\operatorname{Var}(x)  
&  
\operatorname{Cov}(x,y)  
\\  
\operatorname{Cov}(y,x)  
&  
\operatorname{Var}(y)  
\end{bmatrix}$$

Notice

$$\operatorname{Cov}(x,y)  
=  
\operatorname{Cov}(y,x)$$

so the covariance matrix is always symmetric.

---

Example

Suppose

$$\Sigma  
=  
\begin{bmatrix}  
9 & 6\\  
6 & 4  
\end{bmatrix}$$

Interpretation:

Variance of $x$ is 9.

Variance of $y$ is 4.

Covariance is positive.

So the cloud is elongated roughly along a diagonal.

---

# Geometric Interpretation

Imagine a cloud of points.

```
•
  •
    •
      •
        •
```

The covariance matrix completely describes

* how wide the cloud is
* how tall it is
* how tilted it is

That last point is the important one.

The covariance matrix tells us the **shape** of the data cloud.

---

# Why Eigenvectors Appear

Remember what an eigenvector does.

A transformation stretches it without changing its direction.

Now imagine the covariance matrix as describing an ellipse.

```
        •
      •••
    ••••••
      •••
        •
```

The longest axis is the direction with the greatest variance.

That direction turns out to be an eigenvector.

The second axis is another eigenvector.

The corresponding eigenvalues tell us **how much variance** exists along those directions.

This is why PCA computes

> the eigenvectors of the covariance matrix.

They're not magic—they're simply the natural axes of the data's spread.

---

# Connecting This to SVD

In Lesson 10 we learned

$$A = U\Sigma V^{T}$$

Now the pieces connect:

* $V$: directions in the original feature space
* $\Sigma$: amount of stretching
* $U$: directions after transformation

For centered data,

$$A^{T}A$$

is proportional to the covariance matrix:

$$\operatorname{Cov}(A)  
=  
\frac1n A^{T}A$$

That's why SVD and PCA produce the same principal directions. Computing the SVD of the centered data matrix is often numerically preferable to explicitly forming the covariance matrix.

---

# Intuition

You mentioned that matrices make more sense when viewed geometrically. Here's another way to think about covariance:

A covariance matrix is **not** a transformation we apply to the data. It is a _description_ of the data's geometry. It summarizes how the point cloud is distributed in space. When we compute its eigenvectors, we're asking:

> "What coordinate system best matches the natural shape of this cloud?"

This is another instance of **finding the right basis**. Just as in Lesson 7, the mathematics becomes simpler once we express things in a basis aligned with the object itself.

---

# Vocabulary

| Symbol | Name | Meaning |
| --- | --- | --- |
| $\mu$ | Mean | Average value |
| $\operatorname{Var}(X)$ | Variance | Spread of one variable |
| $\operatorname{Cov}(X,Y)$ | Covariance | How two variables vary together |
| $\Sigma$ | Covariance matrix | Describes the spread and orientation of the data |
| Eigenvector | Principal direction | Natural axis of the data |
| Eigenvalue | Variance along that axis | Amount of spread in that direction |

---

# Exercises

**1.** If the covariance between two variables is strongly positive, what does that tell you geometrically about the data?

**2.** Why are the diagonal entries of a covariance matrix always variances?

**3.** Why is the covariance matrix always symmetric?

**4.** Suppose

$$\Sigma  
=  
\begin{bmatrix}  
16 & 0\\  
0 & 1  
\end{bmatrix}.$$

Sketch the approximate shape of the data cloud. Which direction is the first principal component?

**5.** Explain, in your own words, why PCA computes the eigenvectors of the covariance matrix rather than of the original data matrix.

---

One preview for the next lesson: we've now built all the linear algebra needed for classical machine learning. Next we'll start using these tools to derive actual learning algorithms, beginning with **linear regression from first principles**, where you'll see projections, least squares, and matrix calculus come together into a model that learns from data.

* * *

**You:**

Lessen 12.pdfPDF

* * *

**ChatGPT:**

This was another strong submission.

The biggest thing I'm noticing over the last several lessons is that you're no longer answering by recalling definitions—you've started reasoning from the underlying structure. That's exactly where I wanted you to get before we move into actual machine learning algorithms.

Let's go through each exercise.

---

## 1. Positive covariance

> _It means that those two variables trend together... The data points should form a well-defined line._

**Score: 9.5/10**

Your scatterplot is exactly what I hoped to see.

There's just one subtle point.

Strong positive covariance does **not** necessarily imply the points form a thin line.

For example,

```
•
  ••
   •••
     ••
       •
```

could have strong positive covariance while still having considerable spread.

A better statement would be

> "The major axis of the point cloud points in the positive diagonal direction."

Notice how this connects directly to PCA.

---

## 2 & 3. Covariance matrix properties

I think you accidentally swapped the numbering (your answer labeled "2" answers my Exercise 3, and vice versa), but that's not important.

### Your symmetry argument

You wrote

$$\operatorname{Cov}(A)=\frac1nA^TA$$

which is symmetric.

Exactly right.

Then you observed

> Cov(x,y) commutes because $A^TA$ is symmetric.

I'd phrase that slightly differently:

$$\operatorname{Cov}(x,y)=\operatorname{Cov}(y,x)$$

because multiplication of real numbers commutes:

$$(x_i-\mu_x)(y_i-\mu_y)  
=  
(y_i-\mu_y)(x_i-\mu_x).$$

That makes every off-diagonal entry mirrored, giving

$$\Sigma=\Sigma^T.$$

---

### Diagonal entries

I liked this explanation.

> Variance is the special case of covariance where a variable varies with itself.

That's exactly right.

Written mathematically,

$$\operatorname{Var}(X)  
=  
\operatorname{Cov}(X,X).$$

One equation replaces an entire paragraph.

---

## 4. Covariance matrix

You drew essentially

```
.............
```

with the first principal component horizontal.

Perfect.

You also noticed

> zero covariance ⇒ independent

This is the one statement I'd correct.

Zero covariance means

> **uncorrelated**

not necessarily

> **independent**.

Independence always implies zero covariance, but the reverse is not true.

Here's a classic example.

Let

$$X\sim\text{Uniform}(-1,1)$$

and define

$$Y=X^2.$$

Then

```
      •
   •     •
 •         •
•           •
```

This is a parabola.

The covariance is

$$\operatorname{Cov}(X,Y)=0,$$

because the left and right halves cancel perfectly.

Yet $Y$ is completely determined by $X$, so they are as dependent as two variables can be.

This distinction becomes important later in statistics.

---

## 5. Why PCA uses the covariance matrix

This was probably your strongest answer.

You wrote

> The covariance matrix tells us how the data relates to itself, including its variation.

Exactly.

Then you recognized another important point:

> the original data matrix is generally not square.

Correct.

Even more importantly:

The data matrix

$$X$$

is a **linear map**.

The covariance matrix

$$X^TX$$

is a **geometric description** of the cloud.

Those are fundamentally different objects.

PCA isn't asking

> "How does this transformation stretch vectors?"

It's asking

> "How is this dataset distributed?"

The covariance matrix answers that question.

---

# One observation

I especially liked this sentence:

> _The covariance matrix tells us how the data relates to itself._

That is a concise description of what covariance really is.

You seem to be developing a habit of asking:

> _"What object is this actually describing?"_

That's a very productive mathematical instinct. It moves you away from memorizing formulas and toward recognizing the role each object plays.

---

# Overall

**Lesson 12: 9.8 / 10**

The only substantive correction was the distinction between **uncorrelated** and **independent**, which is a subtle statistical concept that catches many students the first time they encounter it.

You've now completed essentially all of the linear algebra foundation that underlies classical machine learning:

* ✓ Vectors
* ✓ Matrix transformations
* ✓ Matrix multiplication
* ✓ Determinants
* ✓ Inverses
* ✓ Eigenvalues and eigenvectors
* ✓ Change of basis
* ✓ Projections
* ✓ Least squares
* ✓ Singular Value Decomposition (SVD)
* ✓ Principal Component Analysis (PCA)
* ✓ Covariance

The next phase is where these tools start working together. We'll derive learning algorithms from first principles rather than treating them as recipes. I think you'll enjoy that transition, because it turns optimization into another geometric story instead of a collection of formulas.