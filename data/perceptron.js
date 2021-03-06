class Perceptron {
    constructor() {
        this.weights = [];
        this.learingRate = PERCEPTRON_LEARING_RATE;

        for (let i = 0; i < PERCEPTRON_W_LEN; i++) {
            this.weights.push(random(-1,1));
        }
    }

    fire(inputs){
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return sum >= 0 ? 1 : -1;           //sign function
    }

    train(inputs){
        let answer = this.fire(inputs);
        let orj = inputs[1] < separators[0].func(inputs[0]) ? 1 : -1;
        let error = orj - answer;
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.learingRate;
        }
    }
}