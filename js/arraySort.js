let arr = [9, 3, 4, 12, 2, 1, 34, 32, 6, 23, 74, 22, 29]
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}


console.log('bubble', bubbleSort(arr))