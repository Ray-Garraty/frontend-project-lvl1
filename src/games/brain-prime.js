import generateRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const number = generateRandomNumber(0, 100);
  const isPrime = (n) => {
    let div = Math.round(n / 2);
    while (div > 1) {
      if (n % div === 0) {
        return false;
      }
      div -= 1;
    }
    return true;
  };
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

export { gameTask, generateQuestionAndAnswer };
