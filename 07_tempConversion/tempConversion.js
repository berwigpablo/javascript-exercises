const convertToCelsius = function(degFahrenheit) {
  let degCelsius = (degFahrenheit - 32) * (5 / 9) //Fahrenheit to Celsius equation

  if (Math.floor(degCelsius) !== degCelsius){
    degCelsius = degCelsius.toFixed(1) 
  }
  return Number(degCelsius)
};

const convertToFahrenheit = function(degCelsius) {
  let degFahrenheit = (degCelsius / (5 / 9)) + 32 //Celsius to Fahrenheit equation

  if (Math.floor(degFahrenheit) !== degFahrenheit){
    degFahrenheit = degFahrenheit.toFixed(1) 
  }
  return Number(degFahrenheit)

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};