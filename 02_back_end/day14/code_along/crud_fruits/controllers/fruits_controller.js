const express = require("express");
const router = express.Router();

//Import the fruits model
const fruits = require("../models/fruitSchema");

//To display all the fruits by rendering index.ejs
router.get("/", (req, res) => {
  fruits.find().then((fruitDetails) => {
    res.render("index.ejs", { fruits: fruitDetails });
  });
});

//To load create new fruit form
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

//To retrieve fruit details based on id
router.get("/:id", (req, res) => {
  fruits.findById(req.params.id).then((fruitDetails) => {
    res.render("details.ejs", { fruit: fruitDetails });
  });
});

//To post new fruit
router.post("/", (req, res) => {
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
router.delete("/:id", (req, res) => {
  fruits.findByIdAndRemove(req.params.id).then((success) => {
    res.redirect("/fruits");
  });
});

//To edit fruit details, render edit.ejs file
router.get("/:id/edit", (req, res) => {
  fruits.findById(req.params.id).then((foundFruit) => {
    res.render("edit.ejs", { fruit: foundFruit });
  });
});

//To update fruit details
router.put("/:id", (req, res) => {
  //To check if checkbox is checked or not
  if (req.body.readyToEat == "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.findByIdAndUpdate(req.params.id, req.body).then((success) => {
    console.log(success);
    res.redirect("/fruits");
  });
});

//To load some test data
router.get("/testing/data/seeding", (req, res) => {
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

//To export all routes to make it available in the file where it is imported
module.exports = router;
