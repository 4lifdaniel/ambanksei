const iceCreams = [
  "Vanilla",
  "Chocolate",
  "Cempedak",
  "Durian",
  "Mango",
  "Pistachio",
];
// for (let i = 0; i < iceCreams.length; i++) {
//   console.log(iceCreams[i]);
// }

//For each definition
// const forEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// };

// forEach(iceCreams, (currentElement) => {
//   console.log(`${currentElement} ice cream`);
// });

// iceCreams.forEach((currentElement) => {
//   console.log(`${currentElement} ice cream`);
// });

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//   console.log(num);
//   if (num === 3) {
//     return;
//   }
// });

// for (num of numbers) {
//   console.log(num);
//   if (num === 3) {
//     return;
//   }
// }

//Map
// const updatedIceCreams = iceCreams.map((flavour) => {
//   return flavour.toLowerCase();
// });
// console.log(iceCreams);

// console.log(updatedIceCreams);

//Every: Checks if all elements satisfy given condition

//Filter: Creates a new array with elements that pass given condition

//Find: Returns the first element that satisfies given condition

//Find Index: Returns the index of the first element that satisfies the given condition

//Reduce: reduces the array to a single value by applying function on each element

//Some: Check if atleast one element in the array satisifies given condition

//Sort: Sorts the elements of the array in ascending order

// const classroomItems = [
//   { name: "Marker", price: 5 },
//   { name: "Laptop", price: 5000 },
//   { name: "Phone", price: 5500 },
//   { name: "Projector", price: 3000 },
//   { name: "Dhivyan", price: 100000 },
// ];

// //Map
// const itemNames = classroomItems.map((item) => {
//   return item.name;
// });

// console.log(itemNames);

// //Every - To check if all the items in classroom are less than 1000000
// const everyItem = classroomItems.every((item) => {
//   return item.price <= 1000000;
// });

// console.log(everyItem);

// //Filter - To filter all the values that are less than 10000
// const filteredItems = classroomItems.filter((item) => {
//   return item.price <= 10000;
// });

// console.log(filteredItems);

// //Find
// const findItem = classroomItems.find((item) => {
//   return item.name === "Dhivyan";
// });

// console.log(findItem);

// //Find Index
// const findItemIndex = classroomItems.findIndex((item) => {
//   return item.name === "Dhivyan";
// });

// console.log(findItemIndex);

// //Reduce
// const totalItemPrice = classroomItems.reduce((totalItemPrice, item) => {
//   return item.price + totalItemPrice;
// }, 0);

// console.log(totalItemPrice);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue, index, array) => {
  console.log(`Accumulator Value: ${accumulator}`);
  console.log(`Current Value: ${currentValue}`);
  console.log(`Index Value: ${index}`);
  console.log(`array : ${array}`);
  return accumulator + currentValue;
}, 0);

console.log(sum);
