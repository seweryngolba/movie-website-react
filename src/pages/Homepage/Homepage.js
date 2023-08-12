import Hero from "../../components/Hero/Hero";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { topMovies } from "../../data/topMovies";
import { popMovies } from "../../data/popMovies";
import { bestSeries } from "../../data/bestSeries";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Hero />
      <MovieSlider title="Top Movies" data={topMovies} />
      <MovieSlider title="Popular Movies" data={popMovies} />
      <MovieSlider title="Best Series" data={bestSeries} />
    </>
  );
};

export default Homepage;
