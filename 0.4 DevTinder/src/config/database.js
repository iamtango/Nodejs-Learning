// import mongoose from "mongoose";
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://vedangnikure:lFrzTiJdYBNDTEpf@namastenode.qaagw.mongodb.net/devTinder?retryWrites=true&w=majority&appName=NamasteNode"
  );
};
module.exports = connectDB;
// connectDB()
//   .then(() => {
//     console.log("Connection established Successfully");
//   })
//   .catch(() => {
//     console.error("Connection failed ");
//   });
