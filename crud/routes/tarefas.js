const express = require("express")

//cria um agrupador de rotas usando o método Router() do Express. Isso permite organizar as rotas relacionadas às tarefas em um módulo separado, mantendo o código mais limpo e modularizado.
const router = express.Router()
const tarefasController = require("../controllers/tarefasController")

router.post("/", tarefasController.criarTarefa)
router.get("/", tarefasController.listarTarefas)
router.get("/:id", tarefasController.buscarTarefaPorId)
router.put("/:id", tarefasController.atualizarTarefa)
router.delete("/:id", tarefasController.excluirTarefa)

module.exports = router