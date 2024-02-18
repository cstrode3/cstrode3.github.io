// Gets the information about the web page
const paper = document.querySelector("#paper"),
      pen = paper.getContext("2d");
let startTime = new Date().getTime();


// Runs the entire draw function
const draw = () => {
  const currentTime = new
  Date().getTime(),
        elapsedTime = (currentTime - startTime) / 1000;

  // Animation size
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;

  // Line start
  const start = {
    x: paper.width * 0.1,
    y: paper.height * 0
  }

  // Line end
  const end = {
    x: paper.width * 1,
    y: paper.height * 0
  }

  // Pen color and thickness
  pen.strokeStyle = "lime";
  pen.lineWidth = 5;

  // Line length
  const length = end.x - start.x,
        arcRadius = length / 2;

  // Paper center at line height
  const center = {
    x: paper.width * 0.5,
    y: paper.height * 0.5
  }

  // Controls how fast the arcs expand
  const speed = elapsedTime * 5;

  // Assigns Trans colors to the inner arcs
  const innerArcs = ["#f5abb9", "#ffffff", "#5BCFFA", "#f5abb9", "#ffffff", "#5BCFFA", "#f5abb9", "#ffffff", "#5BCFFA"];

  innerArcs.forEach((arc, index) => {
  // Draw inner arcs
    pen.beginPath();
    pen.strokeStyle = arc;
    pen.arc(center.x, center.y, (speed) * (index + 1) % (arcRadius), 0, Math.PI * 2);
    pen.stroke();
  })

  // Assigns Lesbian flag colors, and order to the inner arcs
  const outerArcs = ["#d62900", "#ff9b55", "#ffffff", "#d462a5", "#a50062", "#a50062", "#d462a5", "#ffffff", "#ff9b55", "#d62900"];

  const segmentLength = (Math.PI * 2) / (outerArcs.length); 

  // Draw outer arc segments
  outerArcs.forEach((arc, index) => {
    pen.beginPath();
    pen.strokeStyle = arc;
    pen.lineWidth = 10;
    pen.arc(center.x, center.y, arcRadius, (segmentLength * index) + (Math.PI * 1.5), segmentLength * (index + 1) + Math.PI * 1.5);
    pen.stroke();
  })

  // Draw every frame
  requestAnimationFrame(draw);
}

draw();