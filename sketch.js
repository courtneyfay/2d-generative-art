const canvasSketch = require("canvas-sketch");

const settings = {
  //paper sizes or dimensions of image to download
  // examples include A4, A3, postcard, letter,
  // or an array of dimenstions, ['2048', '2048']
  dimensions: ["2048", "2048"],
  //examples of units 'cm', 'feet', 'in'
  // units: "in",
  pizelsPerInch: 300,
  // can be landscape or portrait
  orientation: "landscape",
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "hotpink";
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI * 2, false);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = width * 0.01;
    context.strokeStyle = "white";
    context.stroke();
  };
};

canvasSketch(sketch, settings);
