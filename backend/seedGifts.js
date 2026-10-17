const fs = require("fs");
const vm = require("vm");
const mongoose = require("mongoose");
const Gift = require("./models/Gift");

const appFile = "../src/App.jsx";
const source = fs.readFileSync(appFile, "utf8");

function extractArray(text, marker) {
  const start = text.indexOf(marker);

  if (start === -1) {
    throw new Error(`Could not find ${marker}`);
  }

  const arrayStart = text.indexOf("[", start);

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = arrayStart; i < text.length; i++) {
    const ch = text[i];

    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }

    if (ch === '"') inString = true;
    else if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;

      if (depth === 0) {
        return text.slice(arrayStart, i + 1);
      }
    }
  }

  throw new Error(`Could not finish ${marker}`);
}

const giftDataText = extractArray(source, "const giftData =");
const imageDataText = extractArray(source, "const GIFT_IMAGES =");

const giftData = vm.runInNewContext("(" + giftDataText + ")");
const images = vm.runInNewContext("(" + imageDataText + ")");

const gifts = [];
let id = 1;

for (const category of giftData) {
  for (const [budget, items] of Object.entries(category.budgets)) {
    for (const [name, description, gender] of items) {
      gifts.push({
        id,
        name,
        description,
        gender,
        category: category.name,
        budget,
        image: images[id - 1]
      });

      id++;
    }
  }
}

if (gifts.length !== 160) {
  throw new Error(`Expected 160 gifts, but found ${gifts.length}.`);
}

mongoose
  .connect("mongodb://localhost:27017/GiftGenius")
  .then(async () => {
    console.log("MongoDB connected");

    await Gift.deleteMany({});
    await Gift.insertMany(gifts);

    console.log(`${gifts.length} gifts imported successfully!`);

    await mongoose.disconnect();
  })
  .catch((error) => {
    console.error("Import failed:", error.message);
    process.exit(1);
  });