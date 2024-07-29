
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return <DataFetcher />;
}
export default App;

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("error in fetching data", error);
  //       setLoading(false);
  //     });
  // }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);


  function fetchNextItem() {
    setId((prevId) => prevId + 1);
    setLoading(true);
  }

  return (
    <div>
      <button onClick={fetchNextItem}>Fetch Data</button>
      <p>{id}</p>
      {loading ? <p>Loading...</p> : <p>{data.title}</p>}
    </div>
  );
}
