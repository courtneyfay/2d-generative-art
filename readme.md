This repo explores ways of generating 2D art using canvas-sketch-cli based on Frontend Masters course [Creative Coding with Canvas & WebGL](https://frontendmasters.com/courses/canvas-webgl/)

canvas-sketch-cli is a great tool for creating 2d artwork on canvas that is then easy to export or print

- sketch.js > some canvas-sketch npm package basics ![simple sketch](images/sketchjs.png)
- grid.js > makes a simple grid and margins using lerp function from canvas-sketch-util/math library ![simple grid](images/gridjs.png)
- random.js > applies a random utility to the simple grid ![simple random](images/randomjs.png)
- organic-randomness.js > applies a two forms of randomness to the grid, both in terms of radius (gaussian) and appearance(regular) ![simple random](images/organic-randomnessjs.png)
- colors.js > uses a library with pre-selected color palettes, and then applies randomness to the colors every time you refresh ![colors 1](images/colors-1.png) ![colors 2](images/colors-2.png) ![colors 3](images/colors-3.png)
- noise.js > adds noise to the grid which changes every time you refresh ![noise 1](images/noisejs-1.png) ![noise 2](images/noisejs-2.png) ![noise 3](images/noisejs-3.png)
- positions.js > changes the grid item from a circle to a text character, and then changes the translation and rotation of each that character ![position 1](images/positionsjs-1.png) ![position 2](images/positionsjs-2.png) ![position 3](images/positionsjs-3.png)
