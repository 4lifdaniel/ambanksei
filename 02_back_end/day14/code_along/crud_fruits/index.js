const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
require("dotenv").config();

//Import the fruits model
const fruits = require("./models/fruitSchema");

//Retrieve all the env variables from .env and default port to 3000
const port = process.env.PORT || 3000;
const dbUser = process.env.MONGO_DB_USER;
const dbPass = process.env.MONGO_DB_PASS;
const hostName = process.env.MONGO_DB_HOST;
const dbName = process.env.MONGO_DB_NAME;

//Generate mongo connection URI by reading parameters from dot env
const mongoURI = `mongodb+srv://${dbUser}:${dbPass}@${hostName}/${dbName}`;

//Override post methods containing '_method' in req.query
app.use(methodOverride("_method"));

//Establish connection with mongodb
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection Established");
  })
  .catch((error) => {
    console.error(error);
  });

//Decode post data
app.use(express.urlencoded({ extended: true }));

//Route path
app.get("/", (req, res) => {
  res.redirect("/fruits");
});

//To display all the fruits by rendering index.ejs
app.get("/fruits", (req, res) => {
  fruits.find().then((fruitDetails) => {
    res.render("index.ejs", { fruits: fruitDetails });
  });
});

//To load create new fruit form
app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

//To retrieve fruit details based on id
app.get("/fruits/:id", (req, res) => {
  fruits.findById(req.params.id).then((fruitDetails) => {
    res.render("details.ejs", { fruit: fruitDetails });
  });
});

app.post("/fruits", (req, res) => {
  //   console.log(req.body);
  if (req.body.readyToEat == "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  // console.log(req.body);
  // To post the data to Mongo DB and on success redirect to fruits index page
  fruits.create(req.body).then((success) => {
    res.redirect("/fruits");
  });
});

//To delete a fruit and redirect to fruits
app.delete("/fruits/:id", (req, res) => {
  fruits.findByIdAndRemove(req.params.id).then((success) => {
    res.redirect("/fruits");
  });
});

//To edit fruit details, render edit.ejs file
app.get("/fruits/:id/edit", (req, res) => {
  fruits.findById(req.params.id).then((foundFruit) => {
    res.render("edit.ejs", { fruit: foundFruit });
  });
});

//To update fruit details
app.put("/fruits/:id",(req, res)=>{
  //To check if checkbox is checked or not
  if(req.body.readyToEat == "on"){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.findByIdAndUpdate(req.params.id, req.body)
  .then((success)=>{
    console.log(success);
    res.redirect("/fruits")
  })


})

//To load some test data
app.get("/testing/data/seeding", (req, res) => {
  fruits
    .create([
      {
        name: "grape fruit",
        color: "pink",
        readyToEat: true,
      },
      {
        name: "grape",
        color: "purple",
        readyToEat: false,
      },
      {
        name: "Pear",
        color: "green",
        readyToEat: false,
      },
    ])
    .then((SeededFruits) => {
      console.log(SeededFruits);
      res.redirect("/fruits");
    });
});

//Start our app on the mentioned port number
app.listen(port, () => {
  console.log("Listening on port: " + port);
});
