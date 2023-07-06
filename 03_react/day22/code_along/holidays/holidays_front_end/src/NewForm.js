import { useState } from "react";

function NewForm({ baseURL, handleAddHoliday }) {
  //To store the name details in state
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    //Prevent the default event i.e form submission
    event.preventDefault();
    fetch(baseURL + "/holidays", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setName("");
        handleAddHoliday(resJson);
      })
      .catch((error) => {
        console.log({ Error: error });
      });
  };

  //To update my state with the value user entered
  function handleChange() {
    setName(document.getElementById("name").value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="add a holiday"
        onChange={handleChange}
        value={name}
      />
      <br />
      <br />
      <input type="submit" value="Add a reason to celebrate" />
    </form>
  );
}

export default NewForm;
