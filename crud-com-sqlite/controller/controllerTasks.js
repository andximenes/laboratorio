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
       return internalServerError(res, error)
    }
}       

// read all tasks with optional filters
function readAllTasks(req, res) {
    try {
        const { isCompleted, search } = req.query

        let sql = `SELECT * FROM tasks`
        let params = []
        let conditions = []

        // isCompleted filter
        if (isCompleted !== undefined) {
            if (isCompleted !== "0" && isCompleted !== "1") {
                return res.status(400).json({
                    message: "isCompleted filter must be 0 or 1"
                })
            }

            conditions.push("isCompleted = ?")
            params.push(Number(isCompleted))
        }

        // search filter
        if (search !== undefined) {
            const formattedSearch = search.trim()

            if (formattedSearch === "") {
                return res.status(400).json({
                    message: "Search cannot be empty"
                })
            }

            conditions.push("title LIKE ?")
            params.push(`%${formattedSearch}%`)
        }

        // apply filters if they exist
        if (conditions.length > 0) {
            sql += ` WHERE ${conditions.join(" AND ")}`
        }

        sql += ` ORDER BY createdAt DESC`

        db.all(sql, params, function(error, tasks) {
            if (error) {
                return res.status(500).json({
                    message: "Internal error, tasks cannot be listed",
                    error: error.message
                })
            }

            return res.status(200).json({
                message: "Tasks listed successfully",
                tasks
            })
        })

    } catch (error) {
        return internalServerError(res, error)
    }
}

//Read one task by id
function readTaskById (req, res) {
    try {
        const { id } = req.params
        const formattedId = Number(id)

        if(Number.isNaN(formattedId)) {
            return idMustBeNumber(res)
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
                return taskNotFound(res)
            }

            return res.status(200).json({
                message: "Task found successfully",
                task
            })
        })
    } catch (error) {
        return internalServerError(res, error)
        
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
            return idMustBeNumber(res)
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

        const sql = `UPDATE tasks SET title = ?, isCompleted = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?`

        db.run(sql, [formattedTitle, isCompleted, formattedId], function(error) {
            if(error) {
                return res.status(500).json({
                    message: "Task cannot be updated",
                    error: error.message
                })
            }

            //changes validation
            if (this.changes === 0) {
                return taskNotFound(res)     
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
        return internalServerError(res, error)
    }
}

//delete
function deleteTask(req, res) {
    try {
        const { id } = req.params
        const formattedId = Number(id)

        if(Number.isNaN(formattedId)) {
            return idMustBeNumber(res)
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
                return taskNotFound(res)
            }

            return res.status(200).json({
                message: "Task deleted successfully"
            })
        })
    } catch (error) {
        return internalServerError(res, error)
    }
}


//recycle functions
function idMustBeNumber(res) {
    return res.status(400).json({
        message: "id must be a number"

    })
}

function taskNotFound(res) {
    return res.status(500).json({
        message: "Task not found",
                    
    })
}

function internalServerError(res, error) {
    return res.status(500).json({
        message: "Internal server error",
        error: error.message
    })
}





module.exports = {
    createTask,
    readAllTasks,
    readTaskById,
    updateTaskById,
    deleteTask
}

