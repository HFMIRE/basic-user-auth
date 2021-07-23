const express = require("express")
const  {sequelize, User } = require("sequelize")
const bcyrpt = require("bcrypt")
const app = express()
const port = 5000
app.use(express.json())

app.post("/users", async(req, res) => {
    const {username, password} = req.body; 
    const passwordHash = await bcyrpt.hash(password,  10)
    console.log(username, password, passwordHash)
    const newUser = User.create({ username, passwordHash})
    console.log(newUser.toJSON())
})

app.listen(port, (req, res) => {
    console.log(`Server listening at http://localhost:${port}`);
  });0