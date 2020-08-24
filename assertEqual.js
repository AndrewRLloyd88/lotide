// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Paint", "paint");
assertEqual(28, 279);
assertEqual(null, undefined);
assertEqual(true, 1 + 1);
assertEqual(true, true);
assertEqual(200 - 5, 190 + 5);

module.exports = assertEqual;