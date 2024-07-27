/* Name: Celeste Strode
Date: 3/29/2024
Program Name: Anigital Clock
Description: A clock that's both analog and digital.
*/

// Variables
let startTime = new Date().getTime();

// Constants
const paper = document.getElementById("paper"),
      pen = paper.getContext("2d");
const hours = [1, 2, 3],
      minutes = [1, 2, 3, 4, 5],
      seconds = [1, 2, 3, 4, 5, 6];

// Objects
function Hand(Time, Unit) { // Building the clock hands
  len = Time.length;
  if(len == 3) {
    angle = -(Math.PI / 2) + (Math.PI / 6) * Unit;
    pen.fillStyle = "lime";
  }
  if (len == 6) {
    angle = -(Math.PI / 2) + (Math.PI / 30) * Unit;
    pen.fillStyle = "red";
  }
  if (len == 5) {
    angle = -(Math.PI / 2) + (Math.PI / 30) * Unit;
    pen.fillStyle = "lime";
  }
  spacing = (paper.length / 2 - radius) / 6;
  Time.forEach((Time, index) => {
    rad = radius + (index * spacing);
    const position = {
      x: center.x + rad * Math.cos(angle),
      y: center.y + rad * Math.sin(angle)
    }
    pen.font = "20pt courier new";
    pen.textAlign = "center";
    pen.fillText(`${Unit}`, position.x, position.y);
  });
}

// Functions
function time(){
  now = new Date();
  hr = now.getHours();
  let meridiem = "AM"
  // Formats to 12 hour time
  if (hr >= 12) {
    hr = hr - 12;
    meridiem = "PM";
  }
  if (hr == 0) {
    hr = 12;
  }
  min = now.getMinutes();
  // Accounts for single digit minutes
  if (min < 10) {
    min = `0${min}`;
  }
  sec = now.getSeconds();
  // Accounts for single digit seconds
  if (sec < 10) {
    sec = `0${sec}`;
  }
  // console.log(`${hr}:${min}${meridiem}`);
}
function draw() {
  // Gathering time related information
  const currentTime = new Date().getTime(),
        elapsedTime = (currentTime - startTime) / 1000;
  time();
  const speed = elapsedTime * 5;

  // Establishing canvas details
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;
  start = {
    x: paper.width * 0,
    y: paper.height * 0
  }
  end = {
    x: paper.width * 1,
    y: paper.height * 1
  }
  paper.length = end.x - start.x;
  if(paper.length >= end.y - start.y) {
    paper.length = end.y - start.y;
  }

  // Establishing base stats for the clock
  radius = paper.length * 0.05;
  center = {
    x: paper.width * 0.5,
    y: paper.height * 0.5
  }

  // Builds clock hands
  const secondHand = new Hand(seconds, sec);
  const minuteHand = new Hand(minutes, min);
  const hourHand = new Hand(hours, hr);

  // Draws clock frame
  pen.beginPath();
  pen.strokeStyle = "lime";
  pen.arc(center.x, center.y, radius * 9.5, 0, 2 * Math.PI);
  pen.stroke();

  // Draw every frame
  requestAnimationFrame(draw);
}

// Main
draw();
// End Main