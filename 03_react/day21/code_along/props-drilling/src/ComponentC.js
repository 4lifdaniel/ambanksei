import UserContext from "./UserContext";
import { useContext } from "react";

const ComponentC = ({ user }) => {
  const userName = useContext(UserContext);
  return (
    <div>
      <h1>Component C</h1>
      <p>{user}</p>
      <h2>UserName: {userName}</h2>
    </div>
  );
};

export default ComponentC;
