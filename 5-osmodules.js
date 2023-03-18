const os = require('os')

console.log(os.userInfo())

console.log(os.uptime())

const currentos={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentos)