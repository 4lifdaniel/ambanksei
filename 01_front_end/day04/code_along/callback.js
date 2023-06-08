// const henchman = (name) => {
//   console.log(`${name} is the henchman`);
// };

// console.log(henchman);

// function mobboss(employee) {
//   console.log("Dhivyan is the boss");
//   employee();
// }

// mobboss(henchman);

// function printVal(a) {
//   console.log(a+10);
// }

// printVal(10);

// const mobboss = (employee) => {
//   console.log("Dhivyan is the boss");
//   console.log(employee);
//   employee();
// };

// const henchman2 = (name) => {
//   console.log(`${name} is the henchman`);
// };

// mobboss(henchman);
// mobboss(() => {
//   henchman2("Bharath");
// });

// mobboss(henchman2("bharath"));

// mobboss(() => {
//   console.log("Harith is from Singapore");
// });

// setTimeout(() => {
//   console.log("Hi Wan Suen");
// }, 2000);

// function greet() {
//   console.log("Please wakeup!!!!!!!!!!!!!!!!!!!!!!!!");
// }

// const intervalID = setInterval(greet, 2000);
// console.log(intervalID);

// setTimeout(() => {
//   clearInterval(intervalID);
// }, 10000);

function multiply1(num1, num2) {
  return num1 * num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
};

const multiply2 = function (num1, num2) {
  return num1 * num2;
};

// setTimeout(function () {
//   console.log("Wakeup please Wan Suen");
// }, 2000);

console.log(multiply(2,2));
console.log(multiply1(2,2));
console.log(multiply2(2,2));