import http from "node:http"

//servidor
const server = http.createServer((req, res) =>{
    return res.end("Hello world!")
})

//porta
server.listen(3333)