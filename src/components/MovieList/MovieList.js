import "./MovieList.css";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  if (!props.movies || !Array.isArray(props.movies)) {
    return <p className="infoMovie">Add some movies to your favourites</p>;
  }
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="imageContainer" key={movie.imdbID}>
          <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
            <img className="moviePhoto" src={movie.Poster} alt="movie"></img>
          </Link>
          <div
            onClick={() => props.handleFavourites(movie)}
            className="posterOverlay"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
