# Widget Patterns

## Good Early Widgets

- Gradient descent path on a 2D loss curve.
- Learning-rate slider showing convergence, oscillation, and divergence.
- Matrix transformation playground for basis vectors and a test point.
- Covariance ellipse with eigenvectors and principal axes.
- Bayesian update simulator for prior, likelihood, and posterior.
- Softmax temperature slider.
- Attention weight visualizer.

## Acceptance Criteria

- The default view is nonblank and already teaches something.
- Every control has a visible effect.
- Values and labels fit on mobile and desktop.
- The math model has direct tests when it includes iterative or probabilistic behavior.
- The widget can be reset to its default state.
- The prose around the widget explains what to notice.

## Control Choices

- Use sliders for scalar parameters such as learning rate, variance, dropout probability, or temperature.
- Use toggles for showing or hiding overlays such as gradients, eigenvectors, residuals, or posterior distributions.
- Use segmented controls for mode switches such as convex/nonconvex, batch/stochastic, or prior families.
- Use direct manipulation only when dragging itself is mathematically meaningful.
