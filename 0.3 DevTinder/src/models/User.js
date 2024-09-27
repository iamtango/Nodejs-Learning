const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  gender: String,
});
const User = model("User", userSchema);
module.exports = User;
