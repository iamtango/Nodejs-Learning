// import express from "express";
const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

/*
// all are same
 app.use("/route", rH, rH2, rH3, rH4, rh5);
 app.use("/route", [rH, [rH2, rH3], rH4, rh5]);
 app.use("/route", rH, [rH2, rH3], rH4, rh5);

*/
/*
app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 2!!");
    // res.send("2nd Response!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3!!");
    // res.send("3rd Response!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 4!!");
    // res.send("4th Response!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 5!!");
    res.send("5th Response!!");
  }
);
*/

app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
  res.send("User logged in successfully!");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

// Wild cards Error handling

app.get("/getUserData", (req, res) => {
  //try {
  // Logic of DB call and get user data

  throw new Error("dvbzhjf");
  res.send("User Data Sent");
  //   } catch (err) {
  //     res.status(500).send("Some Error contact support team");
  //   }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error
    res.status(500).send("something went wrong");
  }
});
app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});
