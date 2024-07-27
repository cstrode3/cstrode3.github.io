// Variables
let ball;
let testBallA;
let testBallB;

// Constants
const balls = [];

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
  console.clear();
  record();
  createCanvas(800, 400);

  // testBallA = new Particle(random(width), random(height));
  // testBallB = new Particle(random(width), random(height));
  for (let i = 0; i < 100; i++) {
    const b = new Particle(random(width), random(height));
    balls.push(b);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    const particleA = balls[i];
    for (let j = i + 1; j < balls.length; j++) {
      const particleB = balls[j];
      particleA.collide(particleB);
    }
  }

  for (const ball of balls) {
    ball.update();
    ball.edges();
    ball.show();
  }


  // testBallA.collide(testBallB);
  // testBallA.update();
  // testBallB.update();
  // testBallA.edges();
  // testBallB.edges();
  // testBallA.show();
  // testBallB.show();

  // let speedA = testBallA.vel.mag();
  // let speedB = testBallB.vel.mag();
  // let kinA = 0.5 * testBallA.mas * speedA*speedA;
  // let kinB = 0.5 * testBallB.mas * speedB*speedB;
  // console.log(kinA + kinB);
}
