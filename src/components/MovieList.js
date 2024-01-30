import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  return (
    <div>
      <h1>Movie List</h1>
      <div>
        {movies.map((movie) => (
          <MovieItem movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
