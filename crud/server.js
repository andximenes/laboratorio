//Importando o express
const express = require("express") //carrega a biblioteca e guarda na const express
const app = express() // a const app vira o nosso servidor usando a const express como função

//rota principal
app.get("/", (req, res) => {
    res.send("servidor funcionando!")
})

//rota sobre
app.get("/sobre", (req, resp) => {
    resp.send("página sobre")
})

//escutando a porta 3000
app.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000")
})