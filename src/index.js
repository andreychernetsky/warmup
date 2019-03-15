// (0 °C × 9/5) + 32 = 32 °F

module.exports = function warmup(temperature) {
  return Math.round(temprature * (9/5)+32)
};


/*
function warmup(temperature) {
  return Math.round(-20 * (9/5)+32)
};
let temp = -20;
let temp = 10;
console.log(warmup(-20));//-4
console.log(warmup(10));//50*/

