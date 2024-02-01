import React from "react";
import MovieItem from "./MovieItem";
import Spinner from "react-bootstrap/Spinner";

function MovieList({ movies }) {
  return (
    <div>
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
