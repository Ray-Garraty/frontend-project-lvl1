#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const checkUserAnswer = (n, userAnswer) => {
  const rightAnswer = n % 2 === 0 ? 'yes' : 'no';
  return (rightAnswer === userAnswer) ? [true, rightAnswer] : [false, rightAnswer];
};

for (let i = 0; i < 3; i += 1) {
  const n = Math.round((Math.random() * 10));
  console.log(`Question: ${n}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (checkUserAnswer(n, userAnswer)[0]) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${checkUserAnswer(n, userAnswer)[1]}".`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}
