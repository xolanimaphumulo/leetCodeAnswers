const intToRoman = require("./IntegerToRoman");

test("Convert an integer to roman : T1", () => {
  expect(intToRoman(3)).toBe("III");
});

test("Convert an integer to roman : T2", () => {
  expect(intToRoman(58)).toBe("LVIII");
});

test("Convert an integer to roman : T3", () => {
  expect(intToRoman(1994)).toBe("MCMXCIV");
});
