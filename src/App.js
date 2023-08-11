import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import RandomMovie from "./pages/PopularMovies/PopularMovies";
import FavouriteMovies from "./pages/FavouriteMovies/FavouriteMovies";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="movie/:id" element={<h1>Movie Detail Page</h1>} />
          <Route path="movies/:type" element={<h1>Movies list page</h1>} />
          <Route path="movies/popular" element={<RandomMovie />} />
          <Route path="movies/my_favourites" element={<FavouriteMovies />} />
          <Route path="movies/random_movie" element={<RandomMovie />} />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
