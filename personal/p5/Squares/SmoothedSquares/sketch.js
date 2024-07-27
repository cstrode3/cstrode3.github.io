// Variables
let cols, rows;
let noise;
let zoff = 0;

// Constants
const rez = 5;
const grid = [];
const bubbles = [];
const increment = 0.2;

// Functions
function getState(a, b, c, d) {
  return a * 8 + b * 4 + c * 2 + d * 1;
}
function drawLine(v1, v2) {
  line(v1.x, v1.y, v2.x, v2.y);
}

function setup() {
  console.clear();
  createCanvas(800, 400);
  noise = new OpenSimplexNoise();

  cols = 1 + width / rez;
  rows = 1 + height / rez;
  
  // Creating Grid
  for (let i = 0; i < cols; i++) {
    let k = [];
    for (let j = 0; j < rows; j++) {
      k.push(0);
    }
    grid.push(k);
  }
  console.log(grid);
}

function draw() {
  background(GRAY);

  // Filling Grid with noise
  let xoff = 0;
  for (let i = 0; i < cols; i++) {
    xoff += increment;
    yoff = 0;
    for (let j = 0; j < rows; j++) {
      grid[i][j] = float(noise.noise3D(xoff, yoff, zoff));
      yoff += increment;
    }
  }
  zoff += 0.02;

  // Shading Boxes
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(grid[i][j] * 255);
      noStroke();
      rect(i * rez, j * rez, rez);
    }
  }

  // Math
  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      let x = i * rez;
      let y = j * rez;

      // Visualizing Noise
      let state = getState(
        ceil(grid[i][j]), 
        ceil(grid[i + 1][j]),
        ceil(grid[i + 1][j + 1]),
        ceil(grid[i][j + 1])
      );

      // Blocky rendering
      let a = new createVector(x + rez * 0.5, y);
      let b = new createVector(x + rez, y + rez * 0.5);
      let c = new createVector(x + rez * 0.5, y + rez);
      let d = new createVector(x, y + rez * 0.5);
      
      // Data for smooth rendering
      let topL = grid[i][j] + 1;
      let topR = grid[i + 1][j] + 1;
      let bottomR = grid[i + 1][j + 1] + 1;
      let bottomL = grid[i][j + 1] + 1;
      
      // Convert blocky to smooth rendering
      let amnt = (1 - topL) / (topR - topL);
      a.x = lerp(x, x + rez, amnt);
      amnt = (1 - topR) / (bottomR - topR);
      b.y = lerp(y, y + rez, amnt);
      amnt = (1 - bottomL) / (bottomR - bottomL);
      c.x = lerp(x, x + rez, amnt);
      amnt = (1 - topL) / (bottomL - topL);
      d.y = lerp(y, y + rez, amnt);

      stroke(255);
      strokeWeight(1);
      switch (state) {
        case 0:
          // 
          break;
        case 1:
          drawLine(c, d);
          break;
        case 2:
          drawLine(b, c);
          break;
        case 3:
          drawLine(b, d);
          break;
        case 4:
          drawLine(a, b);
          break;
        case 5:
          drawLine(a, d);
          drawLine(b, c);
          break;
        case 6:
          drawLine(a, c);
          break;
        case 7:
          drawLine(a, d);
          break;
        case 8:
          drawLine(a, d);
          break;
        case 9:
          drawLine(a, c);
          break;
        case 10:
          drawLine(a, b);
          drawLine(c, d);
          break;
        case 11:
          drawLine(a, b);
          break;
        case 12:
          drawLine(b, d);
          break;
        case 13:
          drawLine(b, c);
          break;
        case 14:
          drawLine(c, d);
          break;
        case 15:
          // 
          break;
      }
    }
  }
}
