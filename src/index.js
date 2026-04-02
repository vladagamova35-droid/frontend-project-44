// src/index.js
import readlineSync from 'readline-sync'

export const runGame = (gameRules, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  
  console.log(gameRules)
  
  let correctAnswers = 0
  const requiredCorrectAnswers = 3
  
  while (correctAnswers < requiredCorrectAnswers) {
    const { question, correctAnswer } = generateRound()
    
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim()
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers++
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  
  console.log(`Congratulations, ${userName}!`)
};

