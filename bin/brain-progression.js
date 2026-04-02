#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { progressionGameRules, generateProgressionRound } from '../src/games/progression.js'

runGame(progressionGameRules, generateProgressionRound)