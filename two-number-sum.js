/**
 * Two Number Sum
 * 
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 * If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
 * If no two numbers sum up to the target sum, the function should return an empty array.
 * 
 * Note that the target sum has to be obtained by summing two different integers in the array, you can't add a single integer
 * to itself in order to obtain the target sum.
 * 
 * You can assume that there will be at most one pair of numbers summing up to the target sum.
 * 
 * Sample Input:
 * array = [3, 5, 7, 2]
 * targetSum = 10
 * 
 * Sample Output:
 * [3, 7]
 */

function twoNumberSum(arr, targetSum) {
  const seen = new Set();

  for (const num of arr) {
    const complement = targetSum - num;

    if (seen.has(complement)) {
      if (num > complement) return [complement, num];
      return [num, complement];
    }

    seen.add(num);
  }

  return [];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
const targetSum = 18;
const result = twoNumberSum(arr, targetSum);
console.log(result);