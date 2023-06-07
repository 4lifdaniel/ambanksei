let apples;
let money;

const start = () =>{
    apples = 0;
    money = 20;
    askForAction();
}

const showStatus = () =>  alert(`You have ${apples} apples and RM ${money}`);

const askForAction = () =>{
    showStatus();
    const choice = prompt('What do you want to do?',"buy apple/ eat apple/ restart");
    if(choice === 'buy apple'){
        buyApple();
    } else if (choice === 'eat apple'){
        eatApple();
    } else if (choice === 'restart'){
        start();
    }
}

const buyApple = () =>{
    apples++;
    money -= 1;
    askForAction();
}

const eatApple = () =>{
    apples--;
    askForAction();
}

start();