const express = require("express");

const app = express();

const port = 3000;

const fruits = [
  { name: "apple", color: "red", readyToEat: true },
  { name: "banana", color: "yellow", readyToEat: true },
  { name: "cempedak", color: "yellow", readyToEat: true },
  { name: "durian", color: "yellow", readyToEat: true },
  { name: "Edamame", color: "green", readyToEat: true },
  { name: "Fig", color: "white", readyToEat: false },
  { name: "Grapes", color: "purple", readyToEat: false },
];

app.get("/", (req, res) => {
  res.redirect("/fruits");
});

//To return all the fruits
app.get("/fruits", (req, res) => {
  res.send(fruits);
});

//To retrieve individual fruit details
app.get("/fruits/:index", (req, res) => {
  res.send(fruits[req.params.index]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
