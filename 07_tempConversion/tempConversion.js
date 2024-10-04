const convertToCelsius = function(temp) {
   num = (temp-32)*(5/9)
   return Math.round(num*10)/10
   //return Number.isInteger(num)? num : num.toFixed(1)
};

const convertToFahrenheit = function(temp) {
   num = ((9/5)*temp)+32
   return Math.round(num*10)/10
   //return Number.isInteger(num)? num: num.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
