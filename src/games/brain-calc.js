import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const x = generateRandomNumber(0, 100);
  const y = generateRandomNumber(0, 100);
  const operatorsAndFormulas = {
    '+': x + y,
    '-': x - y,
    '*': x * y,
  };
  const operators = Object.keys(operatorsAndFormulas);
  const randomlyChosenOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${x} ${randomlyChosenOperator} ${y}`;
  const rightAnswer = operatorsAndFormulas[randomlyChosenOperator].toString();
  return [question, rightAnswer];
};

const launchBrainCalcGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainCalcGame;
