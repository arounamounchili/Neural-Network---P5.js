let perceptron;

function setup() {
    createCanvas(600, 600);
    perceptron = new Perceptron();
    let inputs = [-1, 0.5];
    let guess = perceptron.guess(inputs);
    console.log(guess);

}

function draw() {    
    background(0);
}