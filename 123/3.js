const { Redirect } = require("react-router");

var arr = [2, 3, 'c'];

while (arr.includes("c")) {
  let idx = arr.findIndex(d => d === 'c');
  arr.splice(idx, 1)
}
// for (let i = 0, len = arr.length; i < len; i++) {
//   if (arr[i] === 'c') {
//     arr.splice()
//     i--
//   }
// }

var a = [], b = [];
// a.concat(b)
//a.push(...b);
//a.splice(a.length-1,0,...b)
Promise.all([p1, p2, p3]).then((d) => {

})

function sendMess(maxNum, arr, fn) {
  this.queque = [];
  this.task = [];
  this.maxNum = maxNum;
  Promise.resolve().then(() => {
    this.run()
  })

  this.run = function () {

  }
  this.ajax = function () {
    return new Promise((resolve, reject) => {
      // sdlfjdkl
      resolve()
    })
  }


}
sendMess(10, [
  '1.com',
  '2.com'
],
  () => {
    //....
  }
);

sendMess(10, [
  '4.com',
  '5.com',
  '8.com',
],
  () => {
    //....
  }
);


// div
[1, b]
useState
useState

//useState,useEffect,useLayoutEffect,useRef,useCallback,useMemo,useReducer,useImmpertive
if (a) { }

useCallback(async function abc() {
  await ajax()
}, ['text'])

useEffect(() => {

  return () => {

  }
}, ['text'])

async beforeEach(){
  await Dfd;
  next()
}

{
  parent: {

  }
}



<Prompt message={()=>{
  
  return true
} />

//   /abc
<Route render={()=>{
  if(){

  }else{
    <Redirect to />
  }
  return null: <Abc />
}}>