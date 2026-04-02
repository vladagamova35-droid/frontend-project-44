#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { primeGameRules, generatePrimeRound } from '../src/games/prime.js'

runGame(primeGameRules, generatePrimeRound)