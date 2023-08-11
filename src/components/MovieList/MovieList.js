import "./MovieList.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="imageContainer" key={movie.imdbID}>
          <img className="moviePhoto" src={movie.Poster} alt="movie"></img>
          <div className="posterOverlay">
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
