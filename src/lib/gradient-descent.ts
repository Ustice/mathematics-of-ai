export type Point2D = {
  b: number;
  w: number;
};

export type GradientDescentStep = Point2D & {
  gradientB: number;
  gradientW: number;
  loss: number;
  step: number;
};

export const targetPoint: Point2D = {
  b: -1,
  w: 2,
};

export const quadraticLoss = ({ b, w }: Point2D) => (w - targetPoint.w) ** 2 + 4 * (b - targetPoint.b) ** 2;

export const quadraticGradient = ({ b, w }: Point2D): Point2D => ({
  b: 8 * (b - targetPoint.b),
  w: 2 * (w - targetPoint.w),
});

export const nextGradientDescentPoint = (point: Point2D, learningRate: number): Point2D => {
  const gradient = quadraticGradient(point);

  return {
    b: point.b - learningRate * gradient.b,
    w: point.w - learningRate * gradient.w,
  };
};

export const gradientDescentPath = ({
  initialPoint,
  learningRate,
  steps,
}: {
  initialPoint: Point2D;
  learningRate: number;
  steps: number;
}): GradientDescentStep[] =>
  Array.from({ length: steps + 1 }).reduce<GradientDescentStep[]>((history, _, step) => {
    const currentPoint = history.at(-1) ?? initialPoint;
    const point = step === 0 ? initialPoint : nextGradientDescentPoint(currentPoint, learningRate);
    const gradient = quadraticGradient(point);

    return [
      ...history,
      {
        ...point,
        gradientB: gradient.b,
        gradientW: gradient.w,
        loss: quadraticLoss(point),
        step,
      },
    ];
  }, []);

export const hasMonotoneLoss = (path: GradientDescentStep[]) =>
  path.slice(1).every((step, index) => {
    const previousStep = path[index];

    return previousStep ? step.loss <= previousStep.loss : true;
  });

export const pathSummary = (path: GradientDescentStep[]) => {
  const firstLoss = path[0]?.loss ?? 0;
  const finalLoss = path.at(-1)?.loss ?? firstLoss;
  const monotone = hasMonotoneLoss(path);

  if (monotone && finalLoss < 0.05) {
    return 'Converging cleanly';
  }

  if (monotone) {
    return 'Stable but still descending';
  }

  if (finalLoss > firstLoss) {
    return 'Diverging';
  }

  return 'Oscillating';
};
