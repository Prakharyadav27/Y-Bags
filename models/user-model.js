const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/YBAGS");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
  },
  orders: {
    type: Array,
    default: [],
  },
  contact: {
    type: Number,
  },
  picture: {
    type: String,
  },
});

module.exprts = mongoose.model("User", userSchema);
