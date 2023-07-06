import { useState, useEffect } from "react";
import Holidays from "./Holidays";
import NewForm from "./NewForm";
import UpdateForm from "./UpdateForm";
function App() {
  const [holidays, setHolidays] = useState([]);
  let baseURL = "http://localhost:3003";

  //Function to retrieve
  function getHolidays() {
    fetch(baseURL + "/holidays")
      .then((data) => data.json())
      .then((parsedData) => {
        setHolidays(parsedData);
      })
      .catch((error) => console.log(error));
  }

  //To add holidays
  function addHoliday(holiday) {
    const copyHolidays = [holiday, ...holidays];
    setHolidays(copyHolidays);
  }

  //To call getHolidays during component load
  useEffect(getHolidays, []);

  return (
    <div className="App">
      <h1>Holidays are Awesome!!</h1>
      {holidays && (
        <Holidays
          holidays={holidays}
          baseURL={baseURL}
          setHolidays={setHolidays}
        />
      )}
      <NewForm baseURL={baseURL} handleAddHoliday={addHoliday} />
    </div>
  );
}

export default App;
