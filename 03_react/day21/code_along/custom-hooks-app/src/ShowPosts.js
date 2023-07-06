import useFetch from "./useFetch";

const ShowPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const { data, error, setUrl } = useFetch(url);

  return (
    <ul>
      {data && data.map((item, index) => <li key={index}>{item.title}</li>)}
      {error && <li>error.message</li>}
    </ul>
  );
};

export default ShowPosts;
