const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/YBAGS");

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  image: String,
  price: Number,
  discount: { type: Number, default: 0 },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
});

module.exprts = mongoose.model("Product", productSchema);
