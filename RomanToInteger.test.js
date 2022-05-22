const romanToInt = require("./RomanToInteger");

test("Convert a roman string  to a number : T1", () => {
  expect(romanToInt("III")).toBe(3);
});

test("Convert a roman string  to a number: T2", () => {
  expect(romanToInt("LVIII")).toBe(58);
});

test("Convert a roman string  to a number : T3", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
