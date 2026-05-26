//get database
const db = require("../db")

//create tasks
function createTask (req, res) {
    try {
        const { title, isCompleted } = req.body

        //validation title
        if(typeof(title) !== "string") {
            return res.status(400).json({
                message: "Title must be a string ⚠️"
            })
        }

        const formattedTitle = title.trim()

        if(formattedTitle === "") {
            return res.status(400).json({
                message: "Title cannot be empty ⚠️"
            })
        }

        //validation isCompleted
        if(isCompleted !== undefined && isCompleted !== 0 && isCompleted !== 1) {
            return res.status(400).json({
                message: "isCompleted must be 0 or 1 ⚠️"
            })
        }

        const sql = `
            INSERT INTO tasks (title, isCompleted) VALUES (?, ?)
        `

        db.run(sql, [formattedTitle, isCompleted ?? 0], function(error){
            if(error) {
                return res.status(500).json({
                    message: "Error creating task ❌"
                })
            }

            return res.status(201).json({
                message: "Task created successfully",
                task: {
                    id: this.lastID,
                    title: formattedTitle,
                    isCompleted: isCompleted ?? 0
                }
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

//read all tasks
function readAllTasks (req, res) {
    try{
        const sql = `SELECT * FROM tasks`

        db.all(sql, [], function(error, tasks) {
            if(error) {
                return res.status(500).json({
                    message: "Internal error, tasks cannot be listed",
                    error: error.message
                })
            }

            return res.status(200).json({
                message: "Tasks listed successefully",
                tasks
            })
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal error",
            error: error.message

        })
    }
}

//Read one task by id
function readTaskById (req, res) {
    try {
        const { id } = req.params
        const formattedId = Number(id)

        if(Number.isNaN(formattedId)) {
            return res.status(400).json({
                message: "id must be a number"

            })
        }

        const sql = `SELECT * FROM tasks WHERE id = ?`

        db.get(sql, [formattedId], function(error, task) {
            if(error) {
                return res.status(500).json({
                    message: "Internal error, task cannot be seatching",
                    error: error.message
                })
            }

            if(!task) {
                return res.status(500).json({
                    message: "Task not found",
                    
                })
            }

            return res.status(200).json({
                message: "Task found successfully",
                task
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal error",
            error: error.message
        })
        
    }

}

//update task
function updateTaskById(req, res) {
    try{
        const { id } = req.params
        const { title, isCompleted } = req.body

        //id validation
        const formattedId = Number(id)
        
        //id is a valid number?
        if(Number.isNaN(formattedId)) {
            return res.status(400).json({
                message: "id must be a number"
            })
        }

        //title validations
        if(typeof(title) !== "string") {
            return res.status(400).json({
                message: "title must be a string"
            })
        }

        const formattedTitle = title.trim()

        if(formattedTitle === "") {
            return res.status(400).json({
                message: "Title cannot be empty"
            })
        }

        //isCompleted validation
        if(isCompleted !== 0 && isCompleted !== 1) {
            return res.status(400).json({
                message: "isCompleted must be 0 or 1"
            })
        }


        //sql part

        const sql = `UPDATE tasks SET title = ?, isCompleted = ? WHERE id = ?`

        db.run(sql, [formattedTitle, isCompleted, formattedId], function(error) {
            if(error) {
                return res.status(500).json({
                    message: "Task cannot be updated",
                    error: error.message
                })
            }

            //changes validation
            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Task not found"
                })
            }

            return res.status(200).json({
                task: {
                    id: formattedId,
                    title: formattedTitle,
                    isCompleted : isCompleted
                }
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal error",
            error: error.message
        })
    }
}

//delete
function deleteTask(req, res) {
    try {
        const { id } = req.params
        const formattedId = Number(id)

        if(Number.isNaN(formattedId)) {
            return res.status(400).json({
                message: "id must be a number"
            })
        }

        const sql = `DELETE FROM tasks WHERE id = ?`

        db.run(sql, [formattedId], function(error) {
            if(error) {
                return res.status(500).json({
                    message: "Error to delete task",
                    error: error.message
                })
            }

            if(this.changes === 0) {
                return res.status(404).json({
                    message: "Task not found"
                })
            }

            return res.status(200).json({
                message: "Task deleted successfully"
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

module.exports = {
    createTask,
    readAllTasks,
    readTaskById,
    updateTaskById,
    deleteTask
}