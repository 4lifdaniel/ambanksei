const express = require("express");

const session = require("express-session");

const app = express();

const port = 3000;

//Create cookie session expiry variable
const sessionExpiry = 24 * 60 * 60 * 1000; //one day

//Setup a session
app.use(
  session({
    secret: "anyrandomthingorastringthatyouwanttomakeitaskey",
    resave: false,
    cookie: { maxAge: sessionExpiry },
    saveUninitialized: false,
  })
);

//To set some value in session
app.get("/", (req, res) => {
  req.session.anyProperty = "any value";
  res.send("Received your request");
});

//To retrieve the value from session
app.get("/retrieve", (req, res) => {
  res.send(req.session.anyProperty);
});

//To update the value in session
app.get("/update", (req, res) => {
  req.session.anyProperty = "changing any property to this value";
  res.send("updated");
});

//To destroy the value in session
app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Unable to destroy session");
    } else {
      res.send("Successfully destroyed");
    }
  });
});

app.listen(port, () => {
  console.log("Sessions app is listening on port: " + port);
});
