// imports and setup

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const db = require("./db");
//const path = require('path');
//const { error } = require('console');

// app initializaion
const app = express();
const port = 5000;

//middleware and parsing
app.use(cors());
app.use(bodyParser.json());

// register endpoint
app.post("/register", async (req, res) => {
  console.log("Received registration data:", req.body);

  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "insert into app_users (appUser_name, email, appUser_passw) values (?,?,?)",
      [name, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("MySQL Insert Error:", err);
          if (err.code === "ER_DUP_ENTRY") {
            return res.status(400).json({ error: "User already exists" });
          }
          return res.status(500).json({ error: "Database error" });
        } //return res.status(400).json({ error : 'user already exists' });

        res.json({ message: "Registration Sucessful" });
      }
    );
  } catch (err) {
    console.error("Hashing error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//login logic
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "select * from app_users where email = ?",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ error: "server error" }); //issue with query
      if (results.length === 0)
        return res.status(400).json({ error: "username not found" });

      const user = results[0];
       const isMatch = await bcrypt.compare(password, user.appUser_passw);

      if (isMatch) {
        res.json({ message: `Welcome ${user.appUser_name}` });
      } else {
        res.status(401).json({ error: "Incorrect Password" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
