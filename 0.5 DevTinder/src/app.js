// import express from "express";
// import { connectDB } from "./config/database";
const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/User");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log("---->", req.body);
  try {
    // Validation of data
    const { firstName, lastName, emailId, password } = req.body;

    validateSignUpData(req);

    if (!emailId || !firstName || !lastName || !password) {
      throw new Error("Email | password|firstName|lastName is required");
    }

    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    user.save();
    res.send("User created successfully");
  } catch (error) {
    res.send(error.message).status(404);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      res.send("Login Successful!!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    console.log(userEmail);
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
    // const users = await User.find({ emailId: userEmail });
    // if (users.length === 0) {
    //   res.status(404).send("User not found");
    // } else {
    //   res.send(users);
    // }
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

app.delete("/user", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.body.userId);
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(400).send("Something went wrong ");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    if (data?.skills.length > 10) {
      throw new Error("Skills cannot be more than 10");
    }
    const user = await User.findByIdAndUpdate(
      { _id: req.body.userId },
      req.body,
      {
        returnDocument: true,
        runValidators: true,
      }
    );
    console.log(user);
    res.status(200).send("User Updated successfully");
  } catch (error) {
    res.status(400).send("UPDATE FAILED:" + err.message);
  }
});

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong ");
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
