import { useState } from "react";

const Weather = () => {
  const APIKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  //   console.log(APIKey);

  //Create a state to store temp
  const [temp, setTemp] = useState(0);

  function fetchWeather() {
    //Fetch Weather from API

    //Generate the URL for fetch request
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Kuala%20Lumpur&units=metric&appid=${APIKey}`;

    //Create a fetch request
    fetch(url)
      .then((response) => {
        //The data is returned as a promise response, so we need to use .then on response.json()
        response.json().then((jsonData) => {
          //In the jsonData, the value we need is inside main object with key name  "temp"
          //console.log(jsonData.main.temp);
          setTemp(jsonData.main.temp);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <button onClick={fetchWeather}>Get Current Temperature</button>
      <p>Temperature: {temp}°C</p>
    </div>
  );
};

export default Weather;
