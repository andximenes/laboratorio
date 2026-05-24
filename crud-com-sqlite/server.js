const express = require("express")
const app = express()
const tasksRouter = require("./router/tasksRouter")

app.use(express.json())

// initial router test
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Initial router connected successfully ✅"
    })
})

app.use("/tasks", tasksRouter)

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000 🎉")
})


