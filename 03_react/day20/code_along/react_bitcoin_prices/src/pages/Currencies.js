import listOfCurrencies from "./list.json";
import { Link } from "react-router-dom";

const Currencies = () => {
  let list = listOfCurrencies.map((item, index) => {
    return (
      <div Key={index}>
        <p>
          <Link to={"/price/" + item.currency}>{item.country}</Link>
        </p>
      </div>
    );
  });
  return <div>{list}</div>;
};

export default Currencies;
