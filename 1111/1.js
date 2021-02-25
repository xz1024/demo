function debounce(fn, wait, immediate) {
  let timer, res;
  let deb = function () {
    clearTimeout(timer);
    if (immediate) {
      let now = !timer;
      timer = setTimeout(() => {
        res = fn.apply(this, arguments);
        clearTimeout(timer)
      }, wait);
      if (now) {
        res = fn.apply(this, arguments);
      }
    } else {
      timer = setTimeout(() => {
        res = fn.apply(this, arguments);
        clearTimeout(timer)
      }, wait);
    }
    return res
  }
  deb.cancel = () => {
    clearTimeout(timer);
    timer = null
  }
  return deb
}

function throttle(fn, wait, immediate) {
  let pre = 0, timer;
  return function () {
    if (immediate) {
      let cur = Date.now();
      if (cur - pre > wait) {
        fn.apply(this, arguments);
        pre = cur
      }
    } else {
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(this, arguments);
          clearTimeout(timer);
          timer = null
        }, await)
      }
    }
  }
}