const db = require("../db")

function criarTarefa(req, res) {
  const { titulo } = req.body

  //Validação dos dados
  if (typeof titulo !== "string" || titulo.trim() === "") {
    return res.status(400).json({
      mensagem: "O título da tarefa é obrigatório"
    })
  }

  db.run(
    `INSERT INTO tarefas (titulo, concluida) VALUES (?, ?)`,
    [titulo.trim(), 0],
    function (erro) {
      if (erro) {
        return res.status(500).json({ mensagem: "Erro ao criar tarefa" })
      }

      res.status(201).json({
        id: this.lastID,
        titulo: titulo.trim(),
        concluida: 0
      })
    }
  )
}

function listarTarefas(req, res) {
    const { concluida, titulo } = req.query

    if (concluida !== undefined && concluida !== "0" && concluida !== "1") {
        return res.status(400).json({
            mensagem: "O filtro concluida deve ser 0 ou 1"
        })
    }

    if (titulo !== undefined && titulo.trim() === "") {
        return res.status(400).json({
            mensagem: "O filtro titulo não pode ser vazio"
        })
    }

    //Busca por concluida e pelo titulo ao mesmo tempo
    if (concluida !== undefined && titulo !== undefined) {
        return db.all(
                    `SELECT * FROM tarefas WHERE concluida = ? AND titulo LIKE ?`,
                    [concluida, `%${titulo.trim()}%`],
                    (erro, rows) => {
                        if (erro) {
                        return res.status(500).json({
                            mensagem: "Erro ao buscar tarefas"
                        })
                        }

                        return res.json(rows)
                    }
                )
    }

    //Busca apenas por concluida
    if (concluida !== undefined) {
        return db.all(
                    `SELECT * FROM tarefas WHERE concluida = ?`,
                    [concluida],
                    (erro, rows) => {
                        if (erro) {
                        return res.status(500).json({
                            mensagem: "Erro ao buscar tarefas"
                        })
                        }

                        return res.json(rows)
                    }
                )
    }

    //Busca apenas por titulo
    if (titulo !== undefined) {
        return db.all(
        `SELECT * FROM tarefas WHERE titulo LIKE ?`,
        [`%${titulo.trim()}%`],
        (erro, rows) => {
            if (erro) {
            return res.status(500).json({
                mensagem: "Erro ao buscar tarefas"
            })
            }

            return res.json(rows)
        }
        )
    }

    //Busca sem filtros, ou seja, busca por todas as tarefas
    db.all(`SELECT * FROM tarefas`, [], (erro, rows) => {
        if (erro) {
        return res.status(500).json({
            mensagem: "Erro ao buscar tarefas"
        })
        }

        res.json(rows)
    })
}

function buscarTarefaPorId(req, res) {
  const idDaTarefa = Number(req.params.id)

  db.get(
    `SELECT * FROM tarefas WHERE id = ?`,
    [idDaTarefa],
    (erro, row) => {
      if (erro) {
        return res.status(500).json({
          mensagem: "Erro ao buscar tarefa"
        })
      }

      if (!row) {
        return res.status(404).json({
          mensagem: "Tarefa não encontrada"
        })
      }

      res.json(row)
    }
  )
}

function atualizarTarefa(req, res) {
  const idDaTarefa = Number(req.params.id)
  const { titulo, concluida } = req.body

  if (typeof titulo !== "string" || titulo.trim() === "") {
    return res.status(400).json({
      mensagem: "O título da tarefa é obrigatório"
    })
  }

  if (concluida !== 0 && concluida !== 1) {
    return res.status(400).json({
      mensagem: "O campo concluida deve ser 0 ou 1"
    })
  }

  db.run(
    `UPDATE tarefas SET titulo = ?, concluida = ? WHERE id = ?`,
    [titulo.trim(), concluida, idDaTarefa],
    function (erro) {
      if (erro) {
        return res.status(500).json({
          mensagem: "Erro ao atualizar tarefa"
        })
      }

      if (this.changes === 0) {
        return res.status(404).json({
          mensagem: "Tarefa não encontrada"
        })
      }

      db.get(
        `SELECT * FROM tarefas WHERE id = ?`,
        [idDaTarefa],
        (erroBusca, row) => {
          if (erroBusca) {
            return res.status(500).json({
              mensagem: "Erro ao buscar tarefa atualizada"
            })
          }

          res.json(row)
        }
      )
    }
  )
}

function excluirTarefa(req, res) {
  const idDaTarefa = Number(req.params.id)

  db.run(
    `DELETE FROM tarefas WHERE id = ?`,
    [idDaTarefa],
    function (erro) {
      if (erro) {
        return res.status(500).json({ mensagem: "Erro ao excluir tarefa" })
      }

      if (this.changes === 0) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" })
      }

      res.json({ mensagem: "Tarefa excluída com sucesso" })
    }
  )
}

module.exports = {
  criarTarefa,
  listarTarefas,
  buscarTarefaPorId,
  atualizarTarefa,
  excluirTarefa
}