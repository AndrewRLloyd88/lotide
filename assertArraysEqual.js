const assertArraysEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0, array1Length = array1.length; i < array1Length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//test cases
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL