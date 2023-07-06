import { useState, useEffect } from "react";

const UseFetch = (initialURL) => {
  const [url, setURL] = useState(initialURL);
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setError("");
        setData(responseData);
      })
      .catch((error) => {
        setData("");
        setError(error);
      });
  }, [url]);
  return { data, error, setURL };
};

export default UseFetch;
