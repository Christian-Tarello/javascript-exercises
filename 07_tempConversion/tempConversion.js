const ftoc = function(degrees) {
  return +(((degrees-32)*(5/9)).toFixed(1));
};

const ctof = function(degrees) {
  return +(((degrees*(9/5))+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
