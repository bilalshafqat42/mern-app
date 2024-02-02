// dotenv
require("dotenv").config();
// express package
const express = require("express");

// assign app with express
const app = express();

// global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route handler
app.get("/api/workouts", (req, res) => {
  res.json({ mssg: "welcom to the app" });
});

// listen for request
// certain port number
app.listen(process.env.PORT, () => {
  console.log(`welcome to the application on port ${process.env.PORT}`);
});
