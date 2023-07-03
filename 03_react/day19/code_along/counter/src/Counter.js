//Hooks: simple javascript functions that let you "hook into" React state and
//lifecycle features of function components

import { useState } from "react";
// console.log(useState);

function Counter() {
  //   const arr = [1, 2];
  //Normal Way
  //   const firstValue = arr[0];
  //   const secondValue = arr[1];
  //Destructured way
  //   const [firstValue, secondValue] = arr;

  //Normal Way
  //   const countState = useState(0);
  //   const count = countState[0];
  //   const setCount = countState[1];
  //   console.log(countState);

  //Destructured Way
  //const [data, setData] = useState(initialState);
  const [count, setCount] = useState(0);

  // To update  the state values
  //   //Two ways to update the count value
  //   //First way
  //   setCount(count + 1);
  //   //Second Way
  //   setCount((prevStateValue) => prevStateValue + 1);

  //Callback function to be called when + button is clicked
  const handleIncrement = () => {
    // count++;
    console.log(count);
    setCount(count + 1);
  };

  //Callback function to be called when - button is clicked
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </section>
    </>
  );
}

export default Counter;
