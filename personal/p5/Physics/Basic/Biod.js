class Boid {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D().mult(random(3));
        this.acc = createVector(0, 0);

        this.mas = 16;
        this.rad = 16;
        this.maxVel = 8;
        this.maxAcc = 2;
    }

    applyForce() {}

    update() {
        let mouse = createVector(mouseX, mouseY);

        this.acc = p5.Vector.sub(mouse, this.pos);
        this.acc.limit(this.maxAcc);

        this.vel.add(this.acc);
        this.vel.limit(this.maxVel);

        this.pos.add(this.vel);
    }

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
        push();
        stroke(255);
        strokeWeight(1);
        fill(255, 50);
        circle(this.pos.x, this.pos.y, this.rad * 2);
        pop();
    }
}