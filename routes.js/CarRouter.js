const express = require("express");
const multer = require("multer");
const CarRouter = express.Router();
const {
    createCar,
    
} = require("../controllers/CarController");



CarRouter.post("/create", createCar);

module.exports=CarRouter