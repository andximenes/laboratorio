//importando módulo
import http from "node:http"

//Criando servidor
const server = http.createServer((req, res) =>{
    const {method} = req
    return res.end(`Método: ${method}`)

    //outra forma de fazer a mesa coisa
    // return res.end(`Método: ${req.method}`)
})

//escutando a porta 3333
server.listen(3333)