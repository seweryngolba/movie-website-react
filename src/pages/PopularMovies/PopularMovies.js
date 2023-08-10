import { useEffect, useState } from "react";
import "./PopularMovies.css";
import MovieList from "../../components/MovieList/MovieList";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovie = async () => {
    const url = "http://www.omdbapi.com/?s=spider&apikey=bef75a8e";
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movieContainer">
      <h2 className="popularTitle">POPULAR MOVIES</h2>
      <div className="moviePosters">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default PopularMovies;
