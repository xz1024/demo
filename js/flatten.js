var arr = ["🍎", [1], [[2]], [[[3]]]];

//1 原生flat
console.log(arr.flat(Infinity))

//2  reduce
function flatten(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}
function flatten(arr, num) {
    if (num === void 0) num = 1;
    if (num === 0) return arr;
    return arr.reduce((pre, cur) => {
        return pre.concat(
            Array.isArray(cur, num - 1) ? flatten(cur) : cur
        )
    }, [])
}

console.log(flatten(["🍎", [1], [[2]], [[[3]]]]))

//3 generator

function* flatGe(arr, num) {
    if (num === void 0) num = 1;
    for (const item of arr) {
        if (Array.isArray(item) && num > 0) {
            yield* flatGe(item, num - 1)
        } else {
            yield item
        }
    }
}
console.log([...flatGe(arr, Infinity)])

// forEach
Array.prototype._fl = function (num = 1) {
    if (!Number(num) || num < 0) {
        return this
    }
    var arr = [].concat(this);

    while (num > 0) {
        if (arr.some(item => Array.isArray(item))) {
            arr = [].concat(arr);

        } else {
            break
        }
        num--
    }
    return arr
}
console.log(arr)
console.log(arr._fl(Infinity))