const express = require("express");

const router = express.Router();

//Import the model to connect with mongodb
const accounts = require("../models/account");

router.get("/", (req, res) => {
  res.render("signup.ejs");
});

//Update the details to MongoDB
router.post("/", (req, res) => {
  //res.send("Recevied your request");
  accounts
    .create(req.body)
    .then((success) => {
      console.log(success);
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
