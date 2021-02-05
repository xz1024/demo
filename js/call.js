Function.prototype._call = function (ctx) {
    var fn = function () { };
    ctx = ctx || window
    ctx.fn = fn;
    var res = ctx.fn()
    delete ctx.fn
    return res
}