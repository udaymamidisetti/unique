import React from "react";
import Galleryimg from "../../assets/Gallery 2.svg";
import Topbar from "../Topbar/Topbar";
import { Link } from "react-router-dom";
import "./Gallery.css";
import Footer from "../Footer/Footer";
const Gallery = () => {
  return (
    <div className="galleryContainer">
      <Topbar />
      <Link to="/">
        <img
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676097641/Group_1602_prpzew.svg"
          alt=""
          className="arrowlogo"
        />
      </Link>
      <div className="logoContainer">
        <Link to="/aboutus">
          <img src={Galleryimg} alt="plan" className="logoImages" />
          <p className="navNames">Gallery</p>
        </Link>
      </div>
      <div>
        <img
          className="galleryImage"
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676284362/image_3_xxetvl.svg"
          alt=""
        />
        <img
          className="galleryImage"
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676284556/image_2_skmnik.svg"
          alt=""
        />
        <img
          className="galleryImage"
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676284562/WhatsApp_Image_2023-02-12_at_20.01_1_sigqzt.svg"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
