//Módulo principal do servidor, onde é configurado o Express e as rotas para as tarefas. O servidor escuta na porta 3000 e exibe uma mensagem no console quando está rodando.

const express = require('express')
const tarefasRouter = require("./routes/tarefas")

const app = express()

app.use(express.json())

app.use(express.static("public"))// express servindo os arquivos estáticos da pasta "public". Isso significa que qualquer arquivo colocado nessa pasta pode ser acessado diretamente pelo navegador, como por exemplo: http://localhost:3000/arquivo.html. É uma maneira fácil de servir arquivos como HTML, CSS, JavaScript, imagens, etc., sem precisar criar rotas específicas para cada um deles.

//Tudo que começa com "/tarefas" será tratado pelo tarefasRouter, que é importado do arquivo routes/tarefas.js. Isso permite organizar as rotas relacionadas às tarefas em um módulo separado, mantendo o código mais limpo e modularizado.
app.use("/tarefas", tarefasRouter)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 😺")
})
