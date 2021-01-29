function _new(fn) {
    var obj = {};
    obj.__propto__ = fn.prototype;
    let res = fn.call(obj);
    if ((typeof res === 'object' || typeof res === 'function') && typeof res !== null) {
        return res
    } else {
        return obj
    }
}