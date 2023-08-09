import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="movie/:id" element={<h1>Movie Detail Page</h1>} />
          <Route path="movies/:type" element={<h1>Movies list page</h1>} />
          <Route
            path="movies/:random_movie"
            element={<h1>Random Movie page</h1>}
          />
          <Route path="/*" element={<h1>Error</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
