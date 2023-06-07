// console.log('Hello from console');
// //To prompt user with question "Are you good so far?" and "good" is the default answer
// // The response provided by user will be stored in "yourAnswer"
// const yourAnswer = prompt('Are you good so far?','good');
// alert(yourAnswer);

// const yourAnswer = prompt("Do you like apples?", "yes/no");

// if(yourAnswer.toLowerCase() === 'yes'){
//     alert("Excellent, me too")
// } else if(yourAnswer.toLowerCase() === 'no'){
//     alert("What?!?? How can anyone don't like apples");
// } else {
//     alert('Not a valid option');
// }

function hungry(){
    alert('Me too');
}

function notHungry(){
    alert('Seems you are super human');
}

const yourAnswer = prompt("Are you hungry?", "yes/no");

if(yourAnswer.toLowerCase() === 'yes'){
    hungry();
} else if(yourAnswer.toLowerCase() === 'no'){
    notHungry();
} else {
    alert('I dunno what you want');
}