const assert = require('chai').assert.deepEqual;
const tail = require('../tail');


//mocha and chai
describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    const result1 = tail([1, 2, 3]);
    assert(result1, [2, 3]);
  });

  it("returns 0 for []", () => {
    const result2 = tail([]);
    assert(result2, []);
  });

  it("returns ['Bus'] for ['Bus']", () => {
    const result3 = tail(['Bus']);
    assert(result3, []);
  });

  it("returns ['Is', 'Awesome'] for ['Everything', 'Is', 'Awesome']", () => {
    const result4 = tail(['Everything', 'Is', 'Awesome']);
    assert(result4, ['Is', 'Awesome']);
  });
  
});

