// Varriables
let start;
let end;
let path = [];
let w, h;
let solvable = true;

// Constants
const size = 50;
const grid = new Array(size);
const openSet = [];
const closedSet = [];

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
function removeFromArray(arr, elem) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == elem) {
      arr.splice(i, 1);
    }
  }
}
function heuristic(a, b) {
  let d = dist(a.i, a.j, b.i, b.j);
  // let d = abs(a.i - b.i) + abs(a.j - b.j);
  return d;
}

function setup() {
  createCanvas(800, 700);
  console.clear();
  record();
  console.log('A*');
  frameRate(15);
  // randomSeed(3);

  w = width / size;
  h = height / size;

  // Making a 2D array
  for (let i = 0; i < size; i++) {
    grid[i] = new Array(size);
  }
  // console.log(grid);

  // Filling grid
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }

  start = grid[0][0];
  end = grid[size - 1][size - 1];
  start.wall = false;
  end.wall = false;
  openSet.push(start);
  // console.log(openSet);

  console.log(grid);
}

function draw() {
  background(255);
  // frameRate(2);

  if (openSet.length > 0) {
    // Continue

    // Find best point
    let record = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[record].f) {
        record = i;
      }
    }
    var current = openSet[record];

    if (current === end) {
      noLoop();
      console.log("DONE!");
    }

    // Throw out old records
    removeFromArray(openSet, current);
    closedSet.push(current);

    // Travel to new record
    let neighbors = current.neighbors;
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];

      if (!closedSet.includes(neighbor) && !neighbor.wall) {
        let tempG = current.g + 1;

        let newPath = false;
        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g) {
            neighbor.g = tempG;
            newPath = true;
          }
        } else {
          neighbor.g = tempG;
          newPath = true;
          openSet.push(neighbor);
        }

        if (newPath) {
          neighbor.h = heuristic(neighbor, end);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.previous = current;
        }
      }
    }
  } else {
    // Stop
    console.log('No Solution');
    solvable = false;
    noLoop();
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid[i][j].show(color('gray'));
    }
  }

  // console.log(closedSet);
  for (let i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color('red'));
  }

  // console.log(openSet);
  for (let i = 0; i < openSet.length; i++) {
    openSet[i].show(color('green'));
  }


  // Find the path
  if (solvable) {
    path = [];
    let temp = current;
    path.push(temp);
    while (temp.previous) {
      path.push(temp.previous);
      temp = temp.previous;
    }
  }

  for (let i = 0; i < path.length; i++) {
    // path[i].show(color('blue'));
  }
  noFill();
  strokeWeight(w / 2);
  stroke(0, 255, 0);
  beginShape();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
  }
  endShape();

}
