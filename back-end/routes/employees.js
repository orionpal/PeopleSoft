const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/', (req, res) => {
    db.all("SELECT * FROM employees", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ data: rows });
    });
});

module.exports = router;
