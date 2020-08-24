//middle is grabbing the middle value of an array
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


module.exports = middle;