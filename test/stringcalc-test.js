var StringCalc = require('../stringcalc')
var assert = require('assert')

// Create a simple String calculator with a method int Add(string numbers)
// The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
// Start with the simplest test case of an empty string and move to 1 and two numbers
// Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
// Remember to refactor after each passing test

// Allow the Add method to handle an unknown amount of numbers
// Allow the Add method to handle new lines between numbers (instead of commas).
// the following input is ok:  “1\n2,3”  (will equal 6)
// the following input is NOT ok:  “1,\n” (not need to prove it - just clarifying)
// Support different delimiters
// to change a delimiter, the beginning of the string will contain a separate line that looks like this:   “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
// the first line is optional. all existing scenarios should still be supported
// Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.if there are multiple negatives, show all of them in the exception message

describe ('StringCalc', function() {
  var calc = new StringCalc();
  describe('#add()', function() {

    it('should return zero for no args', function() {
      assert.equal(0, calc.add());
    });

    it('should return zero for empty string', function() {
      assert.equal(0, calc.add(''));
    });

    it('should return the value of one argument', function() {
      assert.equal(1, calc.add('1'));
    });

    it('should add the values of two arguments', function() {
      assert.equal(3, calc.add('1,2'));
    });

    it('should handle an unknown amount of numbers', function() {
      assert.equal(15, calc.add('1,2,3,4,5'));
    });

    it('should allow newlines between numbers', function() {
      assert.equal(15, calc.add('1,2,3,\n4,5'));
    });

    it('should not allow new lines instead of numbers', function() {
      assert.throws(function () {
        calc.add('1,2,3,\n');
      }, Error);
    });

    it('should throw on negative numbers', function() {
      assert.throws(function () {
        calc.add('1,-1');
      }, Error);
    });

  });

});
