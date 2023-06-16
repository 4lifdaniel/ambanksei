const express = require("express");
const app = express();

const port = 3000;

const fruits = require("./models/fruits");
// console.log(fruits);

app.get("/", (req, res) => {
  res.redirect("/fruits");
});

//To return all the fruits
app.get("/fruits", (req, res) => {
  res.send(fruits);
});

//To retrieve individual fruit details
app.get("/fruits/:index", (req, res) => {
  //   res.send(fruits[req.params.index]);
  res.render("show.ejs", {
    fruitDetails: fruits[req.params.index]
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
