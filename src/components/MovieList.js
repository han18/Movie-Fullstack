import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import Spinner from "react-bootstrap/Spinner";
import { ThemeContext } from "../context/ThemeContext";

function MovieList({ movies }) {
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}>
      <h1>Movie List</h1>
      <div>
        {movies.length >= 1 ? (
          movies.map((movie) => <MovieItem movie={movie} key={movie._id} />)
        ) : (
          <Spinner animation="grow" variant="success" />
        )}
      </div>
    </div>
  );
}

export default MovieList;

// old code
{
  /* <div>
        {movies.map((movie) => (
          <MovieItem movie={movie} key={movie._id} />
        ))}
      </div> */
}
