#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { getRandomInt, checkAnswer } from '../src/utils.js'

const playBrainCalc = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('What is the result of the expression?')

  const operations = [
    { op: '+', func: (a, b) => a + b },
    { op: '-', func: (a, b) => a - b },
    { op: '*', func: (a, b) => a * b },
  ]

  const roundsToWin = 3
  let correctAnswers = 0

  while (correctAnswers < roundsToWin) {
    const num1 = getRandomInt(1, 20)
    const num2 = getRandomInt(1, 20)
    const operation = operations[getRandomInt(0, operations.length - 1)]
    
    const correctResult = operation.func(num1, num2)
    const question = `${num1} ${operation.op} ${num2}`
    
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    
    if (checkAnswer(userAnswer, correctResult.toString())) {
      console.log('Correct!')
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  
  console.log(Congratulations, ${userName}!);
};

playBrainCalc();