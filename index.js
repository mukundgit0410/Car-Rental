require("dotenv").config();

const express = require("express");
const app = express();
var cors = require('cors')

const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());   
app.get("/test", (req, res) => {
  res.json({
    message: "get request working!!",
  });
});
const UserModel = require("./models/USERS.scehma");

const DB_URL = process.env.MONGO_URL;
mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to DB!"));


const UserRouter = require("./routes.js/UserRouter")
//const ProductsRouter = require("./routes.js/ProdutsRouter")
app.use("/auth", UserRouter)
//app.use("/auth/products", ProductsRouter)

app.listen(process.env.PORT, () => {
  console.log("server running");
});
