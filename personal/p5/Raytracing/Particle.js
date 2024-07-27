class Particle{
    constructor() {
        this.fov = 60;
        this.pos = createVector(sceneW / 2, sceneH / 2);
        this.rays = [];
        this.heading = 0;
        for (let angle = -this.fov / 2; angle < this.fov / 2; angle += 1) {
            this.rays.push(new Ray(this.pos, radians(angle)));
        }
    }

    look(walls) {
        let i = 0;
        const scene = [];
        for (const ray of this.rays) {
            let closest = null;
            let record = Infinity;
            for (const wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    let distance = p5.Vector.dist(this.pos, pt);
                    const angle = ray.dir.heading() - this.heading;
                    if (!mouseIsPressed) {
                        distance *= cos(angle);
                    }
                    if (distance < record) {
                        record = distance;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
            scene[i] = record;
            i++;
        }
        return scene;
    }

    updateFOV(fov) {
        this.fov = fov;
        this.rays = [];
        for (let angle = -this.fov / 2; angle < this.fov / 2; angle += 1) {
            this.rays.push(new Ray(this.pos, radians(angle)  + this.heading));
        }
    }

    rotate(angle) {
        this.heading += angle;
        let index = 0;
        for (let angle = -this.fov / 2; angle < this.fov / 2; angle += 1) {
            this.rays[index].setAngle(radians(angle) + this.heading);
            index++;
        }
    }

    move(amnt) {
        const vel = p5.Vector.fromAngle(this.heading);
        vel.setMag(amnt);
        this.pos.add(vel);
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 10);
        for (const ray of this.rays) {
            ray.show();
        }
    }
}