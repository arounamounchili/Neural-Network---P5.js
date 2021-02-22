class Point {
    constructor() {
        this.x = Math.random(width);
        this.y = Math.random(heigth);
        
        this.label = (x > y) ? 1 : -1; 
    }

    show() {
        stroke(0);
        (this.label === 0) ? fill(255) : fill(0);
        ellipse(x, y, 8, 8);
    }
}