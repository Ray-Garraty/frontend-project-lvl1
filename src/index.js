import readlineSync from 'readline-sync';

const numberOfGameRounds = 3;

const runGame = (gameTask, questionAndAnswer) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);
  for (let i = 1; i <= numberOfGameRounds; i += 1) {
    const [question, rightAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;  
    }
      console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
