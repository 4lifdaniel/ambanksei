const mongoose = require("mongoose");

const holidaySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    celebrated: { type: Boolean, default: false },
    description: { type: String, default: "Holidays are awesome" },
    likes: { type: Number, default: 0 },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Holiday", holidaySchema);
