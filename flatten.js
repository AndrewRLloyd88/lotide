
//flatten is a function that takes a nested array and returns a copy of that array flattened e.g. taking nested arrays and spreading the value into one array
const flatten = function(array) {
  let flattenedArray = [];
  //loop through the first array
  for (let elem of array) {
    if (Array.isArray(elem)) {
      for (let index of elem) {
        flattenedArray.push(index);
      }
    } else {
      flattenedArray.push(elem);
    }
  }
  return flattenedArray;
  // and return a "flattened" version of the array.
  // }
};



module.exports = flatten;