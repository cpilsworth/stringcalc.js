var StringCalc = function() {};

StringCalc.prototype.add = function(operand){
  if (operand === undefined || operand === '') {
    return 0;
  }
  return operand.split(",").reduce(function(previous, current)  {
      return parseInt(previous) + parseInt(current);
  });
};

module.exports = StringCalc;
