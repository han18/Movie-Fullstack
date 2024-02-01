import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./Pages/NavBar";
import { ThemeContext } from "./context/ThemeContext";

//useEffect

function App() {
  const [movies, setMovies] = useState([]);
  const [theme, setTheme] = useState("light");

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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <h1>Movie Full-Stack App</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies" element={<MovieList movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        {/* <MovieList movies={movies} /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
