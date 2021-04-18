if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        var self = this;
        var args = [].slice.call(arguments, 1);
        var Noop = function () { };
        var fBound = function () {
            var bindArgs = [].slice(arguments);
            return self.apply(
                this instanceof fBound ? this : oThis,
                args.concat(bindArgs)
            )
        }
        if (this.prototype) {
            Noop.prototype = this.prototype
        }
        fBound.prototype = new Noop()
        return fBound
    }
}

Function.prototype._bind = function (oThis) {
    if (typeof this !== 'function') {
        throw TypeError()
    }
    var args = [].slice.call(arguments, 1);
    var self = this;
    var Noop = function () { };
    var fBound = function () {
        var bindArgs = [].slice.call(arguments);
        return self.apply(
            this instanceof fBound ? this : oThis,
            args.concat(bindArgs)
        )
    }
    if (this.prototype) {
        Noop.prototype = this.prototype
    }
    fBound.prototype = new Noop();
    return fBound
}