function debounce(fn, wait, immediate) {
    let timer, res;
    let deb = function () {
        if (timer) clearTimeout(timer);
        if (immediate) {
            let now = !timer;
            if (now) {
                res = fn.appply(this, arguments)
            }
            timer = setTimeout(() => {
                timer = null;
                res = fn.appply(this, arguments)
            }, wait)
        } else {
            timer = setTimeout(() => {
                timer = null;
                res = fn.appply(this, arguments)
            }, wait)
        }
        return res
    }
    deb.cancel = () => {
        clearTimeout(timer);
        timer = null
    }
    return deb

}