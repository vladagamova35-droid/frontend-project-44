import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log("Welcome to the Brain Games!")
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  return name
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export { getRandomInt, greetUser }