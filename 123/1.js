/**
 * '131+2*3*6+4/5+5'
 */
var str = '131+2*35*6+10/5+5'

function compile(str) {
  let tokes = new Map([
    ["+", 1],
    ["-", 2]
  ]);
  let digitalReg = /\d/;
  let res = str.slice(0, 1);
  let arr = [];
  let i = 0, j = 0;
  let len = str.length;
  for (let m = 0; m < len; m++) {
    let temp = str.charAt(m)
    if (digitalReg.test(temp)) {
      j++;
    } else {
      //+
      arr.push(str.slice(i, j));
      arr.push(str.charAt(j));
      i = j + 1;
      j = j + 1;
    }
  }
  while (arr.includes('*')) {
    let idx = arr.findIndex((d) => d === '*');
    let res = arr[idx - 1] * arr[idx + 1]
    arr.splice(idx - 1, 3, res)
  }
  return arr
  // for (let value of str) {

  //   if (digitalReg.test(value)) {//shuzu
  //     getDigtal(value)
  //   } else {

  //   }
  // }
}
function getDigtal(str) {

}

let r = compile('131+2*3+5');
console.log(r)


console.log(str.split(/[+-*\/]/))