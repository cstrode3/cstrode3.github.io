class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];
        this.precious = undefined;

        this.wall = false;
        if (random(1) < 0.4) {
            this.wall = true;
        }
    }

    addNeighbors(grid) {
        let i = this.i;
        let j = this.j;
        
        if (i < size - 1) {
            this.neighbors.push(grid[i + 1][j]);
        }
        if (i > 0) {
            this.neighbors.push(grid[i - 1][j]);
        }
        if (j < size - 1) {
            this.neighbors.push(grid[i][j + 1]);
        }
        if (j > 0) {
            this.neighbors.push(grid[i][j - 1]);
        }
        if (i > 0 && j > 0) {
            this.neighbors.push(grid[i - 1][j - 1]);
        }
        if (i < size - 1 && j > 0) {
            this.neighbors.push(grid[i + 1][j - 1]);
        }
        if (i > 0 && j < size - 1) {
            this.neighbors.push(grid[i - 1][j + 1]);
        }
        if (i < size - 1 && j < size - 1) {
            this.neighbors.push(grid[i + 1][j + 1]);
        }
    }

    show(color) {
        fill(color);
        noStroke();
        if (this.wall) {
            fill(0);
            ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 1.2, h / 1.2);
        } else if (closedSet.includes(this) && !path.includes(this)) {
            ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 1.2, h / 1.2);
        } else if (openSet.includes(this)) {
            ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 1.2, h / 1.2);
        }
    }
}