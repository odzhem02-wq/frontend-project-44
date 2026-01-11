import runGame from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(min)
  const upper = Math.floor(max)
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

// алгоритм Евклида
const getGcd = (a, b) => {
  let x = a
  let y = b

  while (y !== 0) {
    const temp = x % y
    x = y
    y = temp
  }

  return x
}

const getRoundData = () => {
  const a = getRandomNumber(1, 100)
  const b = getRandomNumber(1, 100)

  const question = `${a} ${b}`
  const correctAnswer = String(getGcd(a, b))

  return [question, correctAnswer]
}

const runGcdGame = () => runGame(description, getRoundData)

export default runGcdGame
