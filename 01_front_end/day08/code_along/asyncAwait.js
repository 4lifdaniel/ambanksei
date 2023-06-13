async function asyncSample() {
  const promise = new Promise((resolve, reject) => {
    const buyIceCream = true;
    if (buyIceCream) {
      setTimeout(() => resolve("done"), 1000);
    } else {
      setTimeout(() => reject("error"), 1000);
    }
  });

  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

asyncSample();
