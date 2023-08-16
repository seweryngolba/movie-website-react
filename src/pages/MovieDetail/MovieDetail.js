import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetail = ({ movies }) => {
  const { imdbID } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=bef75a8e`
        );
        const data = await response.json();
        setMovieDetail(data);
      } catch (error) {
        console.error("Error data", error);
      }
    };

    fetchMovieDetail();
  }, [imdbID]);

  if (!movieDetail) {
    return <div>Not movie</div>;
  }

  return (
    <div className="movieDetails">
      <div className="backgroundPoster">
        <img className="detailPhoto" src={movieDetail.Poster} alt="movie"></img>
        <div className="movieRating">{movieDetail.imdbRating}</div>
      </div>
      <div className="titleSection">
        <img
          className="detailPoster"
          src={movieDetail.Poster}
          alt="movie"
        ></img>
        <div className="detailSubtitle">
          <h2 className="detailTitle">{movieDetail.Title}</h2>
          <div className="basicDetails">
            <p className="detailYear">{movieDetail.Year}</p>
            <p className="detailRuntime">{movieDetail.Runtime}</p>
          </div>
          <h3 className="detailPlot">{movieDetail.Plot}</h3>
        </div>
      </div>

      <ul className="allDetails">
        <li>Genre: {movieDetail.Genre}</li>
        <li>Premiere: {movieDetail.Released}</li>
        <li>Director: {movieDetail.Director}</li>
        <li>Writer: {movieDetail.Writer}</li>
        <li>Actors: {movieDetail.Actors}</li>
        <li>Country: {movieDetail.Country}</li>
        <li>Awards: {movieDetail.Awards}</li>
        <li>Box Office: {movieDetail.BoxOffice}</li>
      </ul>
    </div>
  );
};

export default MovieDetail;
