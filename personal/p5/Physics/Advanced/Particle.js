class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D().mult(random(1, 4));
        this.acc = createVector(0, 0);

        this.mas = random(16, 32);
        this.rad = sqrt(this.mas) * 2;
        this.maxVel = 6;
        this.maxAcc = 2;
    }

    applyForce(force) {
        let f = force.copy();
        f.div(this.mas);
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    collide(other) {
        let impactVector = p5.Vector.sub(other.pos, this.pos);
        let d = impactVector.mag();
        if (d < this.rad + other.rad) {
            // Correct overlapping errors
            let overlap = d - (this.rad + other.rad);
            let dir = impactVector.copy();
            dir.setMag(overlap * 0.5);
            this.pos.add(dir);
            other.pos.sub(dir);

            d = this.rad + other.rad;
            impactVector.setMag(d); 

            let mSum = this.mas + other.mas;
            let vDiff = p5.Vector.sub(other.vel, this.vel);
            
            let num = vDiff.dot(impactVector);
            let den = mSum * d*d;

            // Particle A (this)
            let deltaVA = impactVector.copy()
            deltaVA.mult((2 * other.mas * num) / den);
            this.vel.add(deltaVA);

            // Particle B (other)
            let deltaVB = impactVector.copy();
            deltaVB.mult((-2 * this.mas * num) / den);
            other.vel.add(deltaVB);
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