import { getRandomInt } from '../cli.js'

export const calcGameRules = 'What is the result of the expression?'

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = getRandomInt(3) - 1; // 0, 1, или 2
  return operators[randomIndex]
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      return null
  }
}

export const generateCalcRound = () => {
  const num1 = getRandomInt(50)
  const num2 = getRandomInt(50)
  const operator = getRandomOperator()
  const correctAnswer = String(calculate(num1, num2, operator))
  
  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer
  };
};

