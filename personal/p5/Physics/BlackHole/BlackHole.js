class BlackHole {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mas = m;
        this.rs = (2 * G * this.mas) / (c*c);
    }

    pull(photon) {
        const force = p5.Vector.sub(this.pos, photon.pos);
        const theta = force.heading();
        const r = force.mag();
        const fg = G * this.mas / (r*r);
        let deltaTheta = -fg * (dt / c) * sin(photon.theta - theta);
        deltaTheta /= abs(1.0 - 2.0 * G * this.mas / (r * c*c));

        photon.theta += deltaTheta;
        photon.vel = p5.Vector.fromAngle(photon.theta);
        photon.vel.setMag(c);

        if (r <= this.rs + 0.5) {
            photon.col = color(255, 0, 0, 50);
            photon.stop();
        }
    }

    show() {
        // Black Hole
        fill(0);
        noStroke();
        circle(this.pos.x, this.pos.y, this.rs);

        // Accretion Disk
        noFill();
        stroke(100, 50);
        strokeWeight(64);
        circle(this.pos.x, this.pos.y, this.rs * 3 + 32);
        
        // Unstable Photon Orbit
        stroke(255, 100, 30, 50);
        strokeWeight(32);
        circle(this.pos.x, this.pos.y, this.rs * 1.5 + 16);
    }
}