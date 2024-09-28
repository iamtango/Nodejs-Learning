// import express from "express";
// import { connectDB } from "./config/database";
const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/User");
const app = express();

app.use(express.json());
app.post("/signup", async (req, res) => {
  try {
    if (
      !req.body.emailId ||
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.password
    ) {
      throw new Error("Email | password|firstName|lastName is required");
    }
    const user = new User(req.body);
    user.save();
    res.send("User created successfully");
  } catch (error) {
    res.send(error.message).status(404);
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
