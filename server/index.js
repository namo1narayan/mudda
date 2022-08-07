const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Employees");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://namo:mudda@cluster0.skuq5.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/getEmployees", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createEmployees", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});