# Exercise Set 33 - Constrained Optimization

## Concepts Practiced

- Objective functions, constraints, and feasible sets.
- Convex feasible sets.
- Equality-constrained optimization with Lagrange multipliers.
- Active and inactive inequality constraints.
- Complementary slackness.
- Hard constraints, penalties, and projected gradient descent.

## Reviewed Student Work - 2026-07-11

Source: uploaded images stored in this [Exercise Artifact Module](.).

## Overall

Pass. The work demonstrates readiness to continue to partial derivatives. The equality-constrained geometry and algebra are strong, and the projected-gradient implementation has the right high-level composition. The main corrections concern copying an inequality sign consistently and stating the exact reason projection restores feasibility.

## Problem Review

### 1. Objective, constraint, and feasible set

Correct. The objective is a scalar-valued quantity to minimize, a constraint restricts allowed inputs, and the feasible set contains all inputs satisfying every constraint.

### 2. Probability-simplex segment

Correct. The constraints

```math
x+y=1,\qquad x\ge0,\qquad y\ge0
```

define the line segment joining $(1,0)$ and $(0,1)$. The convexity explanation is also correct: the segment between any two points in the set remains in the set.

### 3. Equality-constrained minimum

Correct for the stated exercise $x+y=2$. The Lagrangian equations imply $x=y$, and feasibility then gives $(x,y)=(1,1)$.

### 4. Parallel gradients

Essentially correct. At a smooth equality-constrained optimum, the objective gradient has no component along a feasible tangent direction, so it lies in the normal direction spanned by the constraint gradient. The equation should retain the multiplier throughout:

```math
\nabla f(x)+\lambda\nabla g(x)=0
```

The phrase “stretched version” captures scalar proportionality; “parallel normal vectors” is the more precise geometric description.

### 5. Active and inactive constraints

The classifications are correct for the exercise's constraint $h(x)=x-3\le0$: $x=2$ is feasible with strict slack and is therefore inactive, while $x=3$ lies on the boundary and is active.

The handwritten prompt changed the original $\le0$ to $\ge0$. Under that copied sign, $x=2$ would be infeasible. The reasoning and labels show that the intended $\le0$ convention was being used; the needed correction is to preserve the original inequality sign.

### 6. Complementary slackness

Correct. Under the lesson's $h(x)\le0$ convention, $h(x)<0$ means the constraint has strict slack. Complementary slackness

```math
\mu h(x)=0
```

then forces $\mu=0$.

### 7. Hard constraint versus finite penalty

Correct. A finite quadratic penalty discourages violation but need not enforce exact equality. Increasing the penalty weight pushes harder toward feasibility while often worsening numerical conditioning.

### 8. Probability-vector constraints

Correct:

```math
\sum_{i=1}^{3}p_i=1,\qquad p_i\ge0\ \text{for each }i
```

### 9. Why projection restores feasibility

The conclusion is right, but the reason needs correction. Projection restores feasibility because $\Pi_C(z)$ is defined to return a point in $C$. Convexity helps make Euclidean projection unique; it does not imply that an arbitrary later gradient step stays inside the set.

### 10. Projected-gradient pseudocode

The core order is correct:

1. evaluate the gradient at the current point;
2. take a learning-rate-scaled step;
3. project that candidate back into the feasible set;
4. repeat from the projected point.

Returning a function from the configured stepper is also the right interface. In the body, the coordinate map should be over the current vector (`previousStep`) rather than an undefined `data` value. The exact TypeScript syntax needs a cleanup pass, but the mathematical data flow is correct.

## Review Result

Lesson 33 is complete.

Carry forward these distinctions:

- Copy the inequality convention consistently; changing between $h(x)\le0$ and $h(x)\ge0$ changes feasibility and the multiplier-sign convention.
- Projection restores feasibility because its output belongs to the feasible set.
- An objective is scalar-valued, while its gradient is vector-valued.
