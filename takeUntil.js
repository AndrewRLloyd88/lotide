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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const takeUntil = function(array, callback) {
  const results = [];
  // The function will return a "slice of the array with elements taken from the beginning."
  // It should keep going until the callback/predicate returns a truthy value.

  //iterate
  for (let elem of array) {
    //if callback(elem) is a falsey value e.g. x < 0
    if (!callback(elem)) {
      //push the elem to results
      results.push(elem);
    } else {
      //otherwise stop the loop and return results
      return results;
    }
  }
};

//tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

const data3 = ["I'Boom", "2", 29, "360", "days", null, "been", "to", "Redwood"];
const results3 = takeUntil(data3, x => x === null);
// console.log(results2);

//test cases for assert

const result1exp = [1, 2, 5, 7, 2];
const result2exp = ["I've", "been", "to", "Hollywood",];
const result3exp = ["I'Boom", "2", 29, "360", "days"];
//writing out the function in longhand with logic so it makes sense
// function(data 1){
//   x < 0 = true then stop
// }

assertArraysEqual(results1, result1exp);
assertArraysEqual(results2, result2exp);
assertArraysEqual(results3, result3exp);