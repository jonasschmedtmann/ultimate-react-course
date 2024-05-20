import Stat from "./Stat";
function WatchedMovie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <Stat emoji={"⭐️"} stat={movie.imdbRating} />
        <Stat emoji={"🌟"} stat={movie.userRating} />
        <Stat emoji={"⏳"} stat={`${movie.runtime} min`} />
      </div>
    </li>
  );
}

export default WatchedMovie;
