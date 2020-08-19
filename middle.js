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

const middle = function(array) {
  let result = [];

  //test to see if array has only one or two elements - i.e. no middle
  if (array.length === 1 || array.length === 2) {
    return result;
  
  //even number of elements
  } else if (array.length % 2 === 0) {
  //check for an even number of elements in an array - the two elements in the middle should be returned
  //store values into two vars and push them to result
    let firstMiddle = array.length / 2 - 1;
    let secondMiddle = array.length / 2;
    result.push(array[firstMiddle],array[secondMiddle]);
  
  //an odd number of elements should return the single middle element
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(array.length / 2);
    result.push(array[middleIndex]);
  }
  return result;
};


//test cases
// For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]