import Counter from "./Counter";
import "./styles.css";
import { useState } from "react";

function App() {
  //Add state for show and hide
  const [show, setShow] = useState(false);

  const handleClick = () => {
    // alert("Toggle Button Clicked");
    // console.log(show);
    // console.log("Negate of Show: ", !show);
    setShow(!show);
  };

  // let expression1 = false;
  // let expression2 = false;

  // if (expression1 && expression2) {
  //   console.log("dosomething");
  // }

  return (
    <div className="App">
      <main>
        {show ? <p>Now you can see it</p> : null}
        <button onClick={handleClick}>Toggle State</button>
      </main>
    </div>
  );
}

export default App;
