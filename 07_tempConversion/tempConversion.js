const ftoc = function(degrees) {
  return (degrees-32)*(5/9);
};

const ctof = function(degrees) {
  return (degrees*(5/9))+32
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
