//1
function A() {

}
function B() {
    A.call(this)
}
//2
function A() {

}
function B() {

}
B.prototype = new A();

//3

function A() {

}
function B() {
    A.call(this)
}
B.prototype = new A()
//4
function A() { }
function B() { }
B.prototype = Object.create(A.prototype, {
    constructor: { value: B }
})
//5
class A {

}

class B extends A {

}
