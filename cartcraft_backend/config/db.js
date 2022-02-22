const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://admin:Admin123@cluster0.4b5fe.mongodb.net/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection sucsessfull");
  })
  .catch((err) => {
    console.log(err);
  });
