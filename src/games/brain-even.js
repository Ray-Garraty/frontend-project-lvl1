import generateRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const n = generateRandomNumber(0, 10);
  const rightAnswer = n % 2 === 0 ? 'yes' : 'no';
  return [n, rightAnswer];
};

export { gameTask, generateQuestionAndAnswer };
