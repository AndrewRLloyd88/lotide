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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  //implement this more complex code later when I have time
  //logic to update results here
  //loop throuh the sentence
  // for (letter in sentence) {
  //   console.log(letter)
  //   if (sentence.hasOwnProperty(letter)) {
  //     //if letter is in the count object increment its value by 1
  //     if (results[sentence[letter]]) {
  //       results[sentence[letter]].push(letter);
  //       //otherwise create the object and make it equal to 1
  //     } else if (sentence[letter] !== " ") {
  //       results[sentence[letter]] = [Number(letter)];
  //     }
  //   }
  // }
  for (let i = 0; i < sentence.length; i++) {
    // console.log(sentence[i]);
    if (sentence[i] !== " ") {
      // does the key exist or not
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
      //add to result
        results[sentence[i]] = [i];
      //add position to array [1, 3]
      }
    }
  }
  return results;
};

// console.log(letterPositions("Hello"))
// console.log(letterPositions("H"))
// console.log(letterPositions("He"))
// console.log(letterPositions("Hel"))
// console.log(letterPositions("Hell"))
console.log(letterPositions("Hello"))

// // Test Cases
// assertArraysEqual(letterPositions("hello").e, [1]); //pass
// assertArraysEqual(letterPositions("hello").e, [5]); //undefined fail
// assertArraysEqual(letterPositions("hello").h, [0]); //pass
// assertArraysEqual(letterPositions("hello").o, [3]); //Fail



// console.log(letterPositions("lighthouse in the house"))

//OUTPUT

// { l: [ '0' ],
//   i: [ '1', '11' ],
//   g: [ '2' ],
//   h: [ '3', '5', '15', '18' ],
//   t: [ '4', '14' ],
//   o: [ '6', '19' ],
//   u: [ '7', '20' ],
//   s: [ '8', '21' ],
//   e: [ '9', '16', '22' ],
//   n: [ '12' ] }


//section notes

// const positions = {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 14, 16],
//   t: [4, 13],
//   o: [6, 17],
//   u: [7, 18],
//   s: [8, 19],
//   e: [9, 15, 20],
//   n: [12]
// }

//correct due to the spaces

// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

// l i g h t h o u s e    i   n  t  h   e  h  o  u  s  e
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13  14 15 16 17 18 19 20

