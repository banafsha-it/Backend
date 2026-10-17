const express = require("express");
const Gift = require("../models/Gift");

const router = express.Router();

// Get gifts with optional filters
router.get("/", async (req, res) => {
  try {
    const { category, gender, budget } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (gender && gender !== "Everyone") {
      filter.$or = [
        { gender: gender },
        { gender: "Unisex" }
      ];
    }

    if (budget) {
      filter.budget = budget;
    }

    const gifts = await Gift.find(filter);

    res.json(gifts);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch gifts",
      error: error.message
    });
  }
});

module.exports = router;