const server  = require('http').createServer()

server.on('request',(req,res)=>res.end('server online'))

server.listen(5000)