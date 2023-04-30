const express = require("express");
const CarRouter = express.Router();
const {
    createCar,  
} = require("../controllers/CarController");


CarRouter.post("/add-car", createCar);

module.exports=CarRouter