import useFetch from "./useFetch";

const ShowData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, error, setUrl } = useFetch(url);

  return (
    <ul>
      {data && data.map((item, index) => <li key={index}>{item.title}</li>)}
      {error && <li>{error.message}</li>}
    </ul>
  );
};

export default ShowData;
