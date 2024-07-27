class Photon {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(-c, 0);

        this.theta = PI;
        this.history = [];
        this.stopped = false;
        this.closest = 3;
        
        this.col = color(100, 200, 100, 150);
    }

    stop() {
        this.stopped = true;
    }

    update() {
        if (!this.stopped) {
            this.history.push(this.pos.copy());
            const deltaV = this.vel.copy().mult(dt);
            this.pos.add(deltaV);

            // Color Coding
            let distance = p5.Vector.dist(this.pos, m87.pos);
            if (distance < m87.rs * 6 - 6) {
                this.closest = (this.closest >= 2) ? 2: 1;
                if (this.closest >= 2) {
                    this.col = color(255, 255, 0, 50);
                } else {
                    this.col = color(255, 100, 0, 50);
                }
            }
            if (distance < m87.rs * 3 - 4) {
                this.closest = 1;
                this.col = color(255, 100, 0, 50);
            }

            // Proformance Improvements
            if (this.pos.x < -5) {
                // this.col = color(0, 255, 0, 50);
                this.stop();
            } else if (this.pos.x > width + 5) {
                // this.col = color(0, 255, 0, 50);
                this.stop();
            }

            if (this.pos.y < -5) {
                // this.col = color(0, 255, 0, 50);
                this.stop();
            } else if (this.pos.y > height + 5) {
                // this.col = color(0, 255, 0, 50);
                this.stop();
            }
        }
    }

    show() {
        stroke(this.col);
        strokeWeight(5);
        point(this.pos.x, this.pos.y);

        strokeWeight(1);
        beginShape();
        for (const vert of this.history) {
            vertex(vert.x, vert.y);
        }
        endShape();
    }
}