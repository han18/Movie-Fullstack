import { Link } from "react-router-dom";

function MovieItem({ movie }) {
  const { title, poster, _id } = movie;
  return (
    <div>
      Movie title
      <Link to={`/movies/${_id}`}>
        <h3>{title}</h3>
      </Link>
      {poster && <img src={poster} alt={title} />}
    </div>
  );
}

export default MovieItem;
