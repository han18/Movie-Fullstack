import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./Pages/NavBar";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

//useEffect

function App() {
  const [movies, setMovies] = useState([]);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null); // adding a {} keeps the user logged in null signed out

  // setting data to movies
  // connect to the backend and creating a get request
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data...");
      const res = await fetch(
        "https://movie-fullstack-backend.onrender.com/api/movies"
      );
      const data = await res.json();
      console.log(data);
      // set the data to the state movies variable
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={(user, setUser)}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>
          {user ? (
            <>
              <NavBar />

              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/movies" element={<MovieList movies={movies} />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
              </Routes>
            </>
          ) : (
            <MainPage />
          )}
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

// this is the old code before adding the user context to login users

// {/* <div className="App">
//           <NavBar />
//           <Routes>
//             <Route path="/" element={<MainPage />} />
//             <Route path="/movies" element={<MovieList movies={movies} />} />
//             <Route path="/movies/:id" element={<MovieDetails />} />
//           </Routes>

//           {/* <MovieList movies={movies} /> */}
//         </div> */}
