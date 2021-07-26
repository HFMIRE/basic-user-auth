const express = require("express");
const { User } = require("./db");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = await bcyrpt.hash(password, 10);
  await User.create({ username, passwordHash });
  res.sendStatus(201);
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userRecord = await User.findOne({ where: { username } });
  } catch (err) {
    console.log(err);
  }

  console.log(userRecord);
  const verfiyUser = await bcyrpt.compare(password, userRecord.passwordHash);
  if (verfiyUser) {
    const token = jwt.sign(
      { username, email, password },
      process.env.JWT_SECRET
    );
    return res.send(token);
  } else {
    res.sendStatus(404);
  }
});
app.get("/greeting", (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  const tokenVerify = jwt.verify(token, process.env.JWT_SECRET);
  const { username } = tokenVerify;
  res.send(`Hello, ${username}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
