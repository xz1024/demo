class lazyManClass {
    constructor(name) {
        this.name = name;
        this.queue = [];
        this.init()
        Promise.resolve().then(this.run.bind(this))
    }
    init() {
        let fn = () => {
            console.log(this.name)
            this.run()
        }
        this.queue.push(fn);
        return this
    }
    run() {
        let fn = this.queue.shift();
        fn && fn()
    }
    eat(v) {
        let f = () => {
            console.log(v)
            this.run()
        }
        this.queue.push(f)
        return this
    }
    sleep(wait) {
        let f = () => {
            console.log('sleep')
            setTimeout(() => {
                this.run()
            }, wait);
        }
        this.queue.push(f)
        return this
    }
    sleepFirst(wait) {
        let f = () => {
            console.log('sleepFirst')
            setTimeout(() => {
                this.run()
            }, wait);
        }
        this.queue.unshift(f)
    }
}
let lazyMan = (name) => new lazyManClass(name);
lazyMan('name').eat('apple').sleep(1000).eat('orange').sleepFirst(2000)