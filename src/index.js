import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const game = (gameTask, questionAndAnswer) => {
  const userName = greeting();
  console.log(gameTask);
  for (let i = 0; i < 3; i += 1) {
    const qAndA = questionAndAnswer();
    console.log(`Question: ${qAndA[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === qAndA[1]) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${qAndA[1]}".`);
      console.log(`Let's try again, ${userName}!`);
      return '';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return '';
};
export { greeting, game };
