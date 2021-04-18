/**
 * [‘a’, ‘b’, ‘c’] 输出[‘a’, ‘ab’, ‘abc’]
 */
var start = ["a", "b", "c"];
function createArr(arr) {
  let len = arr.length;
  if (!len) return [];
  let res = [];
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      res[0] = arr[0]
    } else {
      res[i] = res[i - 1] + arr[i]
    }
  }
  return res
}
console.log(createArr(start))