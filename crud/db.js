const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./database.sqlite")

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      concluida INTEGER NOT NULL DEFAULT 0
    )
  `)
})

module.exports = db