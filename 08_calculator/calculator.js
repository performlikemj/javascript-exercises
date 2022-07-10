const add = function(...values) {
	const add = values.reduce((total, value) => total += value, 0);
  return add;
};

const subtract = function(...values) {
	const minus = values.reduce((sub, value) => sub -= value);
  return minus;
};

const sum = function(values) {
  const sum = values.reduce((total, value) => total += value, 0);
  return sum;
};

const multiply = function(values) {
  const multi = values.reduce((total, value) => total *= value);
  return multi;
};

const power = function(a,b) {
	const pow = a**b;
  return pow;
};

const factorial = function(value) {
	if (value === 0) {
    return 1;
  }
  let numberList = [];
  for (let i = 1; i <= value; i++){
    numberList.push(i);
  }
  const fact = numberList.reduce((total, number) => total *= number);
  return fact;
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
