import { hello } from './hello'

document.write(hello());

class Stack {
    constructor() {
        this.value = [];
    }
    push (v) {
        this.value.push(v)
    }

}
let a = 0;
let div = document.getElementById('div');
let s = new Stack();
div.onclick = () => {
    a++;
    s.push(a)
    if (a % 2) {
        div.style.color = 'red'
    } else {
        div.style.color = 'blue'
    }
}