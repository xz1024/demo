function insertSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i - 1, cur = arr[i];
        while (j >= 0 && arr[j] < cur) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = cur
    }
    return arr
}
console.log(insertSort([3, 4, 22, 1, 2, 4, 54, 32]))