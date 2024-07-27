// Variables
let alpha, beta;
let prey;
let hunter;
let monster;
let explorer;
let follower;
let route;
let avanue;

// Constants
const food = [];
const hunters = [];
const monsters = [];

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
  // frameRate(5);

  alpha = createVector(100, -60);
  beta = createVector(200, 60);
  route = createVector(200, 60);

  avanue = new Route(100, 100, 300, 300);

  prey = new Prey(random(width), random(height));
  hunter = new Hunter(random(width), random(height));
  monster = new Monster(random(width), random(height));
  explorer = new Explorer(random(width), random(height));
  follower = new Follower(random(width), random(height));
}

function draw() {
  background(0);

  let fear = prey.evade(hunter);
  prey.applyForce(fear);
  prey.update();
  prey.edges();
  prey.show();
  
  let hunger = hunter.pursue(prey);
  let terror = hunter.evade(monster);
  hunter.applyForce(terror);
  hunter.applyForce(hunger);
  hunter.update();
  hunter.edges();
  hunter.show();

  let rage = monster.arrive(hunter.pos);
  monster.applyForce(rage);
  monster.update();
  monster.show();
  
  explorer.wander();
  explorer.update();
  explorer.edges();
  explorer.show();

  let interest = follower.follow(avanue);
  follower.applyForce(interest);
  follower.update();
  follower.edges();
  follower.show();
  avanue.show();

  let distance = p5.Vector.dist(hunter.pos, prey.pos);
  if (distance < hunter.r + prey.r) {
    prey = new Prey(random(width), random(height));
    console.log("The hunter caught the prey");
  }
  distance = p5.Vector.dist(hunter.pos, monster.pos);
  if (distance < hunter.r + monster.r) {
    hunter = new Hunter(random(width), random(height));
    console.log("The monster caught the hunter");
  }
  distance = p5.Vector.dist(prey.pos, monster.pos);
  if (distance < prey.r + monster.r) {
    prey = new Prey(random(width), random(height));
    console.log("The monster caught the prey");
  }
}
