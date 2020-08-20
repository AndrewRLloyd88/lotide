const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let result = "";
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length === objKeys2.length) {
    for (let key of objKeys1) {
      if (Array.isArray(object1[key])) {
        result = eqArrays(object1[key],object2[key]);
      } else if (object1[key] === object2[key]) {
        result = true;
      }
    }
  } else {
    result = false;
  }
  // console.log(result);
  return result;
};


const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};


//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
(assertObjectsEqual(ab, ba), true);


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
(assertObjectsEqual(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
(assertObjectsEqual(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
(assertObjectsEqual(cd, cd2), false);