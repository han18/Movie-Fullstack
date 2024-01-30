import React from "react";

function MovieItem({ movie }) {
  const { title, poster } = movie;
  return (
    <div>
      Movie title
      <h3>{title}</h3>
      {poster && <img src={poster} alt={title} />}
    </div>
  );
}

export default MovieItem;
