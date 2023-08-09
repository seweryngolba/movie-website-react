import video from "../../assets/movie.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="videoBg">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="heroContent">
        <h1>DISCOVER THE BEST FILMS ONLINE</h1>
      </div>
    </div>
  );
};

export default Hero;
