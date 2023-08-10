import video from "../../assets/movie.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay loop muted />
      <div className="heroContent">
        <h1 className="title">DISCOVER THE BEST FILMS ONLINE</h1>
      </div>
    </div>
  );
};

export default Hero;
