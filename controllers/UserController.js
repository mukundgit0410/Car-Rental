const UserModel = require("../models/USERS.scehma");
const bcrypt = require("bcrypt");
const hash = require("./hash");


exports.cretaeUserTypeController = async (req, res) => {
  const { user_type } = req.body;
  console.log(user_type);
  let roleObj = {
    user_type: user_type,
  };
  try {
    let data = await RoleModel(roleObj).save();
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

exports.registerController = async (req, res) => {
  try {
    const { name, email, password, user_type } = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptpasswd = await bcrypt.hash(password, salt);
    const dataExists = await UserModel.findOne({ email });
    if (!dataExists) {
      let userobj = {
        name: name,
        email: email,
        password: encryptpasswd,
        user_type: user_type,
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
    } else {
      return res.json({
        message: "User already exists",
      });
    }
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

exports.loginController = async (req, res) => {
  try {
    const { email, password, user_type } = req.body;

    filter = {
      email: email,
      user_type: user_type,
    };

    const data = await UserModel.findOne(filter);

    if(data){
      var passwordIsValid = bcrypt.compareSync(password, data.password);
    }

    if (passwordIsValid) {

      // var token = hash.authorization();
      // res.setHeader("jwt", token);
      return res.json({
        message: "Login Successfully",
      });
    }else{
      return res.json({
        message: "Incorrect Password",
      });
    }
  } catch (error) {
    return res.json({
      message: "error.message",
    });
  }
};
