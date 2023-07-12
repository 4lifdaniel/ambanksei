const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3002;

const mongoURI = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWD}@${process.env.MONGO_HOST_NAME}/${process.env.MONGO_DB_NAME}`;

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3003",
  "http://localhost:3002",
];
const corsOptions = {
  origin: whitelist,
};

app.use(cors(corsOptions));

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("The connection with MongoDB is established");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const loginController = require("./controllers/login.js");

app.use(express.json());

app.use("/login", loginController);

app.listen(port, () => {
  console.log("Authentication app listening on port: " + port);
});
