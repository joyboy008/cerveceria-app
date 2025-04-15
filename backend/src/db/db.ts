import sqlite3 from "sqlite3";
import path from "path";

const db = new sqlite3.Database(
  path.resolve(__dirname, "database.db"),
  (err) => {
    if (err) {
      console.error("Error conectando a SQLite", err.message);
    } else {
      console.log("SQLite conectado ✅");
    }
  }
);

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);

export default db;
