const express = require("express")
const db = require("./db") //importando o arquivo db.js
const app = express()

app.use(express.json())

// CREATE
app.post("/tarefas", (req, res) => {
  const { titulo } = req.body // isso é uma desestruturação

  db.run(
    //SQL
    `INSERT INTO tarefas (
        titulo, concluida 
    ) VALUES (
        ?, ?
    )`, 
    //ARRAY QUE SUBSTITUI OS VALORES DESCRITOS NO SQL "VALUES (?, ?)"
    //O PRIMEIRO PARÂMETRO RECEB A REQUISIÇÃO NA CONST TITULO
    //O SEGUNDO PARÂMETRO É REFERENTE AO BOLEANO 0 OU 1 FALSE OR TRUE
    [titulo, 0],
    

    //ESSA FUNÇÃO É EXECUTADA QUNADO O BD TERMINA A OPERAÇÃO SE DER ERRO O PARAMETRO ERRO RECEBE O VALOR DO ERRO SE DER CERTO O ERRO VEM VAZIO/NULL
    function (erro) {
      //TRATAMENTO DE ERRO COM IF
      if (erro) {
        return res.status(500).json({ mensagem: "Erro ao criar tarefa" })
      }

      //RESPOSTA DO SERVIDOR
      res.status(201).json({
        //lastId é propriedade disponibilizada pelo SQLite após um insert. Ela informa o id da última linha inserida.
        //this, se refere ao contexto da função
        id: this.lastID, 
        titulo: titulo,
        concluida: 0
      })
    }
  )
})

// READ
app.get("/tarefas", (req, res) => {
  //all é um método que traz todos os resultados da consulta
  //* significa "todas as colunas"
  
  db.all(`SELECT * FROM tarefas`, [], 
    (erro, rows) => {
        if (erro) {
            return res.status(500).json({ mensagem: "Erro ao buscar tarefas" })
        }

        res.json(rows)
    })
})

//UPDATE
app.put("/tarefas/:id", (req, res) => {
  const idDaTarefa = Number(req.params.id)

  db.run(
    `UPDATE tarefas SET concluida = 1 WHERE id = ?`, [idDaTarefa],
    function (erro) {
      if (erro) {
        return res.status(500).json({ mensagem: "Erro ao atualizar tarefa" })
      }
      //this.changes = quantidade de linhas que o banco alterou
      if (this.changes === 0) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" })
      }

      db.get(
        `SELECT * FROM tarefas WHERE id = ?`,
        [idDaTarefa],
        (erroBusca, row) => {
          if (erroBusca) {
            return res.status(500).json({ mensagem: "Erro ao buscar tarefa atualizada" })
          }

          res.json(row)
        }
      )
    }
  )
})

//DELETE
app.delete("/tarefas/:id", (req, res) => {
  const idDaTarefa = Number(req.params.id)

  db.run(
    `DELETE FROM tarefas WHERE id = ?`, [idDaTarefa],

    function (erro) {
      if (erro) {
        return res.status(500).json({ mensagem: "Erro ao excluir tarefa" })
      }
      //this.changes = quantidade de linhas que o banco alterou
      if (this.changes === 0) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" })
      }

      res.json({ mensagem: "Tarefa excluída com sucesso" })
    }
  )
})

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})