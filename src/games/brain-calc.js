import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'What is the result of the expression?';

const operatorsAndFormulas = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};
const operators = Object.keys(operatorsAndFormulas);

const generateQuestionAndAnswer = () => {
  const x = generateRandomNumber(0, 100);
  const y = generateRandomNumber(0, 100);
  const indexOfOperator = generateRandomNumber(0, operators.length - 1);
  const operator = operators[indexOfOperator];
  const question = `${x} ${operator} ${y}`;
  const rightAnswer = operatorsAndFormulas[operator](x, y).toString();
  return [question, rightAnswer];
};

const launchBrainCalcGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainCalcGame;
