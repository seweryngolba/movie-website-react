import { useEffect, useState } from "react";
import "./PopularMovies.css";
import MovieList from "../../components/MovieList/MovieList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Favorites from "../../components/Favorites/Favorites";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("lord of the rings");

  const getMovie = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=bef75a8e`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovie(searchValue);
    console.log(searchValue);
  }, [searchValue]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem(
      "react-movie-website-favourites",
      JSON.stringify(items)
    );
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="movieContainer">
      <h2 className="popularTitle">POPULAR MOVIES</h2>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="moviePosters">
        <MovieList
          movies={movies}
          handleFavourites={addFavouriteMovie}
          favouriteComponent={Favorites}
        />
      </div>
    </div>
  );
};

export default PopularMovies;
