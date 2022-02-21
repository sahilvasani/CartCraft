const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hellow");
});

app.listen(5000, () => {
  console.log("server running at port 5000");
});
