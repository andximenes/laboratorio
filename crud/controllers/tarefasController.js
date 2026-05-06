const db = require("../db")

function criarTarefa(req, res) {
  const { titulo } = req.body
  
  //validação
  if (typeof titulo !== "string") {
    return res.status(400).json({
      mensagem: "O título deve ser uma string"
    })
  }
  
  const tituloFormatado = titulo.trim()

  if (tituloFormatado === "") {
    return res.status(400).json({
      mensagem: "O título não pode estar vazio"
    })
  }
  
  const concluida = 0
  
  db.run(
    `INSERT INTO tarefas (titulo, concluida) VALUES (?, ?)`, [tituloFormatado, concluida],
    function(erro) {
      if(erro) {
        return res.status(500).json({
          mensagem: "Erro ao tentar criar a tarefa"
        })
      }
      res.status(201).json({
        id: this.lastID,
        titulo: tituloFormatado,
        concluida: concluida
      })
    }
  )
}

function listarTarefas(req, res) {
  const { titulo, concluida, ordem, limite } = req.query

  // garante que o filtro titulo não seja vazio
  if (titulo !== undefined && titulo.trim() === "") {
    return res.status(400).json({
      mensagem: "O filtro título não pode ser vazio"
    })
  }

  // garante que o filtro concluida seja 0 ou 1
  if (concluida !== undefined && concluida !== "0" && concluida !== "1") {
    return res.status(400).json({
      mensagem: "O filtro concluida deve ser 0 ou 1"
    })
  }

  // garante que ordem seja asc ou desc
  if (ordem !== undefined && ordem !== "asc" && ordem !== "desc") {
    return res.status(400).json({
      mensagem: "O filtro ordem deve ser asc ou desc"
    })
  }

  // garante que limite seja um número positivo
  if (limite !== undefined && (isNaN(Number(limite)) || Number(limite) <= 0)) {
    return res.status(400).json({
      mensagem: "O filtro limite deve ser um número positivo"
    })
  }

  let sql = `SELECT * FROM tarefas`
  const parametros = []
  const filtros = []

  if (titulo !== undefined) {
    filtros.push(`titulo LIKE ?`)
    parametros.push(`%${titulo.trim()}%`)
  }

  if (concluida !== undefined) {
    filtros.push(`concluida = ?`)
    parametros.push(concluida)
  }

  if (filtros.length > 0) {
    sql += ` WHERE ` + filtros.join(" AND ")
  }

  if (ordem !== undefined) {
    sql += ` ORDER BY id ${ordem.toUpperCase()}`
  }

  if (limite !== undefined) {
    sql += ` LIMIT ?`
    parametros.push(Number(limite))
  }

  db.all(sql, parametros, (erro, rows) => {
    if (erro) {
      return res.status(500).json({
        mensagem: "Erro ao buscar tarefas"
      })
    }

    return res.json(rows)
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

  //verificações antes da atualização
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

  //atualização
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

      //mostra a tarefa atualizada
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