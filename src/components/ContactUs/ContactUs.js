import React from "react";
import Topbar from "../Topbar/Topbar";
import { Link } from "react-router-dom";
import Contact from "../../assets/Contact us 2.svg";
import "./ContactUs.css";
import Footer from "../Footer/Footer";
const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <Topbar />
      <div className="loginPageHeader">
        <Link to="/navmenu">
          <img
            src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676097641/Group_1602_prpzew.svg"
            alt=""
            className="arrowlogo"
            style={{
              position: "absolute",
              top: "40px",
              right: "0",
              left: "15px",
            }}
          />
        </Link>
        <div className="logoContainer">
          <Link to="/login">
            <img src={Contact} alt="plan" className="logoImages" />
            <p className="navNames">Contact Us</p>
          </Link>
        </div>
      </div>
      <form>
        <div className="Mrcontainer">
          <div className="RadioContainer">
            <input id="mr" type="radio" />
            <label for="mr">Mr.</label>
          </div>
          <div className="RadioContainer">
            <input id="mrs" type="radio" />
            <label for="mrs">Mrs.</label>
          </div>
          <div className="RadioContainer">
            <input id="miss" type="radio" />
            <label for="miss">Miss.</label>
          </div>
        </div>
        <div className="contactForm">
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email ID" />
          <select>
            <option value="none" selected disabled hidden className="options">
              Parameter
            </option>
            <option className="options">Need Support</option>
            <option className="options">Suggestion</option>
            <option className="options">Intellectual Property Issue</option>
            <option className="options">Purchase</option>
            <option className="options">Refund</option>
            <option className="options">Refferal Business</option>
          </select>
          <input placeholder="Subject" />
          <textarea
            rows="4"
            cols="50"
            placeholder="Description"
            className="description"
          ></textarea>
        </div>
        <button className="loginButton">Login</button>
      </form>
      <p className="forgotPassword">Forgot Password ?</p>
      <p className="problemText">
        Still have problem to login ?{" "}
        <span className="forgotPassword"> Contact us.</span>
      </p>
      <div className="contactFooter">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
