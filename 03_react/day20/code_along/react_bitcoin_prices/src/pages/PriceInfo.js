import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PriceInfo = ({ price, setPrice }) => {
  const coinDeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

  //Destructured way to retrieve currency from useParams object
  const { currency } = useParams();

  //useEffect hook to fetch Bitcoin price when component mounts
  useEffect(() => {
    const url = `${coinDeskURL}${currency}.json`;
    // https://api.coindesk.com/v1/bpi/currentprice/USD.json

    //Get informaiton from coin desk API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let newPrice = data.bpi[currency].rate;
        setPrice(newPrice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); //Empty dependency array ensures that the effect runs only once on component mount

  return (
    <div>
      <h1>Bitcoin price in {currency}</h1>
      <p>{price}</p>
    </div>
  );
};

export default PriceInfo;
