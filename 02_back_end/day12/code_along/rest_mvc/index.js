const express = require("express");
const methodOverride = require("method-override");
const app = express();

const port = 3000;

const fruits = require("./models/fruits");
// console.log(fruits);

//To decode post data
app.use(express.urlencoded({ extended: false }));

//To override method to PUT or DELETE
app.use(methodOverride("_method"));

//To specify my static files
app.use(express.static("public"));

//http://localhost:3000/fruits?user=authenticated
// app.use((req, res, next) => {
//   // console.log("This will be called for every path");
//   // if (req.query.user === "authenticated") {
//   //   next();
//   // } else {
//   //   res.send("You are not authorized");
//   // }
// });

app.get("/", (req, res) => {
  res.redirect("/fruits");
});

//To return all the fruits
app.get("/fruits", (req, res) => {
  // res.send(fruits);
  res.render("index.ejs", {
    fruitsData: fruits,
  });
});

//To launch new fruit form
app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

//To retrieve individual fruit details
app.get("/fruits/:index", (req, res) => {
  // console.log(req);
  //   res.send(fruits[req.params.index]);
  res.render("show.ejs", {
    fruitDetails: fruits[req.params.index],
  });
});

app.post("/fruits", (req, res) => {
  console.log(req.body);
  // res.send(req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  //To add new fruit to exisiting array of objects
  fruits.push(req.body);
  res.redirect("/fruits");
});

//To delete a fruit from fruits array
app.delete("/fruits/:index", (req, res) => {
  fruits.splice(req.params.index, 1);
  res.redirect("/fruits");
});

//To show the edit page
app.get("/fruits/:index/edit", (req, res) => {
  res.render("edit.ejs", {
    fruit: fruits[req.params.index],
    index: req.params.index,
  });
});

//To update a fruit from fruits array
app.put("/fruits/:index", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits[req.params.index] = req.body;
  res.redirect("/fruits");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
