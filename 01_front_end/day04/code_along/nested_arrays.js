// const foo = {
//   someArray: [1, 2, 3],
// };

// // for (element of foo.someArray) {
// //   console.log(element);
// // }

// console.log(foo.someArray);

// console.log(Array.isArray(foo.someArray));

// for (let i = 0; i < foo.someArray.length; i++) {
//   console.log(foo.someArray[i]);
// }

// const foo = [
//   ["0,0", "0,1", "0,2"],
//   ["1,0", "1,1", "1,2"],
//   ["2,0", "2,1", "2,2"],
// ];

// for (let i = 0; i < foo.length; i++) {
//   console.log(foo[i]);
//   for (let j = 0; j < foo[i].length; j++) {
//     console.log(foo[i][j]);
//   }
// }

// for (let row of foo) {
//   console.log(row);
//   for (let element of row) {
//     console.log(element);
//   }
// }

// const foo = () => {
//   return {
//     someKey: "Some Value",
//   };
// };

// const bar = () => {
//   const obj = { someKey: "Some Value" };
//   //   if (true){
//   //     funa(obj);
//   //   }else{
//   //     funb(obj)
//   //   }
//   return obj;
// };

// console.log(foo());

// const foo = () => {
//   return ["apple", "banana", "cherry"];
// };

// console.log(foo()[0]);

// const foo = () => {
//   return {
//     someArray: ["its", "fun", "isit?"],
//   };
// };

// console.log(foo().someArray[1]);

// const foo = () => {
//   return {
//     someObj: {
//       anotherObj: {
//         someKey: "Some Value",
//       },
//     },
//   };
// };

// console.log(foo().someObj.anotherObj.someKey);

// const foo = () => {
//   return {
//     someFunc: () => {
//       console.log("Hello From function inside an object");
//     },
//   };
// };

// console.log(foo().someFunc());

// const foo = () => {
//   return () => {
//     console.log("Every one still good?");
//   };
// };
// foo()();

// const foo = () => {
//   return {
//     someFunc: () => {
//       return {
//         someKey: "Some Value",
//       };
//     },
//   };
// };
// console.log(foo().someFunc().someKey);

// const foo = {
//   someFunc: () => {
//     return {
//       someObj: {
//         someKey: "Some Value",
//       },
//     };
//   },
// };

// console.log(foo.someFunc().someObj.someKey);

const foo = {
  someFunc: () => {
    return {
      someFunc: () => {
        console.log("both methods have same name");
      },
    };
  },
};

foo.someFunc().someFunc();

// const foo = {
//   someFunc: () => {
//     return () => {
//       console.log("Dhivyan Suggested this");
//     };
//   },
// };
// foo.someFunc()();

// const foo = [
//   1,
//   2,
//   "apple",
//   () => {
//     return {
//       someKey: "Some boring value",
//     };
//   },
// ];
// console.log(foo[3]().someKey);

// const foo = [
//   1,
//   2,
//   "apple",
//   () => {
//     return {
//       someKey: ["a", "b", "c"],
//     };
//   },
// ];

// console.log(foo[3]().someKey[2]);

// const foo = [
//   1,
//   2,
//   "apple",
//   () => {
//     return () => {
//       console.log("Done with this");
//     };
//   },
// ];

// foo[3]()();
