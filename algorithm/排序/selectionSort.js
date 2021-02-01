function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp
    }
    return arr
}
console.log(selectionSort([9, 32, 13, 23, 4, 1, 2, 345, 2, 32, 23, 3, 454]))