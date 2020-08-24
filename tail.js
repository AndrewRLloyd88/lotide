const assertEqual = require('./assertEqual');

//Tail chops off the first element of an array and returns everything following
const tail = function(array) {
  let newWords = [];
  //check for an empty array
  if (array.length < 1) {
    return [];
  } else {
    newWords = array.slice(1);
  }
  return newWords;
};

module.exports = tail;