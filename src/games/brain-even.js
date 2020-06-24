import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionAndAnswer = () => {
  const numberForQuestion = generateRandomNumber(1, 100);
  const question = numberForQuestion.toString();
  const rightAnswer = isEven(numberForQuestion) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const launchBrainEvenGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainEvenGame;
