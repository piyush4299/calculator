const prompt = require("prompt-sync")({ sigint: true });

const addNumbers = (firstNumber, secondNumber) => {
  return Number(firstNumber) + Number(secondNumber);
};

const subtractNumbers = (firstNumber, secondNumber) => {
  return Number(firstNumber) - Number(secondNumber);
};

const multiplyNumbers = (firstNumber, secondNumber) => {
  return Number(firstNumber) * Number(secondNumber);
};

const divideNumbers = (firstNumber, secondNumber) => {
  return Number(firstNumber) / Number(secondNumber);
};

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
  switch (operationToPerform) {
    case 1:
      console.log(
        "Result for Addition operation for the two list number is: ",
        addNumbers(firstNumber, secondNumber)
      );
      break;
    case 2:
      console.log(
        "Result for Addition operation for the two list number is: ",
        subtractNumbers(firstNumber, secondNumber)
      );
      break;
    case 3:
      console.log(
        "Result for Addition operation for the two list number is: ",
        multiplyNumbers(firstNumber, secondNumber)
      );
      break;
    case 4:
      console.log(
        "Result for Addition operation for the two list number is: ",
        divideNumbers(firstNumber, secondNumber)
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
