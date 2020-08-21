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

const flatten = function(array) {
  let flattenedArray = [];
  //loop through the first array
  for (let elem of array) {
    if (Array.isArray(elem)) {
      for (let index of elem) {
        flattenedArray.push(index);
      }
    } else {
      flattenedArray.push(elem);
    }
  }
  return flattenedArray;
  // and return a "flattened" version of the array.
  // }
};

const result1 = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
const exp1 = [1, 2, 3, 4, 5, 6];

console.log(assertArraysEqual(result1, exp1));

const result2 = flatten(["Leslie", "Andrew", ["Pizza"], ["Holiday", "Hotel"], ["soup"], "Echelon"]);

const exp2 = ["Leslie", "Andrew", "Pizza", "Holiday", "Hotel", "soup", "Echelon"];

console.log(assertArraysEqual(result2, exp2));

//why does this test case fail?
const result3 = flatten([true, false, NaN, true, [true, false, true]]);
const exp3 = [true, false, NaN, true, true, false, true];
// 🛑 🛑 🛑  Assertion Failed: true,false,NaN,true,true,false,true !== true,false,NaN,true,true,false,true

console.log(assertArraysEqual(result3, exp3));