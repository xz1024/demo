function deepClone(obj, hash = new WeakMap) {
  if (hash.has(obj)) return hash.get(obj);
  let tp = [Date, RegExp, Set, WeakSet, Map, WeakMap];
  if (tp.includes(obj.constructor)) {
    return new obj.constructor(obj);
  }
  let newObj = Object.create(obj.__proto__, Object.getOwnPropertyDescriptors(obj));
  hash.set(obj, newObj);
  for (let key of Reflect.ownKeys(obj)) {
    let value = obj[key];
    newObj[key] = typeof value === 'object' && value !== null ? deepClone(value, hash) : value
  }
  return newObj
}
let obj = {
  und: undefined,
  nul: null,
  str: 'aaa',
  num: 10,
  bigIn: 1221221n,
  bool: true,
  fn: function () { },
  symb: Symbol(3),
  [Symbol]: 'this key is Symbol',
  arr: [{ a: { b: 10 } }],
  obj: {
    a: {
      b: [[10]]
    }
  },
  date: new Date(),
  reg: /\d/,
  map: new Map([
    [1, 2],
    [{}, 3]
  ]),
  set: new Set([23, 3, 3, 3, 12])
}
obj.loop = obj;


let newObj = deepClone(obj);
// newObj.arr[0].a.b = 989899
console.log('obj', obj)
console.log('newobj', newObj);
for (let key of Reflect.ownKeys(obj)) {
  console.log(`${key}是否相等：${obj[key] === newObj[key]}`)
  if (typeof obj[key] === 'object' && obj[key] !== null) {

  }
}