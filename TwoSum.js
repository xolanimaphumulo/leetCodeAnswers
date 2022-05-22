// question link : https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numIndecesMap = {};
  let firstIndex, secondIndex;

  for (let m = 0; m < nums.length; m++) {
    let currValue = nums[m];
    if (!numIndecesMap[currValue]) {
      numIndecesMap[currValue] = [m];
    } else {
      numIndecesMap[currValue].push(m);
    }
  }

  for (let m = 0; m < nums.length; m++) {
    let currentValue = nums[m];
    let secondValue = target - currentValue;
    if (currentValue * 2 === target && numIndecesMap[currentValue].length > 1) {
      [firstIndex, secondIndex] = numIndecesMap[currentValue];
      break;
    }

    if (numIndecesMap[secondValue] && numIndecesMap[secondValue] != m) {
      if (numIndecesMap[secondValue]) {
        firstIndex = numIndecesMap[currentValue][0];
        secondIndex = numIndecesMap[secondValue][0];
        break;
      }
    }
  }

  return [firstIndex, secondIndex];
};
module.exports = twoSum;
