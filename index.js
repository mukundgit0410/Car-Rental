require("dotenv").config();

const express = require("express");
const app = express();
var cors = require('cors')
const hash = require("./controllers/hash");

const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());   
app.get("/test", (req, res) => {
  let result = req.header('x-api-key')
  res.send(result)
  res.json({
    message: "get request working!!",
  });
});
const UserModel = require("./models/USERS.scehma");

// this line suiggest only connecting to db;
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log("Connected to batch8db!"));



const UserRouter = require("./routes.js/UserRouter")
const CarRouter = require("./routes.js/CarRouter")
const BookingRouter = require("./routes.js/BookingRouter")

app.use("/user", UserRouter)
app.use("/car", CarRouter)
app.use("/booking", BookingRouter)

app.listen(process.env.PORT, () => {
  console.log("server running");
});
