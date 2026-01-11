import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(min)
  const upper = Math.floor(max)
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

const isEven = number => number % 2 === 0

const getRoundData = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const runEvenGame = () => runGame(description, getRoundData)

export default runEvenGame
