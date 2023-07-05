import ComponentC from "./ComponentC";
const ComponentB = ({ user }) => {
  return (
    <div>
      <h1>Component B</h1>
      <ComponentC user={user} />
    </div>
  );
};

export default ComponentB;
