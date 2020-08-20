const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let result = "";
  //define objects as keys and compare them if this passes then first check complete.
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length === objKeys2.length) {
    //iterate through each key of objkeys1
    for (let key of objKeys1) {
      //check to see if the object is an array type
      if (Array.isArray(object1[key])) {
        //run eqArrays on the result to see if arrays are equal
        result = eqArrays(object1[key],object2[key]);
        //if they aren't an array check to see if the keys match
      } else if (object1[key] === object2[key]) {
        result = true;
      }
    }
  } else {
    result = false;
  } console.log(result);
  return result;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
(assertEqual(eqObjects(ab, ba), true));


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
(assertEqual(eqObjects(ab, abc), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
(assertEqual(eqObjects(cd, dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
(assertEqual(eqObjects(cd, cd2), false));