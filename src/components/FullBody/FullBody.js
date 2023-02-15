import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slick from "../Slick/Slick";
import Topbar from "../Topbar/Topbar";
import "./FullBody.css";
const FullBody = () => {
  return (
    <div className="FullbodyContainer">
      <Topbar />
      <Header />
      <Slick />
      <div className="homeFooter">
        <Footer />
      </div>
    </div>
  );
};

export default FullBody;
