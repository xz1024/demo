function _new(fn, ...args) {
    var obj = Object.create(fn.prototype)
    var res = fn.apply(obj, args);
    var isObject = typeof res === 'object' && res !== null;
    var isFn = typeof res === 'function';
    return (isObject || isFn) ? res : obj
}