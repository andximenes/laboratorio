//importando módulo
import http from "node:http"

//Criando servidor
const server = http.createServer((req, res) =>{
    return res.end("Minha primeira API!")
})

//escutando a porta 3333
server.listen(3333)