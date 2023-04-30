const BookingModel = require("../models/BOOKING.schema");
const CarModel = require("../models/CAR.scehma");

exports.createBookingController = async (req, res) => {
  try {
    const { userId, carId, startDate, endDate, status } = req.body;

    let userobj = {
      user: userId,
      car: carId,
      startDate: startDate,
      endDate: endDate,
    };

    let data = await BookingModel(userobj).save();

    if (data) {
      await CarModel.findByIdAndUpdate(carId, {
        status: "not-available",
      });

      return res.json({
        message: "Booking created succesfully",
      });
    }
    return res.json({
      message: "Booking not done",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

exports.bookingListUser = async (req, res) => {
  try {
    filter = {
      user: req.body.userId,
    };
    bookingListUser = await BookingModel.find(filter)
      .populate("car")
      .populate("user");
    console.log(bookingListUser);
    if (bookingListUser) {
      return res.json({
        message: "Car booking List",
        data: bookingListUser,
      });
    }
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};
exports.bookingListCar = async (req, res) => {
  try {
    filter = {
      car: req.body.carId,
    };
    bookingListUser = await BookingModel.find(filter)
      .populate("car")
      .populate("user");
    console.log(bookingListUser);
    if (bookingListUser) {
      return res.json({
        message: "Car booking List",
        data: bookingListUser,
      });
    }
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};
