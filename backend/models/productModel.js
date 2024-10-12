const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    requireed: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
