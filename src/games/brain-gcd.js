import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  let gcd = Math.min(x, y);
  while (gcd > 1) {
    if (x % gcd !== 0 || y % gcd !== 0) {
      gcd -= 1;
    } else break;
  }
  return gcd;
};

const generateQuestionAndAnswer = () => {
  const x = generateRandomNumber(1, 100);
  const y = generateRandomNumber(1, 100);
  const question = `${x} ${y}`;
  const rightAnswer = findGcd(x, y).toString();
  return [question, rightAnswer];
};

const launchBrainGcdGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainGcdGame;
