const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();

//To use express router
const router = express.Router();

//Load dot env files
require("dotenv").config();

//Import fruits controller
const fruitsController = require("./controllers/fruits_controller");

//Retrieve all the env variables from .env and default port to 3000
const port = process.env.PORT || 3000;
const dbUser = process.env.MONGO_DB_USER;
const dbPass = process.env.MONGO_DB_PASS;
const hostName = process.env.MONGO_DB_HOST;
const dbName = process.env.MONGO_DB_NAME;

//Generate mongo connection URI by reading parameters from dot env
const mongoURI = `mongodb+srv://${dbUser}:${dbPass}@${hostName}/${dbName}`;

//Establish connection with mongodb
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection Established");
  })
  .catch((error) => {
    console.error(error);
  });

//Override post methods containing '_method' in req.query
app.use(methodOverride("_method"));

//Decode post data
app.use(express.urlencoded({ extended: true }));

//To redirect all the request containing /fruits in the path to
//fruits controller
app.use("/fruits", fruitsController);

//Route path
app.get("/", (req, res) => {
  res.redirect("/fruits");
});

//Start our app on the mentioned port number
app.listen(port, () => {
  console.log("Listening on port: " + port);
});
