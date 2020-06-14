#!/usr/bin/env node
import { greeting, game } from '../../src/index.js';

const userName = greeting();

const gameTask = 'Find the greatest common divisor of given numbers.';

const questionAndAnswer = () => {
  const x = Math.round(100 * Math.random());
  const y = Math.round(100 * Math.random());
  const lesserNumber = x < y ? x : y;
  let gcd = Math.round(lesserNumber / 2);
  while (gcd > 1) {
    if (x % gcd !== 0 || y % gcd !== 0) {
      gcd -= 1;
    } else break;
  }
  return [`${x} ${y}`, gcd.toString()];
};

console.log(game(userName, gameTask, questionAndAnswer));
