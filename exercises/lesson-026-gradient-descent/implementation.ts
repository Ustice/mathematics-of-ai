type Theta = number[];
type Point = [number, number];

type GradientDescentConfig<T extends Theta> = {
  initialTheta: T;
  gradient: (theta: T) => T;
  learningRate: number;
  steps: number;
};

function gradientDescent<T extends Theta>({
  initialTheta,
  gradient,
  learningRate,
  steps,
}: GradientDescentConfig<T>): T[] {
  return Array.from({ length: steps }).reduce<T[]>(
    (history) => {
      const currentTheta = history[history.length - 1];
      const gradientAtTheta = gradient(currentTheta);
      const nextTheta = currentTheta.map(
        (parameter, parameterIndex) =>
          parameter - learningRate * gradientAtTheta[parameterIndex],
      ) as T;

      return [...history, nextTheta];
    },
    [initialTheta],
  );
}

function loss([w, b]: Point) {
  return (w - 2) ** 2 + 4 * (b + 1) ** 2;
}

const gradient = ([w, b]: Point): Point => [2 * (w - 2), 8 * (b + 1)];
const thetaToRow = ([w, b]: Point, step: number) => ({
  step,
  w,
  b,
  loss: loss([w, b]),
});
const runScenario = (learningRate: number) =>
  gradientDescent({
    initialTheta: [0, 0] as Point,
    gradient,
    learningRate,
    steps: 10,
  }).map(thetaToRow);

console.log('Learning Rate: 0.1');
console.log('Performance: converging');
console.table(runScenario(0.1));

console.log('\nLearning Rate: 0.4');
console.log('Performance: diverging');
console.table(runScenario(0.4));
