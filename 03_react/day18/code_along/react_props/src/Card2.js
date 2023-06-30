//Import necessary dependencies
import CardImage from "./CardImage"
import CardBody from "./CardBody"

//define a card component
const Card2 = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage/>
      <CardBody title="Santorini"/>
    </div>
  );
};

export default Card2;
