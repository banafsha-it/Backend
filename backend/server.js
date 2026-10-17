const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const giftRoutes = require("./routes/gifts");
const authRoutes = require("./routes/auth");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/gifts", giftRoutes);
app.use("/api/auth", authRoutes);

const MONGO_URI = "mongodb://localhost:27017/GiftGenius";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

app.get("/", (req, res) => {
  res.send("GiftGenius Backend is running!");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});