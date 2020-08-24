const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  //the loop does things for as long as i < array1.length
  for (let i = 0, array1Length = array1.length; i < array1Length; i++) {
    //if array1[i] doesn't match array2[i] then they aren't equal
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //array1 === array2
  return true;
};

module.exports = eqArrays;

