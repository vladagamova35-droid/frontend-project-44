#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { getRandomInt, greetUser } from '../src/cli.js'

const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let totalCount = 0
  const maxCount = 3

  while (totalCount < maxCount) {
    const randomNumber = getRandomInt(25)
    const isEven = randomNumber % 2 === 0
    const correctAnswer = isEven ? 'yes' : 'no'

    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim()

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      totalCount++
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return false
    }
  }
  console.log(`Congratulations, ${name}!`)
  return true
}

evenGame(greetUser())