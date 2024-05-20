import Stat from "./Stat";

function Movie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <Stat emoji={"🗓"} stat={movie.Year} />
      </div>
    </li>
  );
}

export default Movie;
