import React from "react";
import { Link } from "react-router-dom";
import Login from "../../assets/Login 2.svg";
import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="loginContainer">
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
            <img src={Login} alt="plan" className="logoImages" />
            <p className="navNames">Login</p>
          </Link>
        </div>
      </div>
      <form>
        <div className="loginBox">
          <input placeholder="User ID" className="userInputs" />
          <input placeholder="Password" className="userInputs" />
        </div>
        <button className="loginButton">Login</button>
        <p className="forgotPassword">Forgot Password ?</p>
        <p className="problemText">
          Still have problem to login ?{" "}
          <span className="forgotPassword"> Contact us.</span>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default LoginPage;
