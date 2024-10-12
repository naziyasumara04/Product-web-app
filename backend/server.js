const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const User = require("./models/userModel");
const path = require("path");
const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/productapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("I am rooooooooot");
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: "User created successfully!" });
});

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

app.listen(port, () => {
  console.log(`I am listening on ${port}`);
});
