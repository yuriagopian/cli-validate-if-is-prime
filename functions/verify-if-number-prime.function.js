module.exports = (inputedNumber) => {
  for (let i = 2; i < inputedNumber; i++)
    if (inputedNumber % i === 0) {
      return false;
    }
  return inputedNumber > 1;
};
