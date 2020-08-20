const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
};


// Implement the function findKey which takes in an object and a callback
const findKey = function(object, callback) {
  // It should scan the object a
  for (const key in object) {
    //eturn the first key for which the callback returns a truthy value.
    if (callback(object[key])) {
      return key;
    }
  }
};

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const test2 = findKey({
  "Brazil": { goals: 1 },
  "USA":   { goals: 3 },
  "Portugal":      { goals: 2 },
  "Spain":   { goals: 3 },
  "France":       { goals: 2 },
  "Italy":  { goals: 5 }
}, x => x.goals === 2); // => "noma"

const test3 = findKey({
  "Cats": { color: "green" },
  "Dogs":   { color: "orange" },
  "Rabbits":   { color: "purple" },
}, x => x.color === "purple"); // => "noma"


//test cases
assertEqual(test1, "noma");
assertEqual(test2, "Portugal");
assertEqual(test3, "Rabbits");