#!/usr/bin/env node

import { greeting, game } from '../../src/index.js';

const userName = greeting();

const gameTask = 'What is the result of the expression?';

const questionAndAnswer = () => {
  const x = Math.round(100 * Math.random());
  const y = Math.round(100 * Math.random());
  const z = Math.round(3 * Math.random());
  let operator = '';
  let rightAnswer = 0;
  switch (z) {
    default:
      operator = '+';
      rightAnswer = x + y;
      break;
    case 2:
      operator = '-';
      rightAnswer = x - y;
      break;
    case 3:
      operator = '*';
      rightAnswer = x * y;
      break;
  }
  return [`${x} ${operator} ${y}`, rightAnswer.toString()];
};

console.log(game(userName, gameTask, questionAndAnswer));
