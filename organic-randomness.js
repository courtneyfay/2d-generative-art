const canvasSketch = require("canvas-sketch");
// lerp is for linear interpretation
const { lerp } = require("canvas-sketch-util/math");
// random is for pseudo-random number generation, like Math.random but super-powered
const random = require("canvas-sketch-util/random");
const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  const createGrid = () => {
    const points = [];
    const count = 40;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        points.push({
          position: [u, v],
          radius: Math.abs(random.gaussian() * 0.01),
        });
      }
    }
    return points;
  };
  random.setSeed(512);
  const points = createGrid().filter(() => random.value() > 0.5);
  const margin = 400;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    points.forEach(({ position, radius }) => {
      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.arc(x, y, radius * width, 0, Math.PI * 2, false);
      context.fillStyle = "hotpink";
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
