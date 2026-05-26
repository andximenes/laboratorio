const express = require("express")
const router = express.Router()
const db = require("../db")
const controllerTasks = require("../controller/controllerTasks")


//princiapl routers
router.post("/", controllerTasks.createTask)
router.get("/", controllerTasks.readAllTasks)
router.get("/:id", controllerTasks.readTaskById)
router.put("/:id", controllerTasks.updateTaskById)
router.delete("/:id", controllerTasks.deleteTask)

module.exports = router