//Import necessary dependencies
import CardImage from "./CardImage";
import CardBody from "./CardBody";

//define a card component
const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage img={props.img} />
      <CardBody title={props.title} text={props.text} url={props.url} />
    </div>
  );
};

export default Card;
