import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  for (let div = Math.round(n / 2); div > 1; div -= 1) {
    if (n % div === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const number = generateRandomNumber(2, 100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const launchBrainPrimeGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainPrimeGame;
