const CarModel = require("../models/CAR.scehma");


exports.createCar = async (req, res) => {
  const { profile_pic, company_name, modal_name, price_of_renting_per_day, owner_id } = req.body;

  let carObj = {
    profile_pic: profile_pic,
    company_name: company_name,
    modal_name: modal_name,
    modal_name: modal_name,
    price_of_renting_per_day: price_of_renting_per_day,
    owner_id: owner_id,
  };
  try {
    let data = await CarModel(carObj).save();
    if (data) {
      return res.json({
        message: "data inserted succesfully",
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