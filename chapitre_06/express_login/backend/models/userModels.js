const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  confirmPassword: String,
  firstName: String,
  surname: String,
  dateOfBirth: Number,
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User: User,
};
