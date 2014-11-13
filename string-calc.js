function add(params) {
  if (params === undefined || params === '') {
    return 0;
  }
  return params.split(',').reduce(function(previous, current) {
    if (current === "\n") {
      throw new Error('No operand found');
    }
    return parseInt(current, 10) + parseInt(previous, 10);
  })
}

module.exports = { add: add };
