// Variables
let standardShader;

// Constants

// Functions

function preload() {
  standardShader = loadShader('standard.vert', 'standard.frag');
}

function setup() {
  console.clear();
  createCanvas(800, 400, WEBGL);
  shader(standardShader);

  const rez = [width, height];
  standardShader.setUniform("iResolution", rez);

  noStroke();
}

function draw() {
  clear();
  rect(0, 0, width / 4, height / 4);
}
