const adventurer = {
    name: "Bharath",
    age: 36,
    cars: ["toyota","perodua","bmw"]
}

// //console.log(adventurer.cars[1]);

// for(let i=0; i<adventurer.cars.length;i++){
//     console.log(adventurer.cars[i]);
// }

adventurer.spouse = {
    name: "lim",
    role: "pm",
}

// console.log(adventurer);

// console.log(adventurer.spouse);

// console.log(adventurer.spouse.role);

adventurer.students = {
    student1: {
        name: "Wan Suen",
        gender: "Female"
    },
    student2: {
        name: "Dhivyan",
        gender: "Male",
    },
    student3: {
        name: "Mirza(top student)",
        gender: "male"
    }
}

// console.log(adventurer.students.student3.gender);

adventurer.students.student3.course_completed = {
    degree: "IT",
    uni: "Harvard",
    year: "1999"
}
//console.log(adventurer);

// console.log(adventurer.students.student3.course_completed);

// console.log(adventurer.students.student3.course_completed.year);

const movies = [{title:"Big Shot", year: 1986},{title:"Jaws", year:2012}, {title:"Dora", year:2006},
{title:"Jurrasic Park", year:1996, duration: "210 min"}];

// console.log(movies[3].duration);

// let details = "duration";

// console.log(movies[1][details]);

// let arr = [1,2,3,4,5];
// for(let num of arr){
//     console.log(num);
// }


// for(let movie of movies){
//     console.log(movie);
// }

// for (let key in movies){
//     console.log(key);
// }

// for(let movie of movies){
//     for(let keys in movie){
//         console.log(keys);
//     }
// }

// for(let movie of movies){
//     console.log(movie);
//     for(let key in movie){
//         console.log(`Key is: ${key} and value is : ${movie[key]}`);
//     }
// }

// const foo ={
//     someArray:[1,2,3]
// }

// console.log(foo.someArray[0]);

// const foo ={
//     someObject: {
//         someKey: 'some value'
//     }
// }

// console.log(foo.someObject.someKey);


// const foo = {
//     someFunction: () =>{
//         console.log("Hello");
//     }
// }

// console.log(foo.someFunction);
// foo.someFunction();

// const foo = [{someKey: "Some value"},1,2];

// console.log(foo[0].someKey);


// const foo = [
//     ['0,0','0,1','0,2'],
//     ['1,0','1,1','1,2'],
//     ['2,0','2,1','2,2']
// ];

// console.log(foo[1][2]);

const foo = [
    1,
    "hi",
    ()=>{
        console.log('Its time to go back');
    }
]

foo[2]() 