const{readFile, read} = require('fs')
console.log('start a first task')

readFile('./cont/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log("completed first task")
})
console.log('starting next task')

console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('hello world')
})

server.listen(5000,()=>{
    console.log('server listening on port : 5000..........')
})
