import { useEffect, useState } from "react";
import "./App.css";

//useEffect

function App() {
  const [movies, setMovies] = useState([]);
  // setting data to movies

  // connect to the backend and creating a get request
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data...");
      const res = await fetch("http://localhost:4000/api/movies");
      const data = await res.json();
      console.log(data);
      // set the data to the state movies variable
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Movie full-Stack app</h1>
    </div>
  );
}

export default App;
