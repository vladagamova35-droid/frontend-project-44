#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { gcdGameRules, generateGCDRound } from '../src/games/gcd.js'

runGame(gcdGameRules, generateGCDRound)