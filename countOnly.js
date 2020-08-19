const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
};


// allItems: contains an array of strings we need to look through
// itemsToCount: an obect that specifes what to count
//countOnly should report back how many instances of each string were found in the allItems array of strings. Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts. Therefore it will need to return an object that can represent the stats.
//the assertEqual function can only compare primitive values.
const countOnly = function(allItems, itemsToCount) {
  //new obj to store names checking
  const result = {};
  //Check all items in all items one by one
  for (const item of allItems) {
    //loop through the itemsToCount searching for item
    if (itemsToCount[item]) {
      //check if the result object already exists and increment it by 1
      if (result[item]) {
        result[item] += 1;
        //otherwise create the object and make it equal to 1
      } else {
        result[item] = 1;
      }
    }
    
  }
  console.log(result);
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);