const { validationResult } = require("express-validator");
const { User } = require("../models/userModels");
// GET

const admin = async (req, res) => {
  try {
    let users = await User.find();

    res.json({
      status: "success",
      data: users,
    });
  } catch {
    res.status(401).json({
      message: "error detected ! ",
    });
  }
};

// POST

const register = async (req, res) => {
  console.log("Register says : WE GOOD TO GO");

  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    res.status(401).json(res.status(400));
    return;
  } else {
    User.create(req.body);
    const users = await User.find();
    console.log(users);
    res.json({
      success: true,
      messages: "user will be add",
      data: users,
    });
  }
};
const login = (req, res) => {
  console.log("Login says : WE GOOD TO GO");
};

module.exports = {
  admin: admin,
  register: register,
  login: login,
};
