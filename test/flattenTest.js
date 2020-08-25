const _ = require('../index');
const assert = require('chai').assert.deepEqual;

describe("#flatten", () => {
  it("returns [1, 2, 3] for [1, [2], 3]", () => {
    const result1 = _.flatten([1, [2], 3]);
    const expected1 = [1, 2, 3];
    assert(result1, expected1);
  });

  it("returns [1, 2, 3, 4, 5, 6] for [1, [2], 3]", () => {
    const result2 = _.flatten([1, 2, [3, 4], 5, [6]]);
    const expected2 = [1, 2, 3, 4, 5, 6];
    assert(result2, expected2);
  });

it("returns [true, false, NaN, true, true, false, true] for [true, false, NaN, true, [true, false, true]]", () => {
  const result3 = _.flatten([true, false, NaN, true, [true, false, true]]);
  const expected3 = [true, false, NaN, true, true, false, true];
  assert(result3, expected3);
});


it('returns ["Leslie", "Andrew", "Pizza", "Holiday", "Hotel", "soup", "Echelon" for ["Leslie", "Andrew", ["Pizza"], ["Holiday", "Hotel"], ["soup"], "Echelon"]', () => {
  const result3 = _.flatten(["Leslie", "Andrew", ["Pizza"], ["Holiday", "Hotel"], ["soup"], "Echelon"]);
  const expected3 = ["Leslie", "Andrew", "Pizza", "Holiday", "Hotel", "soup", "Echelon"];
  assert(result3, expected3);
});


});

