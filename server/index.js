const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://namo:mudda@cluster0.skuq5.mongodb.net/mudda?retryWrites=true&w=majority"
);

app.get("/employees", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/register", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

// app.post('/register', function(req, res) {
//   const employee = {
//     Firstname: req.body.firstname,
//     Lastname: req.body.lastname,
//     Email: req.body.email,
//     Mobile:req.body.mobile,
//   };
//   success.push(employee);
//   console.log(success);
// });

app.patch("/updateuser/:id",async(req,res)=>{
  try {
      const {id} = req.params;

      const updateduser = await users.findByIdAndUpdate(id,req.body,{
          new:true
      });

      console.log(updateduser);
      res.status(201).json(updateduser);

  } catch (error) {
      res.status(422).json(error);
  }
})


app.delete("/deleteuser/:id",async(req,res)=>{
  try {
      const {id} = req.params;

      const deletuser = await users.findByIdAndDelete({_id:id})
      console.log(deletuser);
      res.status(201).json(deletuser);

  } catch (error) {
      res.status(422).json(error);
  }
});


app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});