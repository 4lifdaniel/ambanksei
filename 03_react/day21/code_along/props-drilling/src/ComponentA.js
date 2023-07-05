import ComponentB from "./ComponentB";
const ComponentA = ({ user }) => {
  return (
    <div>
      <h1>Component A</h1>
      <ComponentB user={user} />
    </div>
  );
};

export default ComponentA;
