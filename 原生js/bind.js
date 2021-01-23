if (!Function.prototype.bind) {
    Function.prototype.bind = fucntion(oThis){
        if (typeof this !== 'function') throw TypeError();
        let args = [].slice.call(arguments, 1);
        let self = this;
        let Noop = function () { };
        let fn = function () {
            let bindArgs = [].slice.call(arguments);
            return self.apply(
                this instanceof fn ? this : oThis,//new 调用
                args.concat(bindArgs)
            )
        }
        if (this.prototype) {
            Noop.prototype = this.prototype
        }
        fn.prototype = new Noop();
        return fn;
    }
}