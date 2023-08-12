import "./FavouriteMovies.css";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import RemoveFavourites from "../../components/RemoveFavourites/RemoveFavourites";

const FavouriteMovies = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-website-favourites")
    );
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem(
      "react-movie-website-favourites",
      JSON.stringify(items)
    );
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  return (
    <div className="favContainer">
      <h2 className="favTitle">YOUR FAVOURITES MOVIES</h2>
      <div className="moviePosters">
        <MovieList
          movies={favourites}
          handleFavourites={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default FavouriteMovies;
