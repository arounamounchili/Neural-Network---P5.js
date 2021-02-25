class Point {
    constructor(w, h) {
        this.x = Math.floor( Math.random() * w);
        this.y = Math.floor(Math.random() * h);
        this.label = (this.x > this.y) ? 1 : -1; 
    }

    show() {
        stroke(0);
        if (this.label === 1) {
             fill(255)
         } else{ 
            fill(0) 
        };
        ellipse(this.x, this.y, 10, 10);
    }
}