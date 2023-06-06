const fruits = ["apple", "banana", "cempedak","dragon fruit"];

// console.log(fruits.indexOf("cempedak"))//Returns index position if exist else return -1
// console.log(fruits.indexOf("passion fruit"))

// console.log(fruits.push('passion fruit','Edamame')); //Appends to the last and returns length

// console.log(fruits);

// console.log(fruits.pop());//Removes and returns last element in the array

// console.log(fruits)

// console.log(fruits.reverse()); //Reverse the order of elements in the array

//fruits.unshift('mango','orange'); //Appends elements to the starting of the array

// fruits.shift()  //Removes the first element in the array

// console.log(fruits);

// console.log(fruits.slice(1)); //Returns a copy of portion of an array into new array.
// console.log(fruits);

fruits.splice(1,0,'mango','orange');

// console.log(fruits);

// fruits.splice(1,2,'mango','orange');
// console.log(fruits);

// fruits.splice(1,2)
// console.log(fruits);

// fruits.splice(2);
// console.log(fruits);

// console.log(fruits.join("|")) //Returns a string by joining all elements in an array with the seperator specified

// const vegetables = ['tomato', 'carrot'];

// console.log(fruits.concat(vegetables)); //combines the two arrays

// console.log(fruits);
// console.log(fruits.sort()); //To sort in ascending order
// console.log(fruits.sort().reverse()); //To sort in descending order

// const joinedString = 'apple, banana, cempedak';
// console.log(joinedString.split(', ')); //To split string into array

const multiDArray = [
    [0,1,2],
    [3,4,5],
    [7,8,9]
];

console.log(multiDArray);
console.log(multiDArray[0]); //Returns [0,1,2]
console.log(multiDArray[0][2]);

const confectionary = [["mounds", "almond joy"],
 ["lindt truffles", "easter egg", 
 ["kitkat bar 1", "kitkat bar 2", 'kitkat bar 3', "kitkat bar 4"]]];

 //How would you access "kitkat bar3"?
 




