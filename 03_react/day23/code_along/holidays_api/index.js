const express = require("express");

//To load .env properties
require("dotenv").config();

const app = express();

app.use(express.json());

//Import holidays controller
const holidaysController = require("./controllers/holidayController");

//Use middleware to redirect all holidays requests to holidays controller
app.use("/holidays", holidaysController);

//Redirect root route to /holidays
app.get("/", (req, res) => {
  res.redirect("/holidays");
});

//Retrieve the port information from dotenv file
const PORT = process.env.PORT || 3001;

//Start our app on the port
app.listen(PORT, () => {
  console.log("PERN App is running on port ", PORT);
});
