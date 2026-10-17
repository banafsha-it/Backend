const mongoose = require("mongoose");

const giftSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  gender: String,
  category: String,
  budget: String,
  image: String
});

module.exports = mongoose.model("Gift", giftSchema);