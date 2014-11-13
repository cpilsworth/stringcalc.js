var calc = require('../string-calc');
var assert = require('assert');

describe('StringCalc', function() {

  describe('#add', function() {
      it('should return zero for with no operands', function() {
          assert.equal(0, calc.add());
      })

      it ('it should return zero for an empty string', function() {
          assert.equal(0, calc.add(''));
      })

      it ('it should the input for a single operand', function() {
          assert.equal(1, calc.add('1'));
      })

      it ('it should add two operands', function() {
          assert.equal(3, calc.add('1,2'));
      })

      it ('it should ignore newlines', function() {
          assert.equal(3, calc.add('1,\n2'));
      })

      it ('it should throw with missing operand', function() {
          assert.throws(function() {
            calc.add('1,\n,')
          }, Error);
      })

  });

});
