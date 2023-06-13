const myFirstPromise = new Promise((resolve, reject) => {
  const buyIceCream = true;
  if (buyIceCream) {
    setTimeout(() => {
      resolve("Promise resolved and this will run .then code"); //fulfilled
    }, 2000);
  } else {
    reject("Promise is rejected and this will run .catch code");
  }
});

myFirstPromise
  .then((successMsg) => {
    console.log("You guys will be happy");
    console.log(successMsg);
  })
  .catch((errorMsg) => {
    console.log("Not happy");
    console.log(errorMsg);
  });
