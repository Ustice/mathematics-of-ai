---
name: moa-build-widget
description: Build interactive Mathematics of AI lesson widgets and visualizations in TypeScript for dynamic HTML/MDX lessons. Use when Jason asks for sliders, simulations, diagrams, visual proofs, math playgrounds, canvas/SVG interactions, or lesson-specific interactive components such as gradient descent paths, covariance ellipses, matrix transformations, Bayesian updates, or attention/softmax visualizers.
---

# MOA Build Widget

## Overview

Build widgets only when interaction clarifies the math.
Keep the mathematical model pure and testable, and keep the lesson understandable without the widget.

## Workflow

1. Define the teaching job.
   - Resolve the target lesson and its source path from `data/lesson-sources.json` and the live content collection rather than assuming a lesson number or location.
   - Name the misconception or intuition the widget should reveal.
   - Identify the input controls and the observed output.
   - Prefer one clear interaction over a dashboard of controls.

2. Separate math from presentation.
   - Put reusable calculations in typed pure functions.
   - Keep rendering components thin.
   - Add tests for math behavior before tuning visuals when the model is nontrivial.

3. Use lesson-native UI.
   - Discover the current component, style, and test locations from neighboring widgets and repository configuration; do not encode a content snapshot in the skill.
   - Use TypeScript and Bun.
   - Use Astro/MDX islands when the platform exists.
   - Use SVG or Canvas for 2D math visuals; use Three.js only when the concept is truly 3D.
   - Use sliders, toggles, segmented controls, and direct manipulation where they match the math.

4. Make layout stable.
   - Give widgets fixed responsive bounds with `aspect-ratio`, min/max sizes, or explicit SVG view boxes.
   - Keep labels from overlapping controls or diagrams.
   - Avoid decorative cards inside cards; the widget should feel like part of the lesson.

5. Validate interaction.
   - Run `bun run build`.
   - Run `bun run validate`.
   - For rendered widgets, use browser/Playwright screenshots at desktop and mobile sizes when available.
   - Check that default state is meaningful and nonblank.

## References

Read `references/widget-patterns.md` when selecting controls, acceptance criteria, or candidate widgets for upcoming lessons.

## Guardrails

- Do not build novelty interactions that do not improve the lesson.
- Do not let animation obscure exact values or math relationships.
- Do not require the widget to understand the prose.
- Do not hand-roll fragile numerical methods when a small proven library or simpler closed form is available.
