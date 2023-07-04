/**
 * Validate Subsequence
 * 
 * Given two non-empty arrays of integers, write a function that determines whether the second array
 * is a subsequence of the first one.
 * 
 * A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that
 * are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a
 * subsequence of the array [1, 2, 3, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
 * 
 * Sample Input:
 * array = [5, 1, 22, 25, 6, -1, 8, 10]
 * sequence = [5, -1, 8, 10]
 * 
 * Sample Output:
 * true
 */

function isValidSubsequence(array, sequence) {
  let seqIndex = 0;
  if (sequence.length > array.length) return false;
  for (let i = 0; i < array.length; i++) {
    if (sequence[seqIndex] === array[i]) {
      seqIndex++;
    }
  }
  return seqIndex === sequence.length;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [5, -1, 8, 10];

const result = isValidSubsequence(array, sequence);
console.log('result: ', result);
