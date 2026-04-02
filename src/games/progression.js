import { getRandomInt } from '../cli.js'

export const progressionGameRules = 'What number is missing in the progression?'

export const generateProgressionRound = () => {
  const length = 10
  const start = getRandomInt(20)
  const step = getRandomInt(5) + 1
  const progression = []
  for (let index = 0; index < length; index++) {
    const currentElement = start + index * step
    progression.push(currentElement)
  }
  const hiddenIndex = getRandomInt(length) - 1
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  
  return { question, correctAnswer }
}