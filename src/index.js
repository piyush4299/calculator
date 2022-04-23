const prompt = require("prompt-sync")({ sigint: true });
const Calculator = require("./Calculator.js");

const takeNumbersInput = () => {
  const firstNumber = prompt("Enter first number: ");
  const secondNumber = prompt("Enter second number: ");
  return { firstNumber, secondNumber };
};

let calculationGameStat = true;
while (calculationGameStat) {
  let operationToPerform = prompt(
    "Enter choice of operation to perform: 1.ADD 2.SUBTRACT 3.MULTIPLY 4.DIVIDE 5.EXIT "
  );

  operationToPerform = Number(operationToPerform);
  if ([1, 2, 3, 4].includes(operationToPerform)) {
    var { firstNumber, secondNumber } = takeNumbersInput();
  }
  const calculatorObj = new Calculator(firstNumber, secondNumber);
  switch (operationToPerform) {
    case 1:
      console.log(
        "Result for Addition operation for the two list number is: ",
        calculatorObj.addNumbers(firstNumber, secondNumber)
      );
      break;
    case 2:
      console.log(
        "Result for Addition operation for the two list number is: ",
        calculatorObj.subtractNumbers(firstNumber, secondNumber)
      );
      break;
    case 3:
      console.log(
        "Result for Addition operation for the two list number is: ",
        calculatorObj.multiplyNumbers(firstNumber, secondNumber)
      );
      break;
    case 4:
      console.log(
        "Result for Addition operation for the two list number is: ",
        calculatorObj.divideNumbers(firstNumber, secondNumber)
      );
      break;
    case 5:
      console.log("Exiting the calculator game");
      calculationGameStat = false;
      break;
    default:
      console.log("Wrong choice");
      break;
  }
}
