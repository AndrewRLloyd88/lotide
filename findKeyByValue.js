const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(bestTVShowsByGenre, tvShow) {
  //use object.keys to generate an array of all the keys
  let genreList = (Object.keys(bestTVShowsByGenre));
  // console.log(genreList);
  for (let genre of genreList) {
    if (bestTVShowsByGenre[genre] === tvShow) {
      // console.log(genre);
      return genre;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), undefined); //FAIL