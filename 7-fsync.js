const { readFileSync, writeFileSync, write } = require('fs')

const first = readFileSync('./cont/first.txt', 'utf8')
const second = readFileSync('./cont/second.txt', 'utf8')

writeFileSync('./cont/result.txt', `here is the result : ${first}, ${second}`, { flag: 'a' })