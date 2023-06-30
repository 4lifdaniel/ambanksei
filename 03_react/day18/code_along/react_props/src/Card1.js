//Import necessary dependencies
import React from "react";

//define a card component
const Card1 = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://img.traveltriangle.com/blog/wp-content/uploads/2015/09/Floating-mosque-in-Melaka-e1567346826958.jpg"
        alt="..."
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Card1</h5>
        <p className="card-text">
          Some quick example to display components in react
        </p>
        <a href="#" className="btn btn-primary">
          Go Somewhere
        </a>
      </div>
    </div>
  );
};

export default Card1;
