//question link : https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */

const NUMBER_TO_ROMAN_MAPPING = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};

function generateCharacterString(char, n) {
  let output = Array(n).fill(char).join("");
  return output;
}

var intToRoman = function (num) {
  let inputNum = num;
  let outputRomanFigure = "";

  for ([key, value] of Object.entries(NUMBER_TO_ROMAN_MAPPING).reverse()) {
    let factor = parseInt(inputNum / Number(key));
    outputRomanFigure += generateCharacterString(value, factor);
    inputNum = inputNum - factor * parseInt(key);
  }

  return outputRomanFigure;
};

module.exports = intToRoman;
