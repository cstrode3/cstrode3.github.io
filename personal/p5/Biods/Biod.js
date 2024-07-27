function findProjection(start, future, end) {
    let v1 = p5.Vector.sub(future, start);
    let v2 = p5.Vector.sub(end, start);
    v2.normalize();
    let sp = v1.dot(v2);
    v2.mult(sp);
    v2.add(start);
    return v2;
  }

class Biod {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.r = 20;

        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

        this.maxVel = 4;
        this.maxAcc = 0.1;

        this.arrivalRange = 100;
        this.wanderTheta = PI / 2;
        this.currentPath = [];
        this.paths = [this.currentPath];
    }

    flee(target) {
        return this.seek(target).mult(-1);
    }

    evade(threat) {
        return this.pursue(threat).mult(-1);
    }

    arrive(target) {
        return this.seek(target, true);
    }

    pursue(prey) {
        let target = prey.pos.copy();
        let prediction = prey.vel.copy();
        prediction.mult(10);
        target.add(prediction);
        return this.seek(target);
    }

    follow(avanue) {
        // Predict future position
        let future = this.vel.copy();
        future.mult(50);
        future.add(this.pos);

        // Is fute position on path?
        let target = findProjection(avanue.start, future, avanue.end);

        let distance = p5.Vector.dist(future, target);
        if (distance > avanue.radius) {
            return this.seek(target);
        } else createVector(0, 0);

        // Debugging data
        stroke(255);
        strokeWeight(1);
        line(future.x, future.y, target.x, target.y);
        line(future.x, future.y, this.pos.x, this.pos.y);

        stroke(0, 255, 0);
        strokeWeight(6);
        point(future.x, future.y);
        
        stroke(255, 0, 0);
        strokeWeight(6);
        point(target.x, target.y);
    }

    seek(target, arrive = false) {
        let force = p5.Vector.sub(target, this.pos);
        let speed = this.maxVel;

        if (arrive) {
            let distance = force.mag();
            if (distance < this.arrivalRange) {
                speed = map(distance, 0, this.arrivalRange, 0, this.maxVel);
            }
        }

        force.setMag(speed);
        force.sub(this.vel);
        force.limit(this.maxAcc);
        return force;
    }

    wander() {
        let wanderPoint = this.vel.copy();
        wanderPoint.setMag(100);
        wanderPoint.add(this.pos);

        let wanderRadius = 50;
        
        let theta = this.wanderTheta + this.vel.heading();
        let x = wanderRadius * cos(theta);
        let y = wanderRadius * sin(theta);
        wanderPoint.add(x, y);

        let direction = wanderPoint.sub(this.pos);
        direction.setMag(this.maxAcc);
        this.applyForce(direction);

        let rangeOfDisplacement = 0.3;
        this.wanderTheta += random(-rangeOfDisplacement, rangeOfDisplacement);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxVel);
        this.pos.add(this.vel);
        this.acc.set(0, 0);

        if (frameCount % 5 == 0) {
            this.currentPath.push(this.pos.copy());
        }
    }

    edges() {
        let hitEdge = false;
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
            hitEdge = true;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
            hitEdge = true;
        }

        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
            hitEdge = true;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
            hitEdge = true;
        }

        if (hitEdge) {
            this.currentPath = [];
            this.paths.push(this.currentPath);
        }
    }

    show() {
        push()
        stroke(255);
        strokeWeight(1);
        fill(255, 50);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
        pop();
    }
}

class Prey extends Biod {
    constructor(x, y) {
        super(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(5);
    }

    show() {
        push()
        stroke(0, 0, 255);
        strokeWeight(1);
        fill(0, 0, 255, 50);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
        pop();
    }
}

class Hunter extends Biod {
    constructor(x, y) {
        super(x, y);
        this.maxVel = 6;
    }

    show() {
        push()
        stroke(255, 0, 0);
        strokeWeight(1);
        fill(255, 0, 0, 50);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
        pop();
    }
}

class Monster extends Biod {
    constructor(x, y) {
        super(x, y);
        this.maxVel = 10;
    }

    show() {
        push()
        stroke(255, 0, 255);
        strokeWeight(1);
        fill(255, 0, 255, 50);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
        pop();
    }
}

class Explorer extends Biod {
    constructor(x, y) {
        super(x, y);
        this.vel = p5.Vector.random2D();
    }

    show() {
        push()
        stroke(0, 255, 255);
        strokeWeight(1);
        fill(0, 255, 255, 50);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
        pop();

        for (const trail of this.paths) {
            beginShape();
            noFill();
            stroke(255);
            strokeWeight(1);
            for (let vert of trail) {
                vertex(vert.x, vert.y);
            }
            endShape();
        }
    }
}

class Follower extends Biod {
    constructor(x, y) {
        super(x, y);
        this.vel = p5.Vector.random2D();
    }

    show() {
        push()
        stroke(255, 255, 0);
        strokeWeight(1);
        fill(255, 255, 0, 50);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
        pop();
    }
}