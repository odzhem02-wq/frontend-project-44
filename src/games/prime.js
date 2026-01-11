import runGame from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(min)
  const upper = Math.floor(max)
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const getRoundData = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const runPrimeGame = () => runGame(description, getRoundData)

export default runPrimeGame
