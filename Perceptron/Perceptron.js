class Perceptron {

    constructor() {
        this.weights = [];

        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = Math.random(-1, 1);
        }
    }

    guess(inputs) {
        let sum = 0;
        let output;
        for (let i = 0; i < this.weights.length; i++) { 
            sum += inputs[i] * this.weights[i];
        }
        output = THIS.activationFunction(sum);
        return output;
    }

    activationFunction(n) {
        return n >= 0 ? 1 : -1;
    }
}