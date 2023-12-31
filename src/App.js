import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import PopularMovies from "./pages/PopularMovies/PopularMovies";
import FavouriteMovies from "./pages/FavouriteMovies/FavouriteMovies";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import RandomMovie from "./pages/RandomMovie/RandomMovie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/movie-website-react" element={<Homepage />} />
          <Route path="movie/:imdbID" element={<MovieDetail />} />
          <Route path="movies/popular" element={<PopularMovies />} />
          <Route path="movies/my_favourites" element={<FavouriteMovies />} />
          <Route path="movies/random_movie" element={<RandomMovie />} />
          <Route path="/*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
