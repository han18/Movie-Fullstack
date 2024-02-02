// this is to get the specif id on each movie

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
  const params = useParams();
  console.log(params);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/movies/${params.id}`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <div>
      {movie && (
        <>
          <h3>Movie details </h3>
          <h3>{movie.title} </h3>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
