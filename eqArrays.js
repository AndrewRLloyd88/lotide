const assertEqual = require('./assertEqual');

//checks if two arrays are strictly and completley equal
const eqArrays = function(array1, array2) {
  //if the lengths of both arrays don't match arrays aren't equal
  if (array1.length !== array2.length) {
    return false;
  }

  //the loop does things for as long as i < array1.length
  for (let i = 0; i < array1.length; i++) {
    //if array1[i] doesn't match array2[i] then they aren't equal
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //array1 === array2
  return true;
};

module.exports = eqArrays;

