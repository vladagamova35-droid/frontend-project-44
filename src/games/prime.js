import { getRandomInt } from '../cli.js'

export const primeGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const isPrime = (number) => {
  if (number < 2) return false
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false
  }
  return true
}

export const generatePrimeRound = () => {
  const randomNumber = getRandomInt(100)
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'
  
  return {
    question: String(randomNumber),
    correctAnswer
  }
}