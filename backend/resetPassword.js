const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

async function resetPassword() {
  try {
    await mongoose.connect("mongodb://localhost:27017/GiftGenius");

    const email = "bnshah05@gmail.com";
    const newPassword = "GiftGeniusTemp2026!";

    const user = await User.findOne({ email });

    if (!user) {
      console.log("Account not found in this database.");
      return;
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    console.log("Password reset successfully.");
    console.log("Email:", email);
    console.log("Use the temporary password set in resetPassword.js.");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

resetPassword();