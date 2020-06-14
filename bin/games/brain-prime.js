#!/usr/bin/env node
import { greeting, game } from '../../src/index.js';

const userName = greeting();

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionAndAnswer = () => {
  const number = Math.round(100 * Math.random());
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
console.log(game(userName, gameTask, questionAndAnswer));
