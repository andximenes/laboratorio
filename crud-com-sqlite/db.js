//sqlite module
const sqlite3 = require("sqlite3").verbose()

//creating Database
const db = new sqlite3.Database("./database.sqlite", (error) => {
    if(error) {
        console.log("Error connecting to database ❌", error.message)
        return
    }
    
    console.log("Database connected successfuly ✅")
})

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            isCompleted INTEGER NOT NULL DEFAULT 0,
            createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        )`
    )
})

module.exports = db