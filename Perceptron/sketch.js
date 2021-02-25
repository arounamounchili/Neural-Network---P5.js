let perceptron;
let points = []

function setup() {
    createCanvas(600, 600);
    perceptron = new Perceptron();
    let inputs = [-1, 0.5];
    let prediction = perceptron.prediction(inputs);
    console.log(prediction);

    for (let i = 0; i < 100 ;i++) {
        points.push(new Point(400, 400))
    }
}

function draw() {    
    background(255);
    stroke(0);
    line(0,0,width, height);
    for (const p of points) {
        p.show();
    }

    for (const p of points) {
        const inputs = [p.x, p.y];
        const target = p.label;
        perceptron.train(inputs, target);
        
        let prediction = perceptron.prediction(inputs);
        if (prediction === target) {
            fill(0, 255, 0);
        } else {
            fill(255, 0, 0);
        }
        noStroke();
        ellipse(p.x, p.y, 5, 5);
    }
}