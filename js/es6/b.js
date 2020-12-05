function* fn () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
for (let v of fn()) {
    console.log(v)

}

/**
 *
 */

let o = {
    [Symbol.iterator]: () => ({
        d: 0,
        next () {
            if (this.d == 10)
                return {
                    done: true
                }
            else return {
                value: this.d++,
                done: false
            };
        }
    })
}
for (let e of o)
    console.log(e);


/**
 * 
 */

function sleep (duration) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, duration);
    })
}
async function* foo () {
    i = 0;
    while (true) {
        await sleep(1000);
        yield i++;
    }
}
for await (let e of foo())
    console.log(e);