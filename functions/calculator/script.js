function calculate(num1, operator, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Input must be numbers");
  }
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      if (num2 === 0) throw new Error("cannot divide by zero");
      return num1 / num2;
    default:
      throw new Error("Invalid Operator");
  }
}
