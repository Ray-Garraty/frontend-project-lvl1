import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => (y === 0 ? x : findGcd(y, x % y));

const generateQuestionAndAnswer = () => {
  const x = generateRandomNumber(1, 100);
  const y = generateRandomNumber(1, 100);
  const question = `${x} ${y}`;
  const rightAnswer = findGcd(x, y).toString();
  return [question, rightAnswer];
};

const launchBrainGcdGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainGcdGame;
