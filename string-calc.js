function isEmpty(params) {
  return (params === undefined || params === '');
}
function add(params) {
  if (isEmpty(params)) {
    return 0;
  }
  var operands = params.split(',');
  return operands.reduce(function(previous, current) {
    if (current === "\n") {
      throw new Error('No operand found');
    }
    return parseInt(current, 10) + parseInt(previous, 10);
  })
}



module.exports = { add: add };
