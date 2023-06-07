// function printHello(){
//     console.log("==============");
//     console.log("Hello from function");
//     console.log("==============");
// }

// console.log(printHello())

//Lets write a function 'printSum' that will print result of 10+10

// function printSum(){
//     console.log("The sum of 10 + 10 is: "+(10+10));
// }

// printSum();

//print triangle
/*
#
##
###
####
#####
*/

// let numOfLines = 5;
// let symbol = '#';
// // for (let i=0; i<= numOfLines; i++){
// //     console.log(symbol);
// //     symbol += '#';
// // }

// function printTriangle(numOfLines, symbol){
//     for (let i=0; i< numOfLines; i++){
//         console.log(symbol);
//         symbol += symbol[0]
//     }
// }

// printTriangle(4,"£");

//Print triangle
// for(let i=1; i<numOfLines; i++){
//     let line = "";
//     for(let j=1; j<=numOfLines -i; j++){
//         line += " ";
//     }
//     //print symbols
//     for (let k =0; k<2*i-1; k++){
//         line += "#"
//     }
//     console.log(line)
// }

// //To validate phone number
// function validatePhoneNumber(number){
//     if(typeof number === 'number' && number > 999999999){
//         return true;
//     }
//     return false;
// }

// console.log(validatePhoneNumber(1234567890));

// function printGreetingMsg(name){
//     console.log("Hello Mr/Ms."+name)
// }

// const printGreetingMsg = (first_name) => console.log("Hello Mr/Ms."+first_name);


// printGreetingMsg("Break Time");

//To write a function that prints value - 1
//100 print 99
//10 print 9
// const minusOne = (num) => console.log(num -1);

// const minusOne = (num) => {
//     if(typeof num === 'number'){
//         console.log(num -1)
//     } else {
//         console.log("Not an number! Please enter number")
//     }
// }

// minusOne(100);
// minusOne(Infinity);
// minusOne('Infinity');

// const makeSentence = (word1, word2, word3) => word1 + " " + word2+" "+word3;

// console.log(makeSentence('everyone','is','sleepy'));//Output: everyone is sleepy 

// console.log(makeSentence('everyone','is','very','sleepy')); //Output: everyone is very

// console.log(makeSentence('everyone','sleepy'));//Output: everyone sleepy undefined

// console.log(makeSentence('Dhivyan'));//Output: Dhivyan undefined undefined

// function reverseString(str){
//     let reverseStr = "";
//     for(let i=str.length-1;i>=0;i--){
//         reverseStr += str[i]
//     }
//     return reverseStr;
// }

// function isPalindrome(word){
//     if(word === reverseString(word)){
//         console.log("Its a palindrome");
//     } else {
//         console.log("Not a palindrome");
//     }
// }

// isPalindrome('racecar');

// const isPalindrome = (word) => word === word.split("").reverse().join("");

// console.log(isPalindrome('racecar'));

//Ternary Operator(?:)

// condition?expression1:expression2;
// if(condition){
//     expression1;
// }else{
//     expression2;
// }

// let num = 5;
//To check if a number is even or odd

// const isEven = (num) =>{
//     if(num%2 == 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// const isEven = (num) => num%2==0?true:false;
// const isEven = (num) => num%2 == 0;

//if elseif else
// const fizzBuzz = (num) => num%3 == 0?"fizz":num%5==0?"buzz":"fizzbuzz";

// console.log(isEven(5));
// console.log(isEven(6));

const isPalindrome = (word) => 
    word.toUpperCase() === word.toUpperCase().split("").reverse().join("");

console.log(isPalindrome('Racecar'));
