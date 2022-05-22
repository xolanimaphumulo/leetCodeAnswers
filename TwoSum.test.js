const twoSum = require("./TwoSum");

test("Finding indeces that adds up to the target : T1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("Finding indeces that adds up to the target: T2", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("Finding indeces that adds up to the target : T3", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
