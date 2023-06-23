const express = require("express");
const router = express.Router();

//Import the model details
const accounts = require("../models/account");

//Launch Login Page
router.get("/", (req, res) => {
  res.render("login.ejs");
});

//Login Validation
router.post("/", (req, res) => {
  accounts.findOne({ username: req.body.username }).then((foundUser) => {
    if (foundUser) {
      if (req.body.password === foundUser.password) {
        //Set the found user details in session with key currentUser
        req.session.currentUser = foundUser;
        res.redirect("/");
        // res.send("Login Successful");
      } else {
        res.render("login.ejs");
      }
    } else {
      res.redirect("/login");
    }
  });
});

module.exports = router;
