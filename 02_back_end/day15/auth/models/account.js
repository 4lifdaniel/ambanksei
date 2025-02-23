const mongoose = require("mongoose");
const schema = mongoose.Schema;

const accountSchema = new schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Accounts", accountSchema);
