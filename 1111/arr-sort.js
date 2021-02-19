var arr = [10, 2, 3, 2, 4, 53, 23, 34, 6, 43]
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
function selctionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
  return arr
}
function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i - 1, cur = arr[i];
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--
    }
    arr[j + 1] = cur
  }
  return arr
}
function shellSort(arr) {
  let len = arr.length;
  for (let gap = len >> 1; gap >= 1; gap >>= 1) {
    for (let i = gap; i < len; i++) {
      let j = i - gap, cur = arr[i];
      while (j >= 0 && arr[j] > cur) {
        arr[j + gap] = arr[j]
        j -= gap
      }
      arr[j + gap] = cur
    }
  }
  return arr
}
function quickSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  let left = [], right = [];
  let pivotIndex = len >> 1, pivot = arr.splice(pivotIndex, 1)[0];
  for (let x of arr) {
    if (x < pivot) {
      left.push(x)
    } else {
      right.push(x)
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}

function mergeSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  let mid = len >> 1;
  let left = arr.slice(0, mid), right = arr.slice(mid);
  function merge(left, right) {
    let res = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        res.push(left.shift())
      } else {
        res.push(right.shift())
      }
    }
    return res.concat(left, right)
  }
  return merge(
    mergeSort(left),
    mergeSort(right)
  )

}

function heapSort(arr) {

}
//console.log('bubble', bubbleSort(arr))
//console.log('selctionSort', selctionSort(arr))
//console.log('insertSort', insertSort(arr))
//console.log('shellSort', shellSort(arr))
//console.log('quickSort', quickSort(arr))
console.log('mergeSort', mergeSort(arr))