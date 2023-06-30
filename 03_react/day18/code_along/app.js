// const arr = ["Charles Xavier", "James Logan", "Jean grey"];
// arr.push("Scott Summers");

// console.log(arr);

// const mutant = { name: "Rogue", alterEgo: "Jean Grey" };
// mutant.alterEgo = "Anne Marie";

// console.log(mutant);

// const beforeMutation = { name: "rogue", alterEgo: "Jean Grey" };

// const afterMutation = beforeMutation;

// console.log("Before update: ",afterMutation, beforeMutation)

// afterMutation.alterEgo = "Anne Marie";

// console.log("After update: ",afterMutation, beforeMutation)

// console.log(beforeMutation === afterMutation);
// console.log(beforeMutation.alterEgo === afterMutation.alterEgo);

// console.log(beforeMutation);

//Working Immutably
// const arr = ["Charles Xavier", "James Logan", "Jean Grey"];
// const newArr = arr.concat("Scott Summers");

// console.log(arr.push("Scott Summers"));

// const newArr = [...arr];

// newArr.push("Scott Summers");

// console.log(arr === newArr);

// let x = 5;
// let y = 6;

// console.log(Math.max(x, y));

// let arr = [10, 9, 4, 15, 6];

// console.log(...arr)

// console.log(Math.max(...arr));

// const beforeMutation = { name: "rogue", alterEgo: "Jean Grey" };

// console.log({ ...beforeMutation });
// const afterMutation = { ...beforeMutation };

// console.log("Before update: ", afterMutation, beforeMutation);

// afterMutation.alterEgo = "Anne Marie";

// console.log("After update: ", afterMutation, beforeMutation);

// console.log(beforeMutation === afterMutation);
// console.log(beforeMutation.alterEgo === afterMutation.alterEgo);

//Mutable operations modify the original array directly
//Immutable operation modify without modifying the original array

// let mutableArray = [1, 2, 3, 4, 5];
// let immutableArray = [1, 2, 3, 4, 5];

// console.log("Original Mutable Array: ", mutableArray);
// console.log("Original Immutable Array: ", immutableArray);

// //Mutable: Removes elements at index 2
// mutableArray.splice(2, 1);

// //Immutable: Remove element at index 2
// let removedElementArray = immutableArray
//   .slice(0, 2)
//   .concat(immutableArray.slice(3));

// console.log("Mutable way: ", mutableArray);
// console.log("Immutbale way: ", removedElementArray);

//Mutable: Add element 6 to the end
// mutableArray.push(6);

// //Immutable: Add element 6 to the end
// let addElementArray = immutableArray.concat(6);

// console.log("Mutable way: ", mutableArray);
// console.log("Immutbale way: ", addElementArray);

// //Mutable: remove element from the end
// mutableArray.pop();

// //Immutable: remove element from the end
// let removedLastElementArray = immutableArray.slice(0, -1);

// console.log("Mutable way: ", mutableArray);
// console.log("Immutbale way: ", removedLastElementArray);

// //Mutable: removes the first element
// mutableArray.shift();

// //Immutable: remove the first element
// let removeFirstElement = immutableArray.slice(1);

// console.log("Mutable way: ", mutableArray);
// console.log("Immutable way: ", removeFirstElement);

// //Mutable: Add element to the start of the array
// mutableArray.unshift(0)

// //Immutable: Add element to the start of the array
// let addFirstElement = [0,...immutableArray];

// console.log("Mutable way: ", mutableArray);
// console.log("Immutable way: ", addFirstElement);

// //Mutable: sort the array
// mutableArray.sort();

// //Immutable: Sort the array
// let sortedArray = immutableArray.slice(0).sort();

// console.log("Mutable way: ", mutableArray);
// console.log("Immutable way: ", sortedArray);

// //Mutable: reverse an array
// mutableArray.reverse();

// //Immutable: reverse the array
// let reverseArray = immutableArray.slice(0).reverse();

// console.log("Mutable way: ", mutableArray);
// console.log("Immutable way: ", reverseArray);

//Map, Filter and Reduce
// const numbers = [1, 2, 3, 4, 5];

//Double the numbers
// const doubleNumbers = numbers.map((num) => {
//   return num * 2;
// });
// const doubleNumbers = numbers.map((num) => num * 2);

// console.log(numbers);
// console.log(doubleNumbers);

// const abc = (num) => {
//   return num * 2;
// };

// console.log(abc(1));

//Filter
// const evenNumbers = numbers.filter((num)=>{return num %2 === 0});

// console.log(evenNumbers)

//reduce
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// console.log(numbers);

// //Destructuring in Arrays
// const numbers = [1, 2, 3, 4];

// const firstNumber = numbers[0];
// const secondNumber = numbers[1];
// const thirdNumber = numbers[2];

// //Destructuring the array values same as above one
// const [firstNumber, secondNumber , thirdNumber] = numbers;

// console.log(firstNumber, secondNumber, thirdNumber);

//Destructuring of objects
// const person = {
//   name: "John",
//   age: 5,
//   country: "Malaysia",
// };

// const { name } = person;

// const name = person.name;

// // console.log(name);

// function calculate(a, b) {
//   const add = a + b;
//   const sub = a - b;
//   const mul = a * b;
//   const div = a / b;
//   return [add, sub, mul, div];
// }

// const [add, sub, multiply, division] = calculate(4, 7);

// console.log(add);
// console.log(sub);
// console.log(multiply);
// console.log( division);

// const person = {
//   name: "john",
//   age: 5,
//   cars: ["toyota", "tesla", "myvi", "byd"],
// };

// const { cars } = person;

// console.log(cars);

// const [,, secondCar] = cars;

// console.log(secondCar)

const num = 10;
// let result = "";
// if (num > 0) {
//   result = "positive";
// } else {
//   result = "negative";
// }

//Ternary operator expression?<if true>:<if false>;
let result = num > 0 ? "positive" : "negative";

console.log(result);
