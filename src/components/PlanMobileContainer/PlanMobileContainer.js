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
        <p>One Year Subscription @</p>
        <h1>INR 1,999 /-</h1>
        <p>(Inclusive of All Taxes)</p>
      </div>
      <img
        className="OfferImage"
        src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676441143/Group_1620_nmpb3h.svg"
        alt=""
      />
      <div className="playStorePlanContainer">
        <img
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676037211/5a902dbf7f96951c82922875_cdqxon.svg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676037852/image_1_j3gpbw.svg"
          alt=""
        />
      </div>
      <div className="planFooter">
        <Footer />
      </div>
    </div>
  );
};

export default PlanMobileContainer;
