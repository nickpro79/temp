const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`${name} ${id}`)
})
customEmitter.on('response',()=>{
    console.log('hahahahahahah')
})
customEmitter.emit('response','john','id')
