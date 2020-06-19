import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const x = generateRandomNumber(0, 100);
  const y = generateRandomNumber(0, 100);
  const z = generateRandomNumber(1, 3);
  let operator = '';
  let rightAnswer = 0;
  switch (z) {
    default:
      operator = '+';
      rightAnswer = x + y;
      break;
    case 2:
      operator = '-';
      rightAnswer = x - y;
      break;
    case 3:
      operator = '*';
      rightAnswer = x * y;
      break;
  }
  return [`${x} ${operator} ${y}`, rightAnswer.toString()];
};

const launchBrainCalcGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainCalcGame;
