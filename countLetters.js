const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
};


const countLetters = function(sentence) {
  const count = {};
  for (const letter of sentence) {
  //if letter is in the count object increment its value by 1
    if (count[letter]) {
      count[letter] += 1;
    //otherwise create the object and make it equal to 1
    } else if (letter !== " ") {
      count[letter] = 1;
    }
  }
  return count;
};

console.log(countLetters("LHL"));
console.log(countLetters("Lighthouse in the house"));