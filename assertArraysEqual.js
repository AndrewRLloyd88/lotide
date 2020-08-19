
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};





//test cases
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL