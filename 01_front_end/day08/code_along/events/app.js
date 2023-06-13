//const btn = document.querySelector("#myButton"); //Using id
//const btn = document.querySelector(".newButton"); //Using class name
// # Represents id
// . Represents class name

// console.log(btn);
// btn.addEventListener("click", sample);
const addText = () => {
  document.body.innerHTML += "<b>Button has been clicked</b>";
};

const changeColor = (element) => {
  element.style.color = "red";
};

const mouseLeave = () => {
  document.querySelector("h1").style.color = "blue";
};

const pageLoad = () => {
  alert("Page Loaded");
};

const addColor = () => {
  let h1 = document.querySelector("h1");
  h1.style.color = "green";
};

const addEvent = () => {
  //   alert("Adding an event");
  const btn = document.getElementById("myButton");
  btn.addEventListener("click", addColor);
};

const removeEvent = () => {
  //   alert("Removing an event");
  const btn = document.getElementById("myButton");
  btn.removeEventListener("click", addColor);
};

function sample() {
  alert("You clicked the button");
}

document.querySelector("h1").addEventListener("mouseleave", mouseLeave);
