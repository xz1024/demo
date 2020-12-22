setTimeout(() => console.log('timer API'), 10)
new Promise((resolve, reject) => resolve('microtask run')).then(arg => console.log(arg))
process.nextTick(() => console.log('run next tick'))
setImmediate(() => console.log('setImmediate API'))
