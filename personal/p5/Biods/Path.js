class Route {
    constructor(x1, y1, x2, y2) {
        this.start = createVector(x1, y1);
        this.end = createVector(x2, y2);
        this.radius = 20;
    }

    show() {
        stroke(255);
        strokeWeight(2);
        line(this.start.x, this.start.y, this.end.x, this.end.y);

        strokeWeight(this.radius * 2);
        stroke(255, 50);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
}