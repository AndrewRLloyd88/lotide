const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  let newWords = [];
  if (array.length < 1) {
    return [];
  } else {
    newWords = array.slice(1);
  }
  return newWords;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(["Morning", "Hello", "World"]), ["Hello", "World"]);

const words2 = [];
assertEqual(tail(words2), 0);

const words3 = ["Bus"];
assertEqual(tail(words3), 1);