//Asynchronous Code
const printAsync = () => {
  console.log("This will print after 2 seconds");
};

const printFirst = () => {
  console.log("This should be printed second");
};

// console.log("Asynchronous code");
// setTimeout(printAsync, 2000); //This prints second
// printFirst(); //This prints first

//Synchronous Code

const printSync = (param) => {
  console.log("This will print after 2 seconds");
  param();
};

console.log("Synchronous code");
//setTimeout(printSync(printFirst), 2000); //Executes it immediately
//To avoid executing the function immediately we wrap it inside anonymous function
setTimeout(() => {
  printSync(printFirst);
}, 2000);

// console.log(printFirst);
// console.log(printFirst());
// console.log(() => {
//   printFirst();
// });
