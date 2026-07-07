# Learning Model

## Purpose

This document defines how Jason learns best and how the curriculum should adapt. It is a teaching contract for future lessons, exercises, and AI tutor sessions.

## Core Principle

> Present the minimum amount of information that must be held in working memory, and organize everything else into trustworthy external structure.

Every unit of unnecessary bookkeeping is one fewer unit of mathematical reasoning.

## Learner Model

| Pattern | What It Means | Teaching Response |
| --- | --- | --- |
| Generative learning | Jason remembers derivations better than isolated formulas. | Teach how to reconstruct results from assumptions, invariants, and definitions. |
| Why before what | Motivation must come before notation or procedure. | Start with the problem pressure: what breaks, what must be preserved, and why the new object exists. |
| Working-memory constraints | Too many simultaneous symbols or bookkeeping steps reduce reasoning bandwidth. | Keep active state small and move definitions, assumptions, and dependencies into visible tables. |
| Symbol resolution as compiler work | Resolving what \(x\), \(X\), \(\theta\), or \(\Sigma\) means is external, mechanical work. | Treat symbol lookup like a compiler symbol table, not like mathematical insight. |
| Compression through abstraction | Named structures reduce repeated expansion. | Name intermediate results and let later lessons depend on the name. |
| Invariants before procedures | Procedures are easier when the preserved quantity is clear. | Teach the invariant first, then the calculation. |
| External memory as instruction | Notes, tables, graphs, and dependency maps are part of the learning system. | Keep reusable references nearby and deliberately point back to them. |

## Compression Through Abstraction

The curriculum should repeatedly compress patterns into named objects:

1. Notice repeated structure.
2. Give it a stable name.
3. Record its assumptions and symbols.
4. Reuse the name without re-deriving every internal detail.

The goal is not to hide the math. The goal is to stop wasting attention on facts that can be safely externalized.

## Invariants Before Procedures

A lesson should identify what remains true before it teaches how to calculate:

- Projection preserves the closest-point condition.
- Least squares preserves residual orthogonality.
- PCA preserves maximum variance directions.
- Whitening preserves the idea of transforming covariance to identity.
- MLE preserves the rule "choose the parameter that makes the observed data score highest."
- MAP preserves the rule "choose the parameter that balances data fit and prior pressure."

## Teaching Implications

- Keep symbol tables visible.
- Separate conceptual novelty from notational novelty when possible.
- Use assumptions tables for probability and statistics.
- Name intermediate results before using them in later algebra.
- Prefer derivations, geometry, and invariants over memorized formulas.
- Use external references as first-class curriculum material.
- Ask review questions that require reconstruction, not recall.
- Reduce bookkeeping overhead without simplifying away the real mathematics.
