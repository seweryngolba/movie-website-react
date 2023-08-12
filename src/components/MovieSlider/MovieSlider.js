import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieSlider.css";
import { Link } from "react-router-dom";

const MovieSlider = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    mobileFirst: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="sliderContainer">
      <h2 className="sliderTitle">{props.title}</h2>
      <Slider {...settings}>
        {props.data.map((movie) => (
          <div className="moviesSlides">
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                className="sliderPoster"
                src={movie.Poster}
                alt="movie"
              ></img>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
