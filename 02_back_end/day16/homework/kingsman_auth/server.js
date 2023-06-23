// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const port = 3000;


// MIDDLEWARE
// body parser middleware
app.use(express.urlencoded({ extended: false }));

// static files middleware
app.use(express.static('public'))

require("dotenv").config();

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



// CONTROLLERS
// fitting room three
const roomController = require('./controllers/room.js');
app.use('/room', roomController);


// GET INDEX
app.get('/', (req, res) => {
  res.render('index.ejs', {});
});


// SEED ROUTE
// NOTE: Do NOT run this route until AFTER you have a create user route up and running, as well as encryption working!
const seed = require('./models/seed.js');
// const User = require('./models/users.js');

app.get('/seedAgents', (req, res) => {
  // encrypts the given seed passwords
  seed.forEach((user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
  // seeds the data
  User.create(seed, (err, createdUsers) => {
    // logs created users
    console.log(createdUsers);
    // redirects to index
    res.redirect('/');
  });
});


// CONNECTIONS
app.listen(port, () => {
  console.log('listening on port: ', port);
});


