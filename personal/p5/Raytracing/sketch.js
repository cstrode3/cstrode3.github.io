// Variables
let ray;
let particle;
let sceneW;
let sceneH;
let sliderFOV;

// Constants
const walls = [];

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
function changeFOV() {
  const fov = sliderFOV.value();
  particle.updateFOV(fov);
}

function setup() {
  console.clear();
  record();
  createCanvas(800, 400);
  sceneW = width / 2;
  sceneH = height;

  // Create interior walls
  for (let i = 0; i < 5; i++) {
    let x1 = random(sceneW);
    let x2 = random(sceneW);
    let y1 = random(sceneH);
    let y2 = random(sceneH);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  // Create outer walls
  walls.push(new Boundary(5, 5, sceneW - 5, 5));
  walls.push(new Boundary(sceneW - 5, 5, sceneW - 5, sceneH - 5));
  walls.push(new Boundary(sceneW - 5, sceneH - 5, 5, sceneH - 5));
  walls.push(new Boundary(5, sceneH - 5, 5, 5));

  // Create character
  particle = new Particle();
  sliderFOV = createSlider(0, 360, 45);
  sliderFOV.input(changeFOV);
}

function draw() {
  // Interaction
  // particle.update(mouseX, mouseY);
  if (keyIsDown(65)) {
    particle.rotate(-0.05);
  }
  if (keyIsDown(68)) {
    particle.rotate(0.05);
  }
  if (keyIsDown(87)) {
    particle.move(1);
  }
  if (keyIsDown(83)) {
    particle.move(-1);
  }

  background(0);
  for (const wall of walls) {
    wall.show();
  }
  // particle.update(sceneW / 2, sceneH / 2);
  particle.show();
  const scene = particle.look(walls);

  const w = sceneW / scene.length;
  push();
  translate(sceneW, 0);
  for (let i = 0; i < scene.length; i++) {
    noStroke();
    const sq = scene[i] * scene[i];
    const wSq = sceneW * sceneW;
    const brightness = map(scene[i], 0, wSq, 255, 0);
    fill(brightness);
    rectMode(CENTER);
    const h = map(scene[i], 0, sceneW, sceneH, 0);
    rect(i * w, sceneH / 2, w + 1, h);
  }
  pop();
}
