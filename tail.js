//Tail chops off the first element of an array and returns everything following
const tail = function(array) {
  let newWords = [];
  //check for an empty array
  if (array.length < 1) {
    return [];
  } else {
    //return [] if arr.length = 1 else if 2+ arr[2],[3],[etc] is returned
    newWords = array.slice(1);
  }
  return newWords;
};

module.exports = tail;