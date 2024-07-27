class Ray {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this. dir = createVector(1, 0);
    }

    lookAt(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    cast(wall) {
        const x1 = wall.pos.x;
        const y1 = wall.pos.y;
        const x2 = wall.vec.x;
        const y2 = wall.vec.x;

        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den == 0) return;

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

        if (t > 0 && t < 1 && u > 0) {
            const pt = createVector();
            pt.x = x1 + t * (x2 - x1);
            pt.y = y1 + t * (y2 - y1);
            return pt;
        } else {
            return;
        }
    }

    show() {
        push();
        stroke(255);
        strokeWeight(2);
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.dir.x * 20, this.dir.y * 20);
        pop();
    }
}