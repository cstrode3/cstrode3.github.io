// Variables
let m87;
let start;
let end;

// Constants
const c = 30;
const G = 3.54;
const dt = 0.1;
const light = [];

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
  background(255);
  ellipseMode(RADIUS);
  var center = createVector(width / 2, height / 2);

  m87 = new BlackHole(center.x, center.y, 3000);

  start = center.y;
  end = center.y - m87.rs * 2.6;
  for (let y = 0; y < start; y++) {
    light.push(new Photon(width - 10, y));
  }
}

function draw() {
  background(255, 50);

  stroke(0);
  strokeWeight(1);
  line(0, start, width, start); 
  line(0, end, width, end);

  for (const p of light) {
    m87.pull(p);
    p.update();
    p.show();
  }
  m87.show();
}
