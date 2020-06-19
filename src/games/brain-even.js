import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const launchBrainEvenGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainEvenGame;
