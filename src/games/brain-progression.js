import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (firstElement, diff, length) => {
  const progression = [];
  let element = firstElement;
  for (let i = 0; i < length; i += 1) {
    progression.push(element);
    element += diff;
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const firstElement = generateRandomNumber(1, 10);
  const diff = generateRandomNumber(1, 10);
  const progression = generateProgression(firstElement, diff, progressionLength);
  const hiddenElementIndex = generateRandomNumber(0, progressionLength - 1);
  const rightAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const launchBrainProgressionGame = () => runGame(gameTask, generateQuestionAndAnswer);
export default launchBrainProgressionGame;
