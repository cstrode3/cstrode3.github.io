// Variables
let wall;
let normal;
let bCent;
let rCent;

let boundary;
let ray;

let ball;

// Constants

// Functions

function setup() {
  console.clear();
  createCanvas(800, 400);
  
  // wall = new Wall(random(width), random(height), random(width), random(height));
  wall = new Wall(100, 100, 180, 256);
  bCent = wall.center();
  normal = wall.normal();
  rCent = normal.center();

  boundary = new Wall(700, 100, 700, 300);
  ray = new Ray(400, 200);

  ball = new Ball(250, 100);
}

function draw() {
  background(0);

  wall.show("blue");
  bCent.show();
  normal.show("red");
  rCent.show();

  boundary.show(255, true);
  ray.show();
  ray.lookAt(mouseX, mouseY);

  let pt = ray.cast(wall);
  // console.log(pt);
  if (pt) {
    fill(255);
    ellipse(pt.x, pt.y, 16);
  }

  // gravity = createVector(0, 1);
  // ball.applyForce(gravity);
  // ball.bounce(wall);
  // ball.update();
  // ball.edges();
  ball.show();
}
