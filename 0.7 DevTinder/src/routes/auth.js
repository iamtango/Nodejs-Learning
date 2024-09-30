const express = require("express");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require("../utils/validation");
const User = require("../models/User");
const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
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

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      // const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$790", {
      //   expiresIn: "1d",
      // });
      const token = await user.getJWT();
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("Login Successful!!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

authRouter.post("/logout", async (req, res, next) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .send("Logout Successful");
});

module.exports = authRouter;
