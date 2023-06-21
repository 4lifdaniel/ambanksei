const mongoose = require("mongoose");

//Schema for my fruits
const fruitSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean,
  },
  { timestamps: true }
);

//Wrap fruit shchema in model and export it, to make it accessible in other files
module.exports = mongoose.model("Fruit", fruitSchema);
