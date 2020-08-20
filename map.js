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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word[1]);
console.log(results1);
console.log(assertArraysEqual(results1, words)); //should fail as the result will be different to the original
console.log(assertArraysEqual(results2, words.length)); //should fail as 6,7,2,5,3 !== 5
console.log(assertArraysEqual(results3.length, words.length)); //should pass as 5 === 5


