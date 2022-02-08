
const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "feedbackformdb"
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const sqlInsert = "INSERT INTO users_message (name, email, message) VALUES (?, ?, ?)";
    db.query(sqlInsert, [name, email, message], (err, result) => {
        console.log(result)
    })
})

app.listen(3001, () => {
    console.log("running on port 3001");
})