const { readFile, writeFile, writeFileSync} = require('fs')

readFile('./cont/first.txt','utf-8',(err, result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./cont/second.txt','utf-8',(err, result)=>{
         if (err){
            console.log(err)
            return
        }
        const second = result
        writeFileSync('./cont/aresult.txt',`here is the result : ${first}, ${second}`),
        (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
        }
    })
})