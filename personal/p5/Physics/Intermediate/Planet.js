class Planet {
    constructor(x, y, m) {
        this.pos = createVector(x, y);

        this.mas = m;
        this.rad = sqrt(this.mas);
    }

    pull(moon) {
        let force = p5.Vector.sub(this.pos, moon.pos);
        let distanceSq = constrain(force.magSq(), 100, 1000);
        let G = 9.8;
        
        let strength = G * (this.mas * moon.mas) / distanceSq;

        force.setMag(strength);
        moon.applyForce(force);
    }

    show() {
        push();
        fill(0, 255, 0);
        ellipse(this.pos.x, this.pos.y, this.rad * 2);
        pop();
    }
}