// Core
import { Link as RouterLink } from "react-router-dom";
// Styling
import "./scss/Banner.scss";
import { Link } from "@mui/material";
// Assets
import BannerImg from "../../assets/Banner/kindpng_1752485.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div style={{zIndex: 2}} className="text-content">
          <h1>TECH</h1>
          <p>
            Discover a realm of cutting-edge possibilities at our tech store,
            where innovation and imagination converge to redefine your digital
            journey.
          </p>
          <div className="ctas">
            <div className="banner-cta">
              <Link
                to="/about"
                component={RouterLink}
                underline="none"
                color="inherit"
              >
                About
              </Link>
            </div>
            <div className="banner-cta v2">
              <Link to="/" component={RouterLink} underline="none" color="inherit" >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <img style={{zIndex: 1}} className="banner-img" src={BannerImg} alt="img" />
      </div>
    </div>
  );
};

export default Banner;
