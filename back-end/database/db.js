const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

// For testing
db.serialize(() => {
  // Only 2 tables we have in mind, may want to add more parameters
  db.run("CREATE TABLE employees (id INT, name TEXT, rating INT)");
  db.run("CREATE TABLE reviews (id INT, employee_id INT, review TEXT)");

  // TODO: This can be changed into a function to populate with more data when we find it
  const stmt = db.prepare("INSERT INTO employees VALUES (?, ?, ?)");
  stmt.run(1,
    "John Doe", 3);
  stmt.run(2,
    "Jane Smith", 8);
  stmt.finalize();

  const reviewStmt = db.prepare("INSERT INTO reviews VALUES (?, ?, ?)");
  reviewStmt.run(1,
    1,
    "Excellent worker");
  reviewStmt.run(2,
    2,
    "Needs improvement");

  reviewStmt.finalize();
});

module.exports = db;
