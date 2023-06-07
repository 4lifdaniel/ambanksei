// const exampleFunction = () =>{
//     const num = 100; //local scope
//     console.log(num * num);
// }
// exampleFunction();

// console.log(num);

// const num = 100; //global scope
// const exampleFunction = () =>{
//     console.log(num * num);
// }
// exampleFunction();
// console.log(num);

// const setItem = () =>{
//     const item = 'Nasi Lemak';
//     return item;
// }

// const getItem = () =>{
//     //return item;
//     return setItem();
// }

// console.log(getItem());

// {
//     var item = 'Biriyani';
// }

// console.log(item);

// for(var i=0; i<10; i++){
//     console.log("Inside Block: "+i);
// }

// console.log(i);

// const word1 = "Everyone...";
// {
//     const word2 = "Please ";
//     const word3 = "Wakeup";
//     {
//         console.log(word1+word2+word3)
//     }
// }

//syntax
// const func = () =>{
//     return func();
// }

// const countdown = (num) =>{
//     if (num != 0){
//         console.log(num)
//         countdown(num -1);
//     }
// }

// countdown(5);

// const factorial = (num) => (num == 1 || num == 0)? num: num * factorial(num -1);
// console.log(factorial(5))

// function calculateFactorial(num){
//     if(num == 1 || num ==0){
//         return num;
//     } else {
//         return num * factorial(num -1);
//     }
// }

// console.log(calculateFactorial(5));

let myName = "Bharath";

function greet(){
console.log("Hello "+myName);
}
function newName(){
    myName = "Kumar";
}
newName();
// greet();
console.log(myName);