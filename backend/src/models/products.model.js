const mongoose = require("mongoose");

//creating product schema
const productSchema = new mongoose.Schema(
  {
    imageURL: { type: String, required: true },
    brand: { type: String, required: true },
    product: { type: String, required: true },
    gender: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    strikedOffPrice: { type: Number, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//creating product model
const Product = mongoose.model("product", productSchema);

module.exports = Product;
