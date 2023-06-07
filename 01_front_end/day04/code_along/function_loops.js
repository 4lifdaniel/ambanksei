// //1st way

// const myFun = () => console.log('hi');
// for(let i=0; i<=10; i++){
//     myFun();
// }

// //2nd way:
// for(let i=0; i<=10; i++){
//     const myFun = () => console.log('hi');
//     myFun();
// }

//1st way
const fun1 = () =>  console.log('hi');
const fun2 = () => console.log("oh hai!!!")

fun1();
fun2();

//2nd way
const fun21 = () => console.log('hi');
fun1();

const fun22 = () => console.log("oh hai!!!")
fun2();

//3rd way
const fun31 = () => console.log('hi');
fun1();
fun2();
const fun32 = () => console.log("oh hai!!!")


