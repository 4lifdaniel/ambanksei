const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

require("dotenv").config();

//Creates the instance of the express
const app = express();

//Get port number from .env file
const port = process.env.PORT || 3001;

//To get mongodb details
const mongo_user = process.env.MONGO_USER;
const mongo_pass = process.env.MONGO_PASS;
const mongo_host = process.env.MONGO_HOST;
const mongo_db = process.env.MONGO_DB;

//Create Mongo URI
const mongoURI = `mongodb+srv://${mongo_user}:${mongo_pass}@${mongo_host}/${mongo_db}`;

//Establish connection with Mongo DB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Established connection with MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to mongo db", error);
  });

//Decode the POST data
app.use(express.urlencoded({ extended: false }));

//Create session object
app.use(
  session({
    secret: process.env.MY_SECRET,
    resave: false,
    cookie: { maxAge: 5 * 60 * 1000 },
    saveUninitialized: false,
  })
);

//Redirect routes starting with login to login controller
const loginController = require("./controller/login_controller");
app.use("/login", loginController);

//Redirect routes starting with signup to signup controller
const signupController = require("./controller/signup_controller");
app.use("/signup", signupController);

//Load home page
app.get("/", (req, res) => {
    //res.render("index.ejs", { fruits: fruitDetails });
  res.render("index.ejs", {currentUser: req.session.currentUser});
});

app.listen(port, () => {
  console.log(`Authentication app is listening on port: ${port}`);
});
