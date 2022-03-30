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

console.log(validDivisors(35));
// console.log(isPrime(1));
