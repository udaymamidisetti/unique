import React from "react";
import Plan from "../../assets/plan 2.svg";
import { Link } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import "./PlanMobileContainer.css";
import Footer from "../Footer/Footer";
const PlanMobileContainer = () => {
  return (
    <div className="PlanMobileNav">
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
          <Link to="/aboutus">
            <img src={Plan} alt="plan" className="logoImages" />
            <p className="navNames">Plan</p>
          </Link>
        </div>
      </div>
      <div className="priceDetails">
        <h1>INR 1,999 /-</h1>
        <p>(Inclusive of All Taxes)</p>
      </div>
      <img
        style={{ margin: "auto", display: "block" }}
        src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676101862/9720ad_de45604e274141bab782c779094379b9_mv2_1_w4riq1.svg"
        alt=""
      />
      <img
        style={{ margin: "auto", display: "block" }}
        src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676101867/1_ypgref.svg"
        alt=""
      />
      <Footer />
    </div>
  );
};

export default PlanMobileContainer;
