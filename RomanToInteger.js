// question link : https://leetcode.com/problems/roman-to-integer/
const ROMANTONUMBERMAPPING = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const keyNumberSeparator = "-";
  let sOutput = s;

  for (const [key, value] of Object.entries(ROMANTONUMBERMAPPING)) {
    let regex = new RegExp(key, "gi");
    sOutput = sOutput.replace(
      regex,
      keyNumberSeparator + value + keyNumberSeparator
    );
  }

  let reversedRomanChars = sOutput.split(keyNumberSeparator);

  let outputNumericNumber = reversedRomanChars.reduce(
    (prev, curr, idx, arr) => Number(prev) + Number(curr),
    0
  );
  return outputNumericNumber;
};

module.exports = romanToInt;
