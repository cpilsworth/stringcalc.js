var StringCalc = function() {};

StringCalc.prototype.isNegative = function(entry) {
  return entry.indexOf('-') > -1;
}

StringCalc.prototype.add = function(inputs) {
  var operands = this.operands(inputs);
  return operands.reduce(function(current, prev) {
    return parseInt(current) + parseInt(prev);
  });
}

StringCalc.prototype.operands = function(ops) {
  if (ops === undefined) {
    return [0];
  }
  var operands = ops.split(',');
  var calc = this;
  operands.forEach(function(item) {
      if (item === '\n' || calc.isNegative(item)) {
        throw Error('Negative numbers not allowed');
      }
  });
  return operands;
}

module.exports = StringCalc;
