module.exports = class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  addNumbers = (firstNumber, secondNumber) => {
    return Number(firstNumber) + Number(secondNumber);
  };

  subtractNumbers = (firstNumber, secondNumber) => {
    return Number(firstNumber) - Number(secondNumber);
  };

  multiplyNumbers = (firstNumber, secondNumber) => {
    return Number(firstNumber) * Number(secondNumber);
  };

  divideNumbers = (firstNumber, secondNumber) => {
    return Number(firstNumber) / Number(secondNumber);
  };
};
