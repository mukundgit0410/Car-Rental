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

// this line suiggest only connecting to db;
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log("Connected to batch8db!"));

//in order to view this db , we have specify what kind of database it is , and what is the type of data it is going to store
//Schema of the db model;

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// const UserModel = mongoose.model('UserDatabase', UserSchema);
// this model will be used to intercat with our db using our apis.

// app.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;
//   console.log(username, email, password);
//   let userobj = {
//     username: username,
//     password: password,
//     email: email,
//   };
//   try {
//     let data = await UserModel({ email }).save();
//     if (data) {
//       return res.json({
//         message: "data inserted succesfuylly",
//       });
//     }
//     return res.json({
//       message: "data not inserted",
//     });
//   } catch (error) {
//     return res.json({
//       message: error.message,
//     });
//   }
//   // method to store the data in mongodb;

//   // error: multiple responses :req header can not be set after it has been sent to the client;
// });

// app.post("/user", async (req, res) => {
//   const { email } = req.body;
//   // to find data based on email address provided';

//   try {
//     const data = await UserModel.find({ email });
//     if (data) {
//       return res.json({
//         message: "data exists",
//       });
//     }
//     return res.json({
//       message: "data does not exists",
//     });
//   } catch (error) {
//     return res.json({
//       message: "error in finding the data",
//     });
//   }
// });
const UserRouter = require("./routes.js/UserRouter")
const CarRouter = require("./routes.js/CarRouter")
const BookingRouter = require("./routes.js/BookingRouter")

app.use("/user", UserRouter)
app.use("/car", CarRouter)
app.use("/booking", BookingRouter)

app.listen(process.env.PORT, () => {
  console.log("server running");
});
