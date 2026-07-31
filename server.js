const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// MySQL Connection Test
const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    connectTimeout: 10000
});

db.connect((err) => {
    if (err) {
        console.log("FULL ERROR:", err);
        return;
    }

    console.log("MySQL Connected");
});

app.get("/", (req, res) => {
    res.send("Agri-Allied Server Running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});