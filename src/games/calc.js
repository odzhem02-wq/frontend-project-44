import runGame from '../index.js'

const description = 'What is the result of the expression?'

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(min)
  const upper = Math.floor(max)
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const index = getRandomNumber(0, operators.length - 1)
  return operators[index]
}

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const getRoundData = () => {
  const a = getRandomNumber(1, 25)
  const b = getRandomNumber(1, 25)
  const operator = getRandomOperator()

  const question = `${a} ${operator} ${b}`
  const correctAnswer = String(calculate(a, b, operator))

  return [question, correctAnswer]
}

const runCalcGame = () => runGame(description, getRoundData)

export default runCalcGame
