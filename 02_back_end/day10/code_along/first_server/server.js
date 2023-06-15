const express = require("express");

// console.log(express);

let app = express();
// console.log(app);

const port = 3000;

const plants = ["Abelia", "Bonzai", "Money Plant", "Cactus", "Grass", "Barley"];

app.get("/", function (req, res) {
  res.send(
    "Thank you every one for being great student. Hopefully you remember everything you learn"
  );
});

app.get("/greeting", function (req, res) {
  console.log("Greeting path");
  res.send("You have accessed greeting path");
});

app.get("/plants/index", (req, res) => {
  res.send("You seems to be looking for plants");
});

app.get("/plants/:index", (request, response) => {
  //   console.log(request.params.index);
  response.send(plants[request.params.index]);
});

app.get("/awesome", (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://www.shutterstock.com/image-vector/collection-3d-realistic-vector-icon-260nw-1948554235.jpg">
    `);
});

app.get("/hello/:firstname/:lastname", (req, res) => {
  console.log(req.params);
  res.send(`Hello Mr/Ms.${req.params.firstname} ${req.params.lastname}`);
});

app.listen(port, () => {
  console.log("Hello Everyone i am running on port:" + port);
});
