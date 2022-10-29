#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');

program.version(package.version);

program
    .command('add [todo]')
    .description('Adiciona um to-do')
    .action((todo) => {
        console.log(todo);
    });

program.parse(process.argv);
const verifyIfNumberIsPrime = require("./functions/verify-if-number-prime.function");
const { validNumberTypeAndValue } = require("./validators/valid-number-input");

const validDivisors = (inputedNumber) => {
  validNumberTypeAndValue(inputedNumber);

  let divisors = [];
  let primeDivisors = [];
  for (i = 0; i <= inputedNumber; i++) {
    if (inputedNumber % i === 0) {
      divisors.push(i);
      const isDivisorPrimeNumber = verifyIfNumberIsPrime(i);
      if (isDivisorPrimeNumber) {
        primeDivisors.push(i);
      }
    }
  }
  return { divisors, primeDivisors };
};

module.exports = { validDivisors };

console.log(validDivisors(Number(process.argv[3]) || 35));
