// import express from "express";
// import { connectDB } from "./config/database";
const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/User");
const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Vedang",
    lastName: "Nikure",
    email: "vedang@test.com",
    age: "23",
    gender: "male",
  });
  try {
    user.save();
    res.send("User created successfully");
  } catch (error) {
    res.send(error.message).status(404);
  }
});

connectDB()
  .then(() => {
    console.log("Connection established Successfully");
    app.listen(3000, () => {
      console.log("listening on port http://localhost:3000");
    });
  })
  .catch(() => {
    console.error("Connection failed ");
  });
