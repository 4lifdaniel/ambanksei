import { useState } from "react";
import ComponentA from "./ComponentA";
import UserContext from "./UserContext";

function App() {
  const [user, setUser] = useState("Bharath");
  return (
    <UserContext.Provider value="Kumar">
      <div className="App">
        <p>{user}</p>
        <ComponentA user={user} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
