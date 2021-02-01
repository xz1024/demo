function instanceof (A, B){
    let __propto__ = A.__propto__
    while (__propto__) {
        if (__propto__ === B.prototype) {
            return true
        }
        __propto__ = __propto__.__propto__
    }
    if (__propto__ === null) {
        return false
    }
}