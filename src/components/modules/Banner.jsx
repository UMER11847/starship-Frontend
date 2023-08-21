// Styling
import "./scss/Banner.scss";
// Assets
import BannerImg from "../../assets/Banner/kindpng_1752485.png"

const Banner = () => {
  return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>TECH</h1>
                <p>Discover a realm of cutting-edge possibilities at our tech store,
                where innovation and imagination converge to redefine your digital journey.</p>
            <div className="ctas">
            <div className="banner-cta">About</div>
                <div className="banner-cta v2">Shop Now</div>
            </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="img" />
        </div>
    </div>
  )
}

export default Banner