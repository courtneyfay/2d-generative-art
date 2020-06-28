const canvasSketch = require("canvas-sketch");
// lerp is for linear interpretation
const { lerp } = require("canvas-sketch-util/math");
// random is for pseudo-random number generation, like Math.random but super-powered
const random = require("canvas-sketch-util/random");
// palettes gives you nice combinations of colors to use together
const palettes = require("nice-color-palettes");
const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  const colorCount = random.rangeFloor(1, 6);
  const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);
  const createGrid = () => {
    const points = [];
    const count = 40;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        const radius = Math.abs(random.noise2D(u, v)) * 0.1;
        points.push({
          position: [u, v],
          radius,
          color: random.pick(palette),
          rotation: random.noise2D(u, v),
        });
      }
    }
    return points;
  };
  const points = createGrid().filter(() => random.value() > 0.5);
  const margin = 400;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    points.forEach(({ position, radius, color, rotation }) => {
      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.save();
      context.fillStyle = color;
      context.font = `${radius * width}px "Arial"`;
      context.translate(x, y);
      context.rotate(rotation);
      //could use unicode symbols, or could randomize a list of characters
      context.fillText("=", 0, 0);
      context.restore();
    });
  };
};

canvasSketch(sketch, settings);
