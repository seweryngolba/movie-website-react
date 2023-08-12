import "./MovieList.css";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
          <div className="imageContainer" key={movie.imdbID}>
            <img className="moviePhoto" src={movie.Poster} alt="movie"></img>
            <div
              onClick={() => props.handleFavourites(movie)}
              className="posterOverlay"
            >
              <FavouriteComponent />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MovieList;
