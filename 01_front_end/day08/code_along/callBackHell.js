// const printHello = () => {
//   console.log("This will print after a delay of 2 seconds");
//   setTimeout(() => {
//     callBack1();
//     setTimeout(() => {
//       callBack2();
//       setTimeout(callBack3, 1000);
//     }, 2000);
//   }, 2000);
// };

//Better way of handling callbacks

const printHello = (param) => {
  console.log("This will print after a delay of 2 seconds");
  param();
};

const callBack1 = () => {
  console.log("This is callback 1");
  setTimeout(callBack2, 2000);
};

const callBack2 = () => {
  console.log("This is callback 2");
  setTimeout(callBack3, 1000);
};

const callBack3 = () => {
  console.log("This is callback 3");
};

setTimeout(() => {
  printHello(callBack1);
}, 2000);
