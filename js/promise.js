class myPromise {
  constructor(excutor) {
    this.status = 'pending';
    this.value = null;
    this.reason = null
    let resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfiled';
        this.value = value
      }
    }
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason
      }
    }
    excutor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    if (this.status === 'fulfiled') {
      onFulfilled(this.value)
    }
    if (this.status === 'rejected') {
      onRejected(this.reason)
    }
  }
}

function promiseAll(arr) {
  return new Promise((resolve, reject) => {
    let i = 0, res = [], len = arr.length;
    for (let j = 0; j < len; j++) {
      arr[j].then((data) => {
        res[j] = data;
        i++;
        if (i === len) {
          resolve(res)
        }
      }, reject)
    }
  })
}