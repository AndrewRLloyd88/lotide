const _ = require('../index');
const assert = require('chai').assert.deepEqual;




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


describe("#countOnly",  () => {
  it('firstNames, { "Jason": true, "Karima": true, "Fang": true } should equal {"Jason": 1, "Fang": 2}', () => {
    const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    const expected1 = {"Jason": 1, "Fang": 2};
    assert(result1, expected1);
  });
});