// import express from "express";
const express = require("express");
const app = express();

/*
app.use("/home", (req, res) => {
  res.send("You are doing something which actually very great!");
});
app.use("/life", (req, res) => {
  res.send("Your life will be great my dear bro");
});
app.use("/test", (req, res) => {
  res.send("Your tedst");
});

app.use("/", (req, res) => {
  res.send("Main Dashboard");
});
*/

app.get("/", (req, res) => {
  res.send("You are doing something which actually very great!");
});

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});
