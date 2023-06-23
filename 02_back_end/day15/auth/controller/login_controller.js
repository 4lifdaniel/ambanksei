const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

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
      //To compare user entered password with encrypted password in database
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        //if (req.body.password === foundUser.password) {
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

router.get("/", (req, res) => {
  // finds all users
  User.find({}).then((foundUsers) => {
    // renders the room page
    res.render("room/index.ejs", {
      // passes the found users to the room page
      users: foundUsers,
    });
  });
});

//To share secret page
router.get("/secret", (req, res) => {
  //Validate if there is currentUser details in session
  if (req.session.currentUser) {
    res.send("Secret message loading....");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
