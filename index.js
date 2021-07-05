#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const clip = require('clipboardy')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const log = console.log

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'Length of Password', '8')
    .option('-s, --save', 'Save Password to passwords.txt')
    .option('-nn, --no-numbers', 'Remove Numbers')
    .option('-ns, --no-symbols', 'Remove Symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts()

// Get Gen Password
const generatedPassword = createPassword(length, numbers, symbols)

if (save) {
    savePassword(generatedPassword)
}

// Copy to clipboard 
clip.writeSync(generatedPassword);

// Output gen password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Copied to Clipbaord'))