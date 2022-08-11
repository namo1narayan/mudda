const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  doj: {
    type: Date,
    required: true,
  },
  rm: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  ecode: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  deletedAt: {
    type: String,
    required: true,
  },
  
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;