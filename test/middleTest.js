const assert = require('chai').assert.deepEqual;
const middle = require("../middle");


//chai and mocha testing
// For arrays with one or two elements, there is no middle. Return an empty array.
describe("#middle", () => {
  it("returns [] for [1]", () => {
    const result = middle([1]);
    const expected = [];
    assert(result, expected);
  });

  it("returns [] for [1, 2]", () => {
    const result2 = middle([1, 2]);
    const expected2 = [];
    assert(result2, expected2);
  });

  //for arrays with an odd number of elements greater than 2 - the middle element should be returned

  it("returns [2] for [1, 2, 3]]", () => {
    const result3 = middle([1, 2, 3]);
    const expected3 = [2];
    assert(result3, expected3);
  });


  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const result4 = middle([1, 2, 3, 4, 5]);
    const expected4 = [3];
    assert(result4, expected4);
  });


  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const result5 = middle([1, 2, 3, 4]);
    const expected5 = [2, 3];
    assert(result5, expected5);
  });


  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const result6 = middle([1, 2, 3, 4, 5, 6]); //[3, 4]
    const expected6 = [3, 4];
    assert(result6, expected6);
  });

});