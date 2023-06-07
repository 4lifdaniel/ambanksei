
// const vehicle = ["silver",4000,2019]; //Array

// //Object
// const car = {
//     color: "silver",
//     hp: 4000,
//     year: 2019
// }

// console.log(car);

// //To get the year value
// console.log(car.year);

// //To get the color value
// console.log(car.color);


// const car = {
//     model: "Tesla",
//     model: "Toyota",
//     model: "Proton",
//     color: "Pink",
//     make:2045
// }

// console.log(car.model); //Proton

// // car.type = "Petrol";

// // //car.type = "Electric";

// // console.log(car);

// // car = {name:"Toyota", color:"Silver"}

// console.log(car.hasOwnProperty("model"));
// console.log(car.hasOwnProperty("name"));

// console.log("name" in car);
// console.log("model" in car);

const students = {
    1: "student_id",
    2: "name",
    3: "age",
}

// console.log(students);

// console.log(students[1]);

const courses = {
    "DAI Course": "Python, Excel, SQL, PowerBI, Pandas",
    "SEI Course": "Javascript, NodeJS, ExpressJS, React",
    python: "Python"
}
console.log(courses);

let courseDetailsWeWant = "DAI Course";

console.log(courses[courseDetailsWeWant]);

//console.log(courses[python]);//Returns an error

console.log(courses['python']);

delete courses.python;

console.log(courses);

