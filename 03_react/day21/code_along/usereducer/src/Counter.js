import { useReducer } from "react";

const Counter = () => {
  //const [count, setCount] = useState(0);
  // const [state, function_to_update_state]=useState("")

  //const [count, dispatch] = useReducer(callback_fn, initial_state);
  const [count, dispatch] = useReducer(counterReducer, 0);

  //Behind what actually is happening when you call dispatch
  // dispatch(action){

  //   updateState = counterReducer(current_count_state, action)
  // count value in state will be updated with what updateState has returned.
  //   count = updateState;
  // }

  function counterReducer(count, action) {
    //Usual way using if elseif
    // if (action === "INCREMENT") {
    //   return count + 1;
    // } else if (action === "DECREMENT") {
    //   return count - 1;
    // } else if (action === "RESET") {
    //   return 0;
    // } else {
    //   return count;
    // }

    switch (action) {
      case "INCREMENT":
        return count + 1;
      case "DECREMENT":
        return count - 1;
      case "RESET":
        return 0;
      default:
        return count;
    }
  }

  // const handleIncrement = () => setCount(count + 1);
  // const handleDecrement = () => setCount(count - 1);
  // const handleReset = () => setCount(0);

  return (
    <section>
      <h2>Count:{count}</h2>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </section>
  );
};
export default Counter;
