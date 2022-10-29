module.exports = {
  validNumberTypeAndValue: (inputedNumber) => {
    if (!inputedNumber) throw "Please input a valid number";
    if (typeof inputedNumber !== "number")
      throw `The value inputed: ${inputedNumber}, is not of type Number`;
  },
};
