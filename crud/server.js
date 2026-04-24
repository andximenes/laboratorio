//Importando o express
const express = require("express") //carrega a biblioteca e guarda na const express
const app = express() // a const app vira o nosso servidor usando a const express como função

//Recebe a requisição com o body em JSON, leia esse JSON e transforme em um objeto jS acessível em req.body, ou seja, p que o express.json() faz é preparar o conteúdo do body para conseguir acessalo com req.body.titulo, por exemplo.
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

//rota para atualizar uma tarefa
app.put("/tarefas/:id", (req, res) => {
    //pegando o id da rota. Aqui estamos pegando o valor que veio da URL. O valor vem em string mas transformamos em Number
    const idDaTarefa = Number(req.params.id)

    //Procurando a tarefa no array
    //o método find() procura um item dentro de um array. Ele retorna o item encontrado ou undefined, se não encontrar.
    //Procure no array tarefas um item cujo id seja igual ao idDaTarefa. Se encontrar, guarda em tarefa
    //se encontrar o item o valor que a const tarefa recebe é algo como :
    //              id: 2, titulo: "Treinar", concluida: false
    const tarefa = tarefas.find((item) => { 
        return item.id === idDaTarefa
    })

    //Verifica se não encontrou
    if (!tarefa) {
        return res.status(404).json({mensagem: "Tarefa não encontrada"})
    }

    //atualiza a propriedade da tarefa encontrada para true
    tarefa.concluida = true

    //devolvendo a tarefa atualizada
    res.json(tarefa)
})

//escutando a porta 3000
app.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000")
})