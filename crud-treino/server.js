const express = require("express") //express module
const app = express() //using express tool

app.use(express.json()) //express reading json

//show initial test message
app.get("/", (req, res) => {
    return res.json({
        message: "🔥🔥🔥 on!"
    })
})

//Database
const taskList = []

//CREATE TASK
app.post("/tasks", (req, res) => {
    const {title, isCompleted} = req.body

    //title validation
    if(typeof(title) !== "string") {
        return res.status(400).json({
            message: "Title must be a string ❌"
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

    const newTask = {
        id: Date.now(), //simulated id
        title: formattedTitle,
        isCompleted
    }

    taskList.push(newTask)

    return res.status(201).json({
        message: "New task creted successfully 🚀",
        newTask
    })
})

//READ (SHOW) ALL TASKS
app.get("/tasks", (req, res) => {
    return res.json(taskList)
})

// READ (SHOW) A TASK BY ID
app.get("/tasks/:id", (req, res) => {
    const { id } = req.params

    const formattedIdTask = Number(id)

    if (Number.isNaN(formattedIdTask)) {
        return res.status(400).json({
            message: "Id must be a number ❌"
        })
    }

    const taskFoundById = taskList.find((task) => {
        return task.id === formattedIdTask
    })

    if (!taskFoundById) {
        return res.status(404).json({
            message: "Task not found ❌"
        })
    }

    return res.status(200).json({
        message: "Task found successfully ✅",
        taskFoundById
    })
})

// UPDATE
app.put("/tasks/:id", (req, res) => {
    const { id } = req.params
    const { title, isCompleted } = req.body

    const formattedIdTask = Number(id)

    // Validation id number
    if (Number.isNaN(formattedIdTask)) {
        return res.status(400).json({
            message: "Id must be a number ❌"
        })
    }

    // Search task index
    const taskIndex = taskList.findIndex((task) => {
        return task.id === formattedIdTask
    })

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found ❌"
        })
    }

    // Validation title
    if (typeof title !== "string") {
        return res.status(400).json({
            message: "Title must be a string"
        })
    }

    const formattedTitle = title.trim()

    if (formattedTitle === "") {
        return res.status(400).json({
            message: "Title cannot be empty ❌"
        })
    }

    // Validation isCompleted
    if (isCompleted !== 0 && isCompleted !== 1) {
        return res.status(400).json({
            message: "isCompleted must be 0 or 1"
        })
    }

    const updatedTask = {
        id: formattedIdTask,
        title: formattedTitle,
        isCompleted
    }

    taskList[taskIndex] = updatedTask

    return res.status(200).json({
        message: "Task updated successfully 😺",
        updatedTask
    })
})

//DELETE
app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params
    const formattedIdTask = Number(id)
    const taskIndex = taskList.findIndex((task) => {
        return task.id === formattedIdTask
    })

    if(taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found ❌"
        })
    }

    taskList.splice(taskIndex, 1)

    return res.status(200).json({
        message: "Task deleted successfully"
    })

})

//listening server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000 📍")
})







