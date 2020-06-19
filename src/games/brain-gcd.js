import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const findGcd = (x, y) => {
    const lesserNumber = x < y ? x : y;
    let gcd = Math.round(lesserNumber / 2);
    while (gcd > 1) {
      if (x % gcd !== 0 || y % gcd !== 0) {
        gcd -= 1;
      } else break;
    }
    return gcd;
  };
  const x = generateRandomNumber(1, 100);
  const y = generateRandomNumber(1, 100);
  const question = `${x} ${y}`;
  const gcd = findGcd(x, y).toString();
  return [question, gcd];
};

const launchBrainGcdGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainGcdGame;
