function shellSort(arr) {
    let len = arr.length;
    for (let gap = len >> 1; gap < len; gap >>= 1) {
        for (let i = gap; i < len; i++) {
            let j = i, cur = arr[i];
            while (j - gap >= 0 && cur < arr[j - gap]) {
                arr[j] = arr[j - gap]
                j -= gap;
            }
            arr[j] = cur
        }
    }
    return arr
}
console.log(shellSort([100, 23, 665, 23, 2, 12, 1, 34, 8, 45]))