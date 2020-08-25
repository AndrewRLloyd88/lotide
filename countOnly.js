// allItems: contains an array of strings we need to look through
// itemsToCount: an obect that specifes what to count
//countOnly should report back how many instances of each string were found in the allItems array of strings. Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts. Therefore it will need to return an object that can represent the stats.
//the assertEqual function can only compare primitive values.


//As per the wording of the assignment:
//As shown in the example image above, only keys which have a truthy value should be counted in the resulting object. All other strings (either set to false or not included at all in the object) should not be counted. That said, if a particular string is meant to be counted but does not exist in the input array (like "f" in the example above), it also does not have to be included in the final count.

//TLDR - If value is a truthy value then it's as good as nonexistent to countOnly

const countOnly = function(allItems, itemsToCount) {
  //new obj to store names checking
  const result = {};
  //Check all items in all items one by one
  for (const item of allItems) {
    //loop through the itemsToCount searching for item
    if (itemsToCount[item]) {
      //check if the result object already exists and increment it by 1
      if (result[item]) {
        result[item] += 1;
        //otherwise create the object and make it equal to 1
      } else {
        result[item] = 1;
      }
    }
    
  }
  return result;
};



module.exports = countOnly;