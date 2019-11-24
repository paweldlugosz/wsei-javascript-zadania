let Calculator = function() {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    let result = num1 + num2;
    this.history.push("added " + num1 + " to " + num2 + " got " + result);
    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    let result = num1 * num2;
    this.history.push("multiplied  " + num1 + " with " + num2 + " got " + result);
    return result;
}

Calculator.prototype.subtract = function(num1, num2) {
    let result = num1 - num2;
    this.history.push("subtracted  " + num1 + " from " + num2 + " got " + result);
    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    let result = num1 / num2;
    this.history.push("divided  " + num1 + " by " + num2 + " got " + result);
    return result;
}

Calculator.prototype.printOperations = function() {
    console.table(this.history);
}

Calculator.prototype.clearOperations = function() {
    this.history = [];
}

let calc = new Calculator();
calc.add(2, 3);
calc.multiply(2, 3);
calc.subtract(2, 3);
calc.divide(2, 4);
calc.printOperations();
calc.clearOperations();
calc.printOperations();
