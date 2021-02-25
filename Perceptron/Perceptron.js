class Perceptron {

    constructor() {
        this.weights = new Array(2);
        this.lr = 0.1;

        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = Math.random(-1, 1);
        }
    }

    prediction(inputs) {
        let sum = 0;
        let output;
        for (let i = 0; i < this.weights.length; i++) { 
            sum += inputs[i] * this.weights[i];
        }
        output = this.activationFunction(sum);
        return output;
    }

    activationFunction(n) {
        return (n >= 0) ? 1 : -1;
    }

    train(inputs, target) {
        const prediction = this.prediction(inputs);
        const error = target - prediction;

        for (let i = 0; i < this.weights.length; i++) { 
            this.weights[i] += error * inputs[i] * this.lr;
        }
    }
}