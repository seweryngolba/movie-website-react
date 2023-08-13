import "./RandomMovie.css";
import { Link } from "react-router-dom";
import { randomMovies } from "../../data/randomMovies";
import { useState } from "react";

const RandomMovie = () => {
  const [randomIndex, setRandomIndex] = useState(null);

  const generateRandomIndex = () => {
    const newIndex = Math.floor(Math.random() * randomMovies.length);
    setRandomIndex(newIndex);
  };

  const randomMovie = randomIndex !== null ? randomMovies[randomIndex] : null;

  return (
    <div className="randomContainer">
      <h2 className="randomTitle">Get random movie</h2>

      {randomMovie && (
        <div className="randomBox">
          <Link to={`/movie/${randomMovie.imdbID}`}>
            <img
              className="randomPoster"
              src={randomMovie.Poster}
              alt="random movie"
            ></img>
          </Link>
          <h3 className="randomName">{randomMovie.Title}</h3>
        </div>
      )}
      <button className="randomButton" onClick={generateRandomIndex}>
        GET MOVIE
      </button>
    </div>
  );
};

export default RandomMovie;
