// Variables
let boid;
let sun;
// let boidA;
// let boidB;
let mu = 0.1;
let dragC = 0.2;

// Constants
const speed = 4;
const boids = [];

const btn = document.querySelector('button');
const chunks = [];

// Functions
function record() {
  console.log("recording");
  chunks.length = 0;
  let stream = document.querySelector('canvas').captureStream(30);
  let recorder = new MediaRecorder(stream);
  recorder.ondataavailable = evnt => {
    if (evnt.data.size) {
      chunks.push(evnt.data);
    }
  };
  recorder.onstop = exportVideo;
  btn.onclick = evnt => {
    recorder.stop();
    btn.textContent = 'start recording';
    btn.onclick = record;
  };
  recorder.start();
  btn.textContent = 'stop recording';
}
function exportVideo(e) {
  console.log("exporting");
  var blob = new Blob(chunks, {type : "video/mp4"});
  var vid = document.createElement('video');
  vid.id = 'recorded';
  vid.controls = true;
  vid.src = URL.createObjectURL(blob);
  document.body.appendChild(vid);
  vid.play();
}

function setup() {
  createCanvas(800, 400);
  console.clear();
  record();
  background(0);
  // frameRate(5);

  for (let i = 0; i < 10; i++) {
    let pos = p5.Vector.random2D();
    let vel = pos.copy();
    vel.setMag(random(10, 15));
    pos.setMag(random(100, 150));
    vel.rotate(PI / 2);
    let m = random(10, 15);
    boids[i] = new Boid(pos.x, pos.y, vel.x, vel.y, m);
  }
  sun = new Boid(0, 0, 0, 0, 500);

  // boids[0] = new Boid(300, 200, 0, speed, 50);
  // boids[1] = new Boid(500, 200, 0, -speed, 50);
  // boids[2] = new Boid(400, 100, -speed, 0, 50);
  // boids[3] = new Boid(400, 300, speed, 0, 50);

  // boid = new Boid(300, 100, 50);
  // boidA = new Boid(width / 3, height / 2);
  // boidB = new Boid(width / 1.5, height / 2);

  /* for (let i = 0; i < 10; i++) {
    boids[i] = new Boid(random(width), 0);
  } */
}

function draw() {
  background(0, 10);
  translate(width / 2, height / 2);

  /* for (const ball of boids) {
    let gravity = createVector(0, 0.2);

    let weight = p5.Vector.mult(gravity, ball.mas);
    ball.applyForce(weight);

    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      ball.applyForce(wind);
    }

    if (ball.pos.y > height / 2) {
      ball.drag(dragC);
    }
    ball.update();
    ball.edges();
    ball.show();
  } */

  // let gravity = createVector(0, 0.2);

  // let weight = p5.Vector.mult(gravity, boid.mas);
  // boid.applyForce(weight);

  /* if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    boid.applyForce(wind);
    // boidA.applyForce(wind);
    // boidB.applyForce(wind);
  } */

  // boid.update();
  // boid.edges();
  // boid.show();

  for (const moon of boids) {
    sun.pull(moon);
    for (const other of boids) {
      if (moon != other) {
        moon.pull(other);
        stroke(255, 50);
        // line(moon.pos.x, moon.pos.y, other.pos.x, other.pos.y);
      }
    }
  }

  for (const moon of boids) {
    moon.update();
    // moon.edges();
    moon.show();
  }
  // sun.show();

  // let weightA = p5.Vector.mult(gravity, boidA.mas);
  // boidA.applyForce(weightA);

  // boidA.update();
  // boidA.edges();
  // boidA.show();
  
  // let weightB = p5.Vector.mult(gravity, boidB.mas);
  // boidB.applyForce(weightB);

  // boidB.update();
  // boidB.edges();
  // boidB.show();
}
