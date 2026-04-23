//Importando o express
const express = require("express") //carrega a biblioteca e guarda na const express
const app = express() // a const app vira o nosso servidor usando a const express como função

//recebe os dados e os preparam para conseguirmos ler-los em req.body, ou seja, transforma os dados recebidos em um objeto JSON
app.use(express.json())

const tarefas = []

//rota principal
app.get("/", (req, res) => {
    res.send("servidor funcionando!")
})

//rota de tarefas
//Quando alguém acessar a rota tarefas, devolva o array de tarefas em formato JSON no navegdor
app.get("/tarefas", (req, res) => {
    res.json(tarefas)
})

//rota sobre
app.get("/sobre", (req, res) => {
    resp.send("página sobre")
})

//Rota para criar tarefa
app.post("/tarefas", (req, res) => {
    const novaTarefa = {
        id: Date.now(), //gera um número no momento atual
        titulo: req.body.titulo, //pega o valor enviado no corpo da requisição
        concluida: false //toda tarefa nasce como não conluída
    }

    //salva no array
    tarefas.push(novaTarefa)

    res.status(201).json(novaTarefa)
})

//escutando a porta 3000
app.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000")
})