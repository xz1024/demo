Function.prototype._call = function (context) {
    var ctx = context || window;
    ctx.fn = this;
    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push("arguments[" + i + "]")
    }
    var res = eval("ctx.fn(" + args + ")");
    delete ctx.fn
    return res
}
Function.prototype._apply = function (context, arr) {
    var ctx = context || window;
    ctx.fn = this;
    var res;
    if (!arr) {
        res = ctx.fn()
    } else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push("arr[" + i + "]")
        }
        res = eval("ctx.fn(" + args + ")")
    }
    delete ctx.fn;
    return res;
}

Function.prototype._mycall = function (context) {
    var ctx = context || window;
    ctx.fn = this;
    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push("arguments[" + i + "]")
    }
    var res = eval("ctx.fn(" + args + ")")
    delete ctx.fn;
    return res
}