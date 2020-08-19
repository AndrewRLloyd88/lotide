const assertArraysEqual = function (actual, expected) {
  actual === expected ? console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (array1, array2) {
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

const without = function (source, itemsToRemove) {
  newWords = [];
  for (let i = 0, sourceLength = source.length; i < sourceLength; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newWords.push(source[i])
    }
  }
  return newWords;
}

test cases
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const words = ["hello", "world", "lighthouse", "qwerty", 1, 19, "pike", true];
console.log(without(words, ["lighthouse", "alter", "life", "escudo", 1, 2, "world"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);