function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left === 'number' ? left : 0,
    right = typeof right === 'number' ? right : len - 1;
  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
}


function partition(arr, left, right) {
  var pivot = left, index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++
    }
  }
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
  return index - 1
}


function jsQuickSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  let pivotIndex = len >> 1;
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [], right = [];
  for (let v of arr) {
    if (v < pivot) {
      left.push(v)
    } else {
      right.push(v)
    }
  }
  //至此，我们将数组分成了left和right两个部分
  return jsQuickSort(left).concat(pivot, jsQuickSort(right));  //分而治之
}

const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(jsQuickSort(arr));  //输出：[ 3, 10, 15, 25, 25, 41, 42, 54, 72, 98, 121 ]