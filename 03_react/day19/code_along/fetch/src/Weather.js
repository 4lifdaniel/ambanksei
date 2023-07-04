import { useState, useEffect } from "react";

const Weather = () => {
  const APIKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  //   console.log(APIKey);

  //Create a state to store temp
  const [temp, setTemp] = useState(0);
  //Create a state to store location details
  const [location, setLocation] = useState("Kuala Lumpur");
  //Create state to store message
  const [message, setMessage] = useState("");

  //Will execute fetchWeather on initial load
  // useEffect(fetchWeather, []);

  //Will execute fetchWeather everytime location updates
  useEffect(fetchWeather, [location]);

  // console.log(useState("Malcolm"));

  function handleLocation() {
    setLocation(document.getElementById("Location").value);
  }

  function fetchWeather() {
    //Fetch Weather from API

    //Generate the URL for fetch request
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIKey}`;

    //Create a fetch request
    fetch(url)
      .then((response) => {
        //The data is returned as a promise response, so we need to use .then on response.json()
        const responseValue = response.json();
        // console.log(responseValue);
        responseValue.then((jsonData) => {
          //In the jsonData, the value we need is inside main object with key name  "temp"
          //console.log(jsonData.main.temp);
          if (jsonData.message) {
            setMessage(jsonData.message);
          } else {
            setMessage("");
            setTemp(jsonData.main.temp);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <select id="Location" onChange={handleLocation}>
        <option value="Bangi">Bangi</option>
        <option value="Kuala Lumpur">Kuala Lumpur</option>
        <option value="Singapore">Singapore</option>
        <option value="Jakarta">Jakarta</option>
        <option value="Bali">Bali</option>
      </select>
      <p>Location: {location}</p>
      <p>Temperature: {temp}°C</p>
      {/* <input type="text" id="Location" onChange={handleLocation} required /> */}
      {/* <button onClick={fetchWeather}>Get Current Temperature</button>
      <p>
        {message ? message : `Location: ${location} and Temperature: ${temp}°C`}
      </p> */}
    </div>
  );
};

export default Weather;
