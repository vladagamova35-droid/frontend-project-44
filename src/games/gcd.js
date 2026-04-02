import { getRandomInt } from '../cli.js'

export const gcdGameRules = 'Find the greatest common divisor of given numbers.'

export const findGCD = (a, b) => {
  let first = Math.abs(a)
  let second = Math.abs(b)

  while (second !== 0) {
    const temp = second
    second = first % second
    first = temp
  }
  
  return first
}

export const generateGCDRound = () => {
  const num1 = getRandomInt(100)
  const num2 = getRandomInt(100)
  const correctAnswer = String(findGCD(num1, num2))
  
  return {
    question: `${num1} ${num2}`,
    correctAnswer
  }
}