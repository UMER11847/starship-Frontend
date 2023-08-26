import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import earbuds from "../../assets/Product/earbuds.jpeg"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
  
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
 
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
    <div>
      <h2>Responsive</h2>
      <Slider {...settings}>
        <div className="card">
          <img src={earbuds} alt="" />
        </div>
        <div className="card">
          <img src={earbuds} alt="" />
        </div>
        <div className="card">
          <img src={earbuds} alt="" />
        </div>
        <div className="card">
          <img src={earbuds} alt="" />
        </div>
        <div className="card">
          <img src={earbuds} alt="" />
        </div>
        <div className="card">
          <img src={earbuds} alt="" />
        </div>
        <div className="card">
          <img src={earbuds} alt="" />
        </div>
        <div className="card">
          <img src={earbuds} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

