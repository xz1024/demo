if (!Function.prototype.bind) {
    Function.prototype.bind = funciton(oThis){
        if (typeof this !== 'function') throw TypeError();
        let args = [].slice.call(arguments, 1);
        let self = this;
        let noop = function () { };
        let fn = function () {
            let bindArgs = [].slice.call(arguments);
            let ctx = this instanceof fn ? this : oThis;
            return self.apply(ctx, args.concat(bindArgs))
        }
        if (this.prototype) {
            noop.prototype = this.prototype
        }
        fn.prototype = new noop()
        return fn
    }
}