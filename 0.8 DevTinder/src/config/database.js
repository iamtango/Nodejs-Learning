// import mongoose from "mongoose";
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};
module.exports = connectDB;
// connectDB()
//   .then(() => {
//     console.log("Connection established Successfully");
//   })
//   .catch(() => {
//     console.error("Connection failed ");
//   });
