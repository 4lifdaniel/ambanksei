// const fun1 = () =>{
//     console.log('hello');
// }

// const fun2= () =>{
//     console.log("oh hai");
//     fun1();
// }

// fun2();

const fun1 = () =>{
    console.log('1');
    fun2();
    fun3();
    console.log("Finished")
}
const fun2 = () =>{
    console.log('2');
    fun4();
    fun6();
}
const fun3 = () =>{
    console.log('3');
    fun5();
}
const fun4 = () => console.log('4');

const fun5 = () => console.log('5');

const fun6 = () => console.log('6');

fun1();