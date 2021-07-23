const express = require("express")
const  { User } = require("./db")
const bcyrpt = require("bcrypt")
const app = express()
const port = 5000
app.use(express.json())
// btoa("Sophie:france12")
async function verfiyUsers(req, res, next ) {
    const authHeader = req.headers.authorization; 
    const token = authHeader.split(" ")[1]
    const usernamePassword = String(Buffer.from(token, "base64")).split(":")
    const [username, password] = usernamePassword;
    const userRecord = await User.findOne({where:  {username} })
    const verfiyUser = await bcyrpt.compare(password, userRecord.passwordHash)
    console.log(verfiyUser)
    if (verfiyUser) {
        return next()
    } else {
        res.sendStatus(404)
    }

}
app.get("/secrets", verfiyUsers, async(req, res) => {
    res.send("this secret message")

})


app.post("/users", async(req, res) => {
    const {username, password} = req.body; 
    const passwordHash = await bcyrpt.hash(password, 10)
    await User.create({ username, passwordHash})
    res.sendStatus(201);
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });