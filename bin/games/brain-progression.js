#!/usr/bin/env node
import { greeting, game } from '../../src/index.js';

const userName = greeting();

const gameTask = 'What number is missing in the progression?';

const questionAndAnswer = () => {
  let number = Math.round(10 * Math.random());
  const shift = Math.round(5 * Math.random());
  const emptyPosition = Math.round(9 * Math.random());
  const numbers = [];
  for (let i = 0; i < 10; i += 1) {
    numbers.push(number);
    number += shift;
  }
  const rightAnswer = numbers[emptyPosition];
  numbers[emptyPosition] = '..';
  return [numbers.join(' '), rightAnswer.toString()];
};
console.log(game(userName, gameTask, questionAndAnswer));
