class Boid {
    constructor(x, y, vx, vy, m) {
        this.pos = createVector(x, y);
        // this.vel = p5.Vector.random2D().mult(random(5));
        // this.vel = createVector(0, 0);
        this.vel = createVector(vx, vy);
        this.acc = createVector(0, 0);

        this.mas = m;
        // this.mas = random(10, 100);
        this.rad = sqrt(this.mas);
        this.maxVel = 8;
        this.maxAcc = 2;
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mas);
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(20);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    drag(coef) {
        let drag = this.vel.copy();
        drag.normalize();
        drag.mult(-1);
        
        let speedSq = this.vel.magSq();
        drag.setMag(coef * speedSq);

        this.applyForce(drag);
    }

    pull(other) {
        let force = p5.Vector.sub(this.pos, other.pos);
        let distanceSq = constrain(force.magSq(), 100, 1000);
        let G = 1.5;
        
        let strength = G * (this.mas * other.mas) / distanceSq;

        force.setMag(strength);
        other.applyForce(force);
    }

    friction() {
        let diff = height - (this.pos.y + this.rad);
        if (diff < 1) {
            // this.vel.mult(0.95); // Alternate method for simpler code (fails to account for mass)

            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);

            let mu = 0.1;
            let normal = this.mas;
            friction.setMag(mu * normal);

            this.applyForce(friction);
        }
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