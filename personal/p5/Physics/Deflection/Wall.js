class Wall {
    constructor(x, y, vecx, vecy) {
        this.pos = createVector(x, y);
        this.vec = createVector(vecx, vecy);
        this.rad = 4;
    }

    center() {
        let x = this.pos.x + this.pos.x + this.vec.x;
        let y = this.pos.y + this.pos.y + this.vec.y;
        x /= 2;
        y /= 2;
        return new Ball(x, y);
    }

    normal() {
        let x1 = this.pos.y;
        let y1 = this.pos.x + this.vec.x;
        let x2 = this.pos.y + this.vec.y;
        let y2 = this.pos.x;
        return new Wall(x1, y1, x2 - x1, y2 - y1);
    }

    show(color, standard = false) {
        if (!standard) {
            strokeWeight(1);
            stroke(color);
            line(this.pos.x, this.pos.y, this.pos.x + this.vec.x, this.pos.y + this.vec.y);
        } else {
            strokeWeight(1);
            stroke(color);
            line(this.pos.x, this.pos.y, this.vec.x, this.vec.y);
        }
        
        // stroke(0, 255, 0);
        // line(this.pos.x, this.pos.y, this.vec.x, this.vec.y);

        // stroke(0, 255, 0);
        // line(this.start.x, this.start.y, this.vec.x, this.vec.y);

        // stroke(0, 0, 255);
        // line(this.end.x, this.end.y, this.vec.x, this.vec.y);

        // let normalVec = this.normal();
        // stroke(255, 0, 0);
        // line(normalVec.end.x, normalVec.end.y, normalVec.vec.x, normalVec.vec.y);

        // strokeWeight(4);

        // stroke(0, 255, 0);
        // point(this.start.x, this.start.y);

        // stroke(0, 0, 255);
        // point(this.end.x, this.end.y);

        // stroke(255, 0, 0);
        // point(this.vec.x, this.vec.y);
    }
}