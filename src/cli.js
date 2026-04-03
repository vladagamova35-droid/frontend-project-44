import readlineSync from 'readline-sync'

export const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max) + 1
}