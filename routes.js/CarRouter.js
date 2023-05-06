const express = require("express");
const multer = require("multer");
const CarRouter = express.Router();
const {
    createCar, getCarList,
    
} = require("../controllers/CarController");



CarRouter.post("/create", createCar);
CarRouter.post("/cars", getCarList);

module.exports=CarRouter