const db = require("../db")

function criarTarefa(req, res) {
    const { titulo } = req.body

    db.run(
        `INSERT INTO tarefas (titulo, concluida) VALUES (?, ?))`, [titulo, 0],
        function(erro){
            if(erro){
                return res.status(500).json({mensagem: "Erro ao criar tarefa"})
            }
            res.json({
                id: this.lastID,
                titulo,
                concluida: 0
            })
        }
    )
}

function listarTarefas(req, res) {
    db.all(
        `SELECT * FROM tarefas`, [], 
        function(erro, rows) {
            if (erro){
                return res.status(500).json({mensagem: "Erro ao listar tarefas"})
            }
            res.json(rows)
        }
    )
}

function atualizarTarefa(req, res) {
    const idDaTarefa = Number(req.params.id)

    db.run(
        `UPDATE tarefas SET concluida = 1 WHERE id = ?`, [idDaTarefa],
        function(erro) {
            if (erro){
                return res.status(500).json({mensagem: "Erro ao atualizar tarefa"})
            }
            
            if (this.changes === 0){
                return res.status(404).json({mensagem: "Tarefa não encontrada"})
            }

            db.get(
                `SELECT * FROM tarefas WHERE id = ?`, [idDaTarefa],
                (erroBusca, row) => {
                    if (erroBusca){
                        return res.status(500).json({mensagem: "Erro ao buscar tarefa atualizada"})
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
        `DELETE FROM tarefas WHERE id = ?`, [idDaTarefa],
        function(erro) {
            if (erro){
                return res.status(500).json({mensagem: "Erro ao excluir tarefa"})
            }
            if (this.changes === 0){
                return res.status(404).json({mensagem: "Tarefa não encontrada"})
            }
            res.json({mensagem: "Tarefa excluída com sucesso"})
        }
    )
}

module.exports = {
    criarTarefa,
    listarTarefas,
    atualizarTarefa,
    excluirTarefa
}