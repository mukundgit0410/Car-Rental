const carModel = require("../models/CAR.scehma");


exports.createCar = async (req, res) => {
  try {
    const { profile_pic, company_name, model_name, price_of_renting_per_day, status } = req.body;


      let carobj = {
        profile_pic: profile_pic,
        company_name: company_name,
        model_name: model_name,
        price_of_renting_per_day: price_of_renting_per_day,
        status: status,
      };
      let data = await carModel(carobj).save();
      if (data) {
        return res.json({
          message: "User created succesfully",
        });
      }
      return res.json({
        message: "data not inserted",
      });
  
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};


const getCarList = async (req, res) => {
  try {
    const { status } = req.params;
    const cars = await ProductModel.find({status: status});
    if (status=="Available") {
      res.json(cars);
    }
  } catch (error) {
      return res.json({
          message:"Error"
      })
  }
};
    