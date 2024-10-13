const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const path = require("path");
const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/productapp", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Signup Route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({ username, email, password });
  await user.save();
  res.status(201).json({ message: "User created successfully!" });
});

//Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid email!" });

  if (password !== user.password) {
    return res.status(400).json({ message: "Invalid password!" });
  }

  res.status(200).json({ message: "User logged in successfully!" });
});

//Add Product Route
app.post("/add-product", async (req, res) => {
  const { name, category } = req.body;
  const product = new Product({ name, category });
  await product.save();
  res.status(201).json({ message: "Product added successfully!" });
});

// Get Products List Route
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Update Product Route
app.put("/update-product/:id", async (req, res) => {
  const { name, category } = req.body;
  const product = await Product.findByIdAndUpdate(req.params.id, {
    name,
    category,
  });
  if (!product) return res.status(404).json({ message: "Product not found!" });
  res.json({ message: "Product updated successfully!" });
});

app.listen(port, () => {
  console.log(`I am listening on ${port}`);
});
