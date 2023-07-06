//Import Express Package
const express = require("express");

//Import CORS package
const cors = require("cors");

//Import mongoose pacakge
const mongoose = require("mongoose");

//TO load .env properties
require("dotenv").config();

const app = express();

//Decode post data
//app.use(express.urlencoded({ extended: true }));
//If your input you are receiving in the form of JSON
app.use(express.json());

const whitelist = ["http://localhost:3000", "http://localhost:3003"];

//Create cors Option to allow urls only in whitelist
const corsOption = {
  // methods:['GET','POST','PUT','DELETE'],
  origin: whitelist,
};

//To allow every url
const corsOption1 = {
  origin: "*",
};

//Implement cors policy based on cors option
app.use(cors(corsOption));

//Create MongoURI
const mongoURI = `mongodb+srv://${process.env.mongo_user}:${process.env.mongo_pass}@${process.env.mongo_host_name}/${process.env.mongo_db_name}`;

//Establish connection with mongodb
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection established with Holidays DB");
  })
  .catch((error) => {
    console.log("Encountered error while connecting to Holidays DB:", error);
  });

//Import holidays controller
const holidaysController = require("./controllers/holidayController");

//Use middleware to redirect to holiday controller
app.use("/holidays", holidaysController);

//Redirect root to holidays
app.get("/", (req, res) => {
  res.redirect("/holidays");
});

//Retrive PORT information from dotenv file
const PORT = process.env.PORT || 3001;

//Start application on port
app.listen(PORT, () => {
  console.log(
    "Finally MongooseExpressNode application running on PORT: " + PORT
  );
});
