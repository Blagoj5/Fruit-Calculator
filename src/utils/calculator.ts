export type Operator = '+' | '-' | '*' | '/';
export const calculator = (
  operand: number,
  operand2: number,
  operator: Operator
) => {
  switch (operator) {
    case '+':
      return operand + operand2;
    case '*':
      return operand * operand2;
    case '/':
      return operand / operand2;
    default:
      // is -
      return operand - operand2;
  }
};
