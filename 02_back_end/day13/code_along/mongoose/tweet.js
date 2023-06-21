const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    title: { type: String, required: true },
    author: String,
    body: String,
    likes: { type: Number, default: 0 },
    sponsored: { type: Boolean, default: false },
  },
  { timestamps: true }
);
//Schema: Defines the structure and rules of the data.
//Model: Provides an interface to interact with the data based
//on defined schema.

//Make this exportable so that it can be accessed in index.js
module.exports = mongoose.model("Tweet", tweetSchema);
