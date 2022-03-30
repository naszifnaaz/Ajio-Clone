const express = require("express");
const router = express.Router();

const Product = require("../models/products.model");

//Get all products route
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Get all men products route
router.get("/men", async (req, res) => {
  try {
    const products = await Product.find({ gender: "male" }).lean().exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Get all women products route
router.get("/women", async (req, res) => {
  try {
    const products = await Product.find({ gender: "female" }).lean().exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Get all kids products route
router.get("/kids", async (req, res) => {
  try {
    const products = await Product.find({ category: "kids" }).lean().exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Get all boys products route
router.get("/boy", async (req, res) => {
  try {
    const products = await Product.find({ gender: "boy" }).lean().exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Get all girls products route
router.get("/girl", async (req, res) => {
  try {
    const products = await Product.find({ gender: "girl" }).lean().exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Query URL for filters
router.get("/filter", async (req, res) => {
  try {
    let query = req.query.items;
    let filterItems = query.replace(/\[|\]/g, "").split(",");
    let products = await Product.find({ category: { $in: filterItems } });
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
