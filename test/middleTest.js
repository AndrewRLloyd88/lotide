const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

//test cases
// For arrays with one or two elements, there is no middle. Return an empty array.
const result = middle([1]); // => []
assertArraysEqual(result, []);

const result2 = middle([1, 2]); //should return empty array
assertArraysEqual(result2, []); // [] === []

const result3 = middle([1, 2, 3]); //should output [2]
assertArraysEqual(result3, [2]); //[2] === [2]

const result4 = middle([1, 2, 3, 4, 5]); //[3]
assertArraysEqual(result4, [3]); //[3] === [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned

const result5 = middle([1, 2, 3, 4]); //[2, 3]
assertArraysEqual(result5, [2, 3]); //[2, 3] === [2, 3]

const result6 = middle([1, 2, 3, 4, 5, 6]); //[3, 4]
assertArraysEqual(result6, [3, 4]); //[3, 4] === [3, 4]