const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/loginModel");

//Route to create user
router.post("/signup", (req, res) => {
  const rndSaltSync = Math.floor(Math.random() * 6) + 1;
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(rndSaltSync)
  );
  // console.log("Reached user post");
  User.create(req.body)
    .then((success) => {
      //console.log(success);
      res.status(200).json(success);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

//Route to validate user credentials
router.post("/signin", (req, res) => {
  User.findOne({ username: req.body.username }).then((foundUser) => {
    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      //console.log(foundUser);
      res.status(200).json(foundUser.fullName);
    } else {
      res.status(500).json({ errorMessage: "User Name/ Password is wrong" });
    }
  });
});

module.exports = router;
