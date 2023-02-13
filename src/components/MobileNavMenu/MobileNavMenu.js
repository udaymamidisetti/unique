import React from "react";
import Logo from "../../assets/WhatsApp Image 2023-02-04 at 16.12 1.svg";
import About from "../../assets/About us 2.svg";
import Plan from "../../assets/plan 2.svg";
import Gallery from "../../assets/Gallery 2.svg";
import Login from "../../assets/Login 2.svg";
import Contact from "../../assets/Contact us 2.svg";
import "./MobileNavMenu.css";
import Topbar from "../Topbar/Topbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const MobileNavMenu = () => {
  return (
    <>
      <div className="MobileNav">
        <Topbar />
        <Link to="/">
          <img
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676097641/Group_1602_prpzew.svg"
            alt=""
            className="mobileNavArrow"
          />
        </Link>
        <img src={Logo} alt="" className="mainLogo" />
        <div className="logoContainer">
          <Link to="/aboutus">
            <img src={About} alt="plan" className="logoImages" />
            <p className="navNames">About Us</p>
          </Link>
        </div>
        <div className="logoContainer">
          <Link to="/plan">
            <img src={Plan} alt="plan" className="logoImages" />
            <p className="navNames">Plan</p>
          </Link>
        </div>
        <div className="logoContainer">
          <Link to="/gallery">
            <img src={Gallery} alt="plan" className="logoImages" />
            <p className="navNames">Gallery</p>
          </Link>
        </div>
        <div className="logoContainer">
          <Link to="/login">
            <img src={Login} alt="plan" className="logoImages" />
            <p className="navNames">Login</p>
          </Link>
        </div>
        <div className="logoContainer">
          <Link to="/contactus">
            <img src={Contact} alt="plan" className="logoImages" />
            <p className="navNames">Contact Us</p>
          </Link>
        </div>
        <div className="PolicyContainer">
          <p>UGC Terms</p>
          <p>Terms Of Use</p>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
          <p>Cookies Policy</p>
          <p>Referral Business Policy</p>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MobileNavMenu;
