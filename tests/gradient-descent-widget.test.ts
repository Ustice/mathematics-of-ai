import { describe, expect, test } from 'bun:test';
import {
  gradientDescentPath,
  hasMonotoneLoss,
  nextGradientDescentPoint,
  pathSummary,
  quadraticGradient,
  quadraticLoss,
} from '../src/lib/gradient-descent.js';

describe('gradient descent widget math', () => {
  test('quadratic loss has its minimum at the target point', () => {
    expect(quadraticLoss({ b: -1, w: 2 })).toBe(0);
    expect(quadraticGradient({ b: -1, w: 2 })).toEqual({ b: 0, w: 0 });
  });

  test('one update moves opposite the gradient', () => {
    expect(nextGradientDescentPoint({ b: 0, w: 0 }, 0.1)).toEqual({ b: -0.8, w: 0.4 });
  });

  test('small learning rate produces monotone loss decrease', () => {
    const path = gradientDescentPath({
      initialPoint: { b: 0, w: 0 },
      learningRate: 0.1,
      steps: 12,
    });

    expect(hasMonotoneLoss(path)).toBe(true);
    expect(pathSummary(path)).toBe('Converging cleanly');
  });

  test('large learning rate exposes divergence', () => {
    const path = gradientDescentPath({
      initialPoint: { b: 0, w: 0 },
      learningRate: 0.3,
      steps: 8,
    });

    expect(hasMonotoneLoss(path)).toBe(false);
    expect(pathSummary(path)).toBe('Diverging');
  });
});
