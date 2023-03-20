
const {readFile,writeFile} = require('fs')
const util = require('util')    
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
// const getText =(path)=>{
//      return new Promise((resolve,reject)=>{
//          readFile(path,'utf-8',(err,data)=>{
//              if (err){
//                  reject(err)
//              }else{
//                  resolve(data)
//              }
//          })
//      })
// }

const start = async()=>{
    try{
        const first = await readFilePromise('./cont/first.txt','utf-8')
        const second = await readFilePromise('./cont/second.txt','utf8')
        await writeFilePromise('./cont/result.txt',`COOL:${first},${second}`) 
     console.log(first,second)  
    } catch(error){
        console.log(error)
    }
}

start()


