const express = require("express");
const db = require("./config/db");
const User = require("./Schema/UserSchema");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hellow");
});

app.post("/register", async (req, res) => {
  const data = new User(
    ({ firstName, lastName, email, password, confirmPassword } = req.body)
  );
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    res.sendStatus(400).json({ Error: "All Fileds Are Required" });
  } else {
    if (password === confirmPassword) {
      var save = await data.save();
      res.json(save);
    } else {
      res.json("password not matched");
    }
  }
});

app.listen(5000, () => {
  console.log("server running at port 5000");
});
