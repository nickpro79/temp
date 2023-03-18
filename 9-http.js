const http= require('http')
const server = http.createServer((req,res)=>{
if(req.url ==='/'){
    res.end('welcome to our home page ')
}  
if(req.url==='/about'){
    res.end('Here is about')
}
res.end(`<h1>oooooooooooo</h1>
<p>loremkc</p>
<a href="/">press</a>`
)
})

server.listen(5000)