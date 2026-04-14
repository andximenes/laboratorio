//importando módulo
import http from "node:http"

//Criando servidor
const server = http.createServer((req, res) =>{
    return res.end("Servidor alive!")
})

//escutando a porta 3333
server.listen(3333)