const express = require("express");
const UserRouter = express.Router();
const {
  registerController,
  loginController,
  cretaeUserTypeController
} = require("../controllers/UserController");

UserRouter.post("/create-user-role", cretaeUserTypeController);
UserRouter.post("/register", registerController);
UserRouter.post("/login", loginController);

module.exports=UserRouter
