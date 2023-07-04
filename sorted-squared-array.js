function sortedSquaredArray(arr) {
  const newArr = new Array(arr.length);
  let lastIndex = arr.length - 1;
  let firstIndex = 0;

  for (let i = lastIndex; i > -1; i--) {
    const start = arr[firstIndex] ** 2;
    const end = arr[lastIndex] ** 2;

    if (start > end) {
      newArr[i] = start;
      firstIndex++;
    } else {
      newArr[i] = end;
      lastIndex--;
    }
  }
  return newArr;
}

const arrInput = [-10, -6, 0, 5, 10];
const result = sortedSquaredArray(arrInput);
console.log('result: ', result);
