import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const handleMenuClick = () => {
    const mobileNav = document.getElementById("mobileNav");
    const barsIcon = document.getElementById("barsIcon");
    const closeIcon = document.getElementById("closeIcon");

    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
      barsIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      mobileNav.style.display = "flex";
      barsIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  };

  return (
    <div className="header">
      <div className="logoSide">
        <Link
          className="logo"
          to="https://seweryngolba.github.io/movie-website-react/"
        >
          MOVIES
        </Link>
        <div id="mobileNav" className="mobileNav">
          <Link className="listItem" to="/movies/popular">
            ALL MOVIES
          </Link>
          <Link className="listItem" to="/movies/my_favourites">
            FAVOURITES
          </Link>
          <Link className="listItem" to="/movies/random_movie">
            RANDOM MOVIE
          </Link>
        </div>
      </div>
      <div id="mobileMenu" className="mobileMenu" onClick={handleMenuClick}>
        <i id="barsIcon" className="fa-solid fa-bars bars"></i>
        <i id="closeIcon" className="fa-regular fa-circle-xmark close"></i>
      </div>
    </div>
  );
};

export default Header;
