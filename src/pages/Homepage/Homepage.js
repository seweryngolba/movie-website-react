import Hero from "../../components/Hero/Hero";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { topMovies } from "../../data/topMovies";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Hero />
      <MovieSlider data={topMovies} />
      <MovieSlider data={topMovies} />
      <MovieSlider data={topMovies} />
    </>
  );
};

export default Homepage;
