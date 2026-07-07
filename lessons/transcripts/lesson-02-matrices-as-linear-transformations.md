**You:**

Lesson 2

* * *

**ChatGPT:**

Perfect. Let's build on the vector intuition from Lesson 1.

# Lesson 2 — Matrices as Linear Transformations

## Goal

By the end of this lesson you should be able to:

* Understand what a matrix actually _is_.
* Predict what a matrix does geometrically.
* Multiply a matrix by a vector.
* Recognize common transformations.
* Understand why machine learning uses matrices everywhere.

---

## 1. Forget the grid of numbers

A matrix is **not** fundamentally a table of numbers.

A matrix is a **function** that transforms vectors.

Instead of thinking

$$A =  
\begin{bmatrix}  
2 & 1\\  
1 & 3  
\end{bmatrix}$$

think

> "This takes one vector and turns it into another."

Exactly like a function

$$f(x)=x^2$$

takes numbers and produces numbers.

---

## 2. Every matrix changes space

Imagine the entire xy-plane drawn on rubber.

A matrix can

* rotate it
* stretch it
* compress it
* shear it
* reflect it

The points themselves don't move independently.

The _entire coordinate system_ is transformed.

---

## 3. Matrix multiplication

If

$$A=  
\begin{bmatrix}  
2&1\\  
1&3  
\end{bmatrix}$$

and

$$x=  
\begin{bmatrix}  
4\\  
2  
\end{bmatrix}$$

then

$$Ax=  
\begin{bmatrix}  
2(4)+1(2)\\  
1(4)+3(2)  
\end{bmatrix}  
=  
\begin{bmatrix}  
10\\  
10  
\end{bmatrix}$$

Notice:

Each row computes one coordinate of the output.

---

## 4. Where do the columns come from?

This is one of the most important ideas in linear algebra.

Suppose

$$A=  
\begin{bmatrix}  
2&1\\  
1&3  
\end{bmatrix}$$

Its columns are

$$c_1=  
\begin{bmatrix}  
2\\  
1  
\end{bmatrix},  
\qquad  
c_2=  
\begin{bmatrix}  
1\\  
3  
\end{bmatrix}$$

Now let

$$x=  
\begin{bmatrix}  
4\\  
2  
\end{bmatrix}$$

Instead of multiplying rows,

think

$$Ax  
=  
4c_1+2c_2$$

Indeed,

$$4  
\begin{bmatrix}  
2\\1  
\end{bmatrix}  
+  
2  
\begin{bmatrix}  
1\\3  
\end{bmatrix}  
=  
\begin{bmatrix}  
10\\10  
\end{bmatrix}$$

This viewpoint becomes essential in machine learning.

A matrix says:

> "Take these basis vectors, scale them by the coordinates of x, then add them."

---

## 5. The identity matrix

$$I=  
\begin{bmatrix}  
1&0\\  
0&1  
\end{bmatrix}$$

does nothing.

$$Ix=x$$

It is the equivalent of multiplying by 1.

---

## 6. Simple transformations

### Stretch x

$$\begin{bmatrix}  
2&0\\  
0&1  
\end{bmatrix}$$

doubles x but leaves y unchanged.

---

### Stretch y

$$\begin{bmatrix}  
1&0\\  
0&3  
\end{bmatrix}$$

triples y.

---

### Reflection

$$\begin{bmatrix}  
-1&0\\  
0&1  
\end{bmatrix}$$

reflects across the y-axis.

---

### Rotation by 90°

$$\begin{bmatrix}  
0&-1\\  
1&0  
\end{bmatrix}$$

turns every vector counterclockwise by 90°.

---

## 7. Why ML cares

Suppose

$$x=  
\begin{bmatrix}  
\text{height}\\  
\text{weight}  
\end{bmatrix}$$

A neural network computes

$$Wx+b$$

where

* $x$ is the input features,
* $W$ is a matrix of learned weights,
* $b$ is a bias vector.

The matrix learns how to transform the input into a representation that is more useful for the next layer.

Nearly every neural network is a sequence of matrix multiplications followed by nonlinear functions.

---

# Exercises

Try these without a calculator.

### 1.

Compute

$$\begin{bmatrix}  
1&2\\  
3&4  
\end{bmatrix}  
\begin{bmatrix}  
2\\  
1  
\end{bmatrix}$$

---

### 2.

Express

$$\begin{bmatrix}  
5\\  
7  
\end{bmatrix}$$

as a linear combination of the columns of

$$\begin{bmatrix}  
1&2\\  
2&1  
\end{bmatrix}$$

That is, find $a$ and $b$ such that

$$a  
\begin{bmatrix}  
1\\2  
\end{bmatrix}  
+  
b  
\begin{bmatrix}  
2\\1  
\end{bmatrix}  
=  
\begin{bmatrix}  
5\\7  
\end{bmatrix}$$

---

### 3.

Without multiplying, describe what this matrix does geometrically:

$$\begin{bmatrix}  
3&0\\  
0&3  
\end{bmatrix}$$

---

### 4.

What does

$$\begin{bmatrix}  
0&1\\  
1&0  
\end{bmatrix}$$

do to a vector?

Describe it geometrically.

---

### 5. (Conceptual)

Why is it useful to think of a matrix as a transformation instead of simply a table of numbers?

---

Take your time. As before, I'll grade each answer, point out any misconceptions, and then we'll move on to Lesson 3, where we'll cover vector spaces, bases, and why changing bases is one of the deepest ideas in linear algebra.

* * *

**You:**

https://notability.com/app/note/9fa18800-a387-47c8-bd8f-86b8a7809e59

Does that work?

* * *

**ChatGPT:**

I can't tell from the URL alone. That Notability link may require permission or authentication that I don't have.

If your intent was to share your notes for Lesson 2, one of these will work:

* Paste the contents into the chat.
* Export the note as a PDF and upload it.
* Export it as an image if it's handwritten.
* If Notability has a publicly accessible share link, I can try to read that, but many shared links aren't accessible outside the app.

Once I can see the note, I'll review your work, point out any mistakes or gaps, and give feedback just like we did for Lesson 1.

* * *

**You:**

Note Jun 27, 2026.pdfPDF

* * *

**ChatGPT:**

This is excellent work. I can see both your calculations and your reasoning.

Here's my feedback.

### 1. Matrix multiplication

✅ **Correct answer.**

You computed it using the **column interpretation**:

$$2\begin{bmatrix}1\\3\end{bmatrix}  
+  
1\begin{bmatrix}2\\4\end{bmatrix}  
=  
\begin{bmatrix}4\\10\end{bmatrix}$$

This is exactly the perspective I wanted you to adopt instead of memorizing row-by-column multiplication.

**10/10**

---

### 2. Linear combination

✅ **Correct answer.**

You solved

$$a+2b=5,\qquad 2a+b=7$$

and obtained

$$a=3,\qquad b=1.$$

Exactly right.

One suggestion: as you progress, try eliminating variables mentally. After enough practice, you'll solve systems like this almost automatically.

**10/10**

---

### 3. Scaling matrix

✅ **Correct.**

You recognized

$$\begin{bmatrix}  
3&0\\  
0&3  
\end{bmatrix}  
=3I.$$

That observation is more insightful than simply saying "it stretches."

Every vector keeps its direction while its length triples.

**10/10**

---

### 4. Swapping coordinates

This was my favorite answer.

You didn't just say "it swaps x and y."

You proved it algebraically:

$$\begin{bmatrix}  
0&1\\  
1&0  
\end{bmatrix}  
\begin{bmatrix}  
x\\y  
\end{bmatrix}  
=  
\begin{bmatrix}  
y\\x  
\end{bmatrix}$$

Then you went a step further and drew the basis vectors before and after the transformation.

That picture shows something deeper:

The transformation sends

* $e_1=(1,0)$ to $(0,1)$
* $e_2=(0,1)$ to $(1,0)$

Since every vector is a combination of those basis vectors, every vector gets reflected across the line $y=x$.

That's exactly how mathematicians think about matrices.

**10/10**

---

### 5. Conceptual

Also excellent.

The sentence

> "The human mind has an intuitive sense of geometry..."

is a nice observation.

More importantly, you recognized that a matrix describes **behavior**, not merely arithmetic. That geometric intuition will become invaluable when we discuss eigenvectors, singular values, PCA, and neural networks.

**10/10**

---

# Overall

**Score: 50/50**

More importantly, your _style of thinking_ is developing well.

From your answers so far, I notice that you naturally:

* look for structural relationships rather than memorizing formulas,
* connect algebra with geometry,
* verify ideas by deriving them yourself (as in Question 4),
* and explain concepts in your own words rather than repeating definitions.

Those habits are much more valuable than simply getting the correct answers.

---

## One small challenge

Without doing any arithmetic, answer this:

Suppose

$$A=  
\begin{bmatrix}  
3&1\\  
2&4  
\end{bmatrix}.$$

If I tell you that

$$A\begin{bmatrix}1\\0\end{bmatrix}  
=  
\begin{bmatrix}3\\2\end{bmatrix},$$

can you immediately tell me what

$$A\begin{bmatrix}0\\1\end{bmatrix}$$

must be?

If you can answer that instantly, you've fully internalized the "columns as transformed basis vectors" viewpoint. It's a surprisingly powerful idea, and it's the foundation for the next lesson on vector spaces and bases.

* * *

**You:**

(1,4) it’s essentially picking out the second basis vector. 

I’ll see you in lesson 3

* * *

**ChatGPT:**

Exactly right.

$$A\begin{bmatrix}0\\1\end{bmatrix}$$

simply picks out the **second column** of $A$, so the answer is

$$\begin{bmatrix}1\\4\end{bmatrix}.$$

The deeper principle is:

* The **first column** is where the first basis vector $(1,0)$ ends up.
* The **second column** is where the second basis vector $(0,1)$ ends up.

Once you know where the basis vectors go, you know where **every** vector goes, because every vector is a linear combination of the basis vectors.

That single idea is one of the pillars of linear algebra. It leads naturally to:

* change of basis,
* eigenvectors,
* singular value decomposition,
* principal component analysis,
* and eventually the linear layers used throughout modern machine learning.

I'm also pleased with the way you're approaching the exercises. Your notes weren't just computations—they included derivations, diagrams, and explanations. That's the kind of understanding that sticks.

See you in Lesson 3, where we'll tackle **Vector Spaces, Bases, and Dimension**. It's one of the most important conceptual lessons in the course, and it will tie together everything you've learned so far.