// Variables
let boid;

// Constants

// Functions

function setup() {
  console.clear();
  createCanvas(800, 400);
  background(0);

  boid = new Boid(width / 2, height / 2);
}

function draw() {
  background(0);

  boid.update();
  boid.edges();
  boid.show();
  
  
  /* randPos = createVector(random(-100, 100), random(-100, 100));
  randPos = p5.Vector.random2D().mult(random(100));
  
  pos = createVector(width / 2, height / 2);
  mouse = createVector(mouseX, mouseY);
  
  v = p5.Vector.sub(mouse, pos);
  // m = v.mag().div(m).mult(50); // Normalize and set magnitude
  // v.normalize().mult(50); // Normalize and set magnitude
  v.setMag(50); // Normalize and set magnitude

  translate(width / 2, height / 2);
  stroke(255);
  line(0, 0, randPos.x, randPos.y); */
}
