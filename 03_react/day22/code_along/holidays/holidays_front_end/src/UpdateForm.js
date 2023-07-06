import { useState } from "react";

const UpdateForm = ({ baseURL, holiday, handleUpdateHoliday }) => {
  const [name, setName] = useState(holiday.name);
  const [celebrated, setCelebrated] = useState(holiday.celebrated);
  const [likes, setLikes] = useState(holiday.likes);
  const [description, setDescription] = useState(holiday.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(baseURL + "/holidays/" + holiday._id, {
      method: "PUT",
      body: JSON.stringify({ name, celebrated, likes, description }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        handleUpdateHoliday(resJson);
        setName("");
        setCelebrated("");
        setLikes("");
        setDescription("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        id="celebrated"
        name="celebrated"
        value={celebrated}
        onChange={(event) => setCelebrated(event.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        id="likes"
        name="likes"
        value={likes}
        onChange={(event) => setLikes(event.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <br />
      <input type="submit" value="Update Holiday" />
    </form>
  );
};

export default UpdateForm;
