import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image2 from "../../assets/42.png";
import Image3 from "../../assets/43.png";
import Image4 from "../../assets/45.png";
import Image5 from "../../assets/51.png";
import "./Slick.css";
const Slick = () => {
  var settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="slickContainer">
        <Slider {...settings}>
          <div className="slickTabs">
            <img
              className="slickImage"
              src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676035412/40_1_wvub54.svg"
              alt=""
            />
            <h1>UNIQUE STATUS</h1>
            <p>
              Express your feelings to the people through sharing unique status
              from different status categories
            </p>
          </div>
          <div className="slickTabs">
            <img className="slickImage" src={Image2} alt="" />
            <h1>UNIQUE STATUS</h1>
            <p>
              Express your feelings to the people through sharing unique status
              from different status categories
            </p>
          </div>
          <div className="slickTabs">
            <img className="slickImage" src={Image3} alt="" />
            <h1>UNIQUE STATUS</h1>
            <p>
              Express your feelings to the people through sharing unique status
              from different status categories
            </p>
          </div>
          <div className="slickTabs">
            <img className="slickImage" src={Image4} alt="" />
            <h1>UNIQUE STATUS</h1>
            <p>
              Express your feelings to the people through sharing unique status
              from different status categories
            </p>
          </div>
          <div className="slickTabs">
            <img className="slickImage" src={Image5} alt="" />
            <h1>UNIQUE STATUS</h1>
            <p>
              Express your feelings to the people through sharing unique status
              from different status categories
            </p>
          </div>
        </Slider>
      </div>
      <div className="playStoreContainer">
        <img
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676037211/5a902dbf7f96951c82922875_cdqxon.svg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676037852/image_1_j3gpbw.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slick;
