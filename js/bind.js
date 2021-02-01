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