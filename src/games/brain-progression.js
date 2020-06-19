import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
  let number = generateRandomNumber(0, 10);
  const shift = generateRandomNumber(1, 10);
  const emptyPosition = generateRandomNumber(0, 9);
  const numbers = [];
  for (let i = 0; i < 10; i += 1) {
    numbers.push(number);
    number += shift;
  }
  const rightAnswer = numbers[emptyPosition];
  numbers[emptyPosition] = '..';
  return [numbers.join(' '), rightAnswer.toString()];
};

const launchBrainProgressionGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainProgressionGame;
