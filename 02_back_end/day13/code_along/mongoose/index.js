const mongoose = require("mongoose");
require("dotenv").config();

//Create the mongoURI
const mongoURI = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_pass}@${process.env.mongodb_host}/${process.env.mongo_db_name}`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection established with mongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to Mongo DB");
    console.log(error);
  });

setTimeout(() => {
  mongoose.disconnect();
}, 5000);
