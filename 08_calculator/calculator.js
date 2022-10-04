const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(sequence) {
  let finalSum = 0;
  for (let i = 0; i<sequence.length;i++){
    finalSum+=sequence[i];
  }
  return finalSum;
	
};

const multiply = function(sequence) {
  let result = sequence.reduce((lastNumber, currentNumber) => {return lastNumber*currentNumber;}, 1);
  return result;
};

const power = function(num, index) {
  return Math.pow(num, index);	
};

const factorial = function(num) {
  let result = 1;
  for (let i = 2; i<=num;i++){
    result*=i;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
