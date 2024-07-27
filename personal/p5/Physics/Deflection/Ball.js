function vectorProjection(a, b) {
    let bcopy = b.copy().normalize();
    let sp = a.dot(bcopy);
    bcopy.mult(sp);
    return bcopy;
}

class Ball {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.acc = createVector(0, 0);
        this.rad = 16;
    }

    applyForce(force) {
        this.acc = force;
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    bounce(wall) {}

    edges() {
        if (this.pos.x > width - this.rad) {
            this.pos.x = width - this.rad;
            this.vel.x *= -1;
        } else if (this.pos.x < this.rad) {
            this.pos.x = this.rad;
            this.vel.x *= -1;
        }

        if (this.pos.y > height - this.rad) {
            this.pos.y = height - this.rad;
            this.vel.y *= -1;
        } else if (this.pos.y < this.rad) {
            this.pos.y = this.rad;
            this.vel.y *= -1;
        }
    }

    show() {
        stroke(255);
        strokeWeight(1);
        fill(255, 50);
        circle(this.pos.x, this.pos.y, this.rad * 2);
    }
}