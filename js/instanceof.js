function _instanceof(A, B) {
    let p = A.__propto__
    while (p) {
        if (p === B.prototype) {
            return true
        }
        p = p.__propto__
    }
    if (p === null) {
        return false
    }
}