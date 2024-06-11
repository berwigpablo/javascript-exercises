const add = function(...numbers) {
  return numbers.reduce((total, number) => {
    if(numbers.length === 0){
      return 0
    } else{
      return +total + +number
    }
  }, 0)
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
  if(numbers.length === 0) return 0
	return numbers.reduce((total, number) => total + number);
}
const multiply = function(numbers) {
  if(numbers.length === 0) return 0
  return numbers.reduce((total, number) => total * number)
};

const power = function(a, b) {
	return a ** b
};  

const factorial = function(number) {
	if(number === 0 || number === 1) return 1 
  let result = 0;

  for(i = number; i > 1; i--){
    if(i === number){
      result += i * (i - 1);
    } else{
      result *= (i - 1);
    }
  }

  return result
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