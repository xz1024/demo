function throttle(fn, wait, immediate) {
    if (typeof fn !== 'function') throw TypeError();
    let timer, pre = 0;
    return function () {
        if (immediate) {
            let cur = Date.now();
            if (cur - pre > wait) {
                fn.apply(this, arguments)
                pre = cur
            }
        } else {
            if (!timer) {
                timer = setTimeout(() => {
                    fn.apply(this, arguments);
                    timer = null
                }, wait);
            }
        }
    }
}