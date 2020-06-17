#!/usr/bin/env node
import { game } from '../src/index.js';
import { gameTask, generateQuestionAndAnswer } from '../src/games/brain-calc.js';

game(gameTask, generateQuestionAndAnswer);
