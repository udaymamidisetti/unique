import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Topbar from "../Topbar/Topbar";
import "./UgcTerms.css";

const UgcTerms = () => {
  return (
    <div className="FullbodyUgcContainer">
      <Topbar />
      <Header />
      <div>
        <h1 className="ugcHeading">UGC TERMS</h1>
        <div className="ugcTermContainer">
          <select className="selectedOptions" id="select">
            <option value="" disabled selected hidden>
              USER GENERATED CONTENT AGREEMENT
            </option>
          </select>
          <p>
            Updated and effective from 26th Jan 2023.
            <br /> Copyright ©2023 MY STATUS. <br />
            All rights reserved.
          </p>
        </div>
      </div>
      <div className="ugcFooter">
        <Footer />
      </div>
    </div>
  );
};

export default UgcTerms;
