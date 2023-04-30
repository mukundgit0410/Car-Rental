const BookingModel = require("../models/BOOKING.schema");


exports.createBookingController = async (req, res) => {
    try {
      const { user, car, startDate, endDate, status } = req.body;
  
    //   const dataExists = await BookingModel.findOne({ email });
    //   if (!dataExists) {
        let userobj = {
          user: user,
          car: car,
          startDate: startDate,
          endDate: endDate,
          status: status,
        };
        let data = await UserModel(userobj).save();
        if (data) {
          return res.json({
            message: "User created succesfully",
          });
        }
        return res.json({
          message: "data not inserted",
        });
    //   } 
    //   else {
        return res.json({
          message: "User already exists",
        });
    //   }
    } catch (error) {
      return res.json({
        message: error.message,
      });
    }
  };