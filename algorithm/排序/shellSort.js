function shellSort(arr) {
    let len = arr.length;
    for (let gap = len >> 1; gap > 0; gap >>= 1) {
        for (let i = gap; i < len; i++) {
            let j = i - gap, cur = arr[i];
            while (j >= 0 && arr[j] > cur) {
                arr[j + gap] = arr[j];
                j -= gap
            }
            arr[j + gap] = cur
        }
    }
    return arr
}
