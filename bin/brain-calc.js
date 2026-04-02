#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { calcGameRules, generateCalcRound } from '../src/games/calc.js'

runGame(calcGameRules, generateCalcRound)

