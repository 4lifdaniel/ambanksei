const express = require("express");

const bcrypt = require("bcrypt");

const router = express.Router();

//Import the model to connect with mongodb
const accounts = require("../models/account");

router.get("/", (req, res) => {
  res.render("signup.ejs");
});

//Update the details to MongoDB
router.post("/", (req, res) => {
  //Encrypt user entered password using bcrypt
  const randomIterSalt = Math.floor(Math.random() * 6) + 1;

  //Before bcrypt encryption
  //   console.log(req.body.password);

  //Implement bcrypt encryption
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(randomIterSalt)
  );

  //After bcrypt encryption
  //   console.log(req.body.password);

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
