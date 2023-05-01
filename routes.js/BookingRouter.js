const express = require("express");
const BokingRouter = express.Router();
const {
    createBookingController,
    bookingListUser,
    bookingListCar,
    bookingListUpdate
} = require("../controllers/BookingController");

BokingRouter.post("/create-booking", createBookingController);
BokingRouter.post("/booking-list-user", bookingListUser);
BokingRouter.post("/booking-list-car", bookingListCar);
BokingRouter.post("/booking-list-update", bookingListUpdate);


module.exports=BokingRouter
