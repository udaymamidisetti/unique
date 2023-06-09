import React from "react";
import "./Header.css";
import Logo from "../../assets/WhatsApp Image 2023-02-04 at 16.12 1.svg";
import About from "../../assets/About us 2.svg";
import Plan from "../../assets/plan 2.svg";
import Gallery from "../../assets/Gallery 2.svg";
import Login from "../../assets/Login 2.svg";
import Contact from "../../assets/Contact us 2.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="headerContainer">
        <div className="navLinksContainer">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
          <div className="LinksContainer">
            <div className="logoContainer">
              <Link to="/aboutus">
                <img src={About} alt="plan" className="logoImages" />
                <p className="navNames">About Us</p>
              </Link>
            </div>
            <div className="logoContainer">
              <Link to="/plan">
                <img src={Login} alt="plan" />
                <p className="navNames">Plan</p>
              </Link>
            </div>
            <div className="logoContainer">
              <Link to="/gallery">
                <img src={Gallery} alt="plan" />
                <p className="navNames">Gallery</p>
              </Link>
            </div>
            <div className="logoContainer">
              <Link to="/login">
                <img src={Plan} alt="plan" />
                <p className="navNames">Login</p>
              </Link>
            </div>
            <div className="logoContainer">
              <Link to="/contactus">
                <img src={Contact} alt="plan" />
                <p className="navNames">Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileView">
        <Link to="/navmenu">
          <img
            className="dotButton"
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676093291/Group_1594_azfstk.svg"
            alt=""
          />
        </Link>
        <img src={Logo} alt="" className="logo" />
        <div></div>
      </div>
    </>
  );
}

export default Header;
