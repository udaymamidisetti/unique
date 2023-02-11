import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Topbar from "../Topbar/Topbar";
import "./termsOfUse.css";
const TermsOfUse = () => {
  return (
    <div>
      <div className="FullbodyTermContainer">
        <Topbar />
        <Header />
        <div>
          <h1 className="ugcHeading">TERMS OF USE</h1>
          <div className="TermContainer">
            <select
              className="selectedOptionsinterms"
              id="select"
              placeholder="User generated content agreement"
            >
              <option value="" disabled selected hidden>
                SITE AND APP USE GENERALLY
              </option>
            </select>
            <select
              className="selectedOptionsinterms"
              id="select"
              placeholder="User generated content agreement"
            >
              <option value="" disabled selected hidden>
                CONTENT POSTED BY USERS
              </option>
            </select>
            <select
              className="selectedOptionsinterms"
              id="select"
              placeholder="User generated content agreement"
            >
              <option value="" disabled selected hidden>
                YOUR CONDUCT
              </option>
            </select>
            <select
              className="selectedOptionsinterms"
              id="select"
              placeholder="User generated content agreement"
            >
              <option value="" disabled selected hidden>
                SITE WARRENTY DISCLAIMER
              </option>
            </select>
            <select
              className="selectedOptionsinterms"
              id="select"
              placeholder="User generated content agreement"
            >
              <option value="" disabled selected hidden>
                LIMITATION OF LIABILITY
              </option>
            </select>
            <select
              className="selectedOptionsinterms"
              id="select"
              placeholder="User generated content agreement"
            >
              <option value="" disabled selected hidden>
                CONFIDENTIALITY
              </option>
            </select>
            <select
              className="selectedOptionsinterms"
              id="select"
              placeholder="User generated content agreement"
            >
              <option value="" disabled selected hidden>
                GENERAL TERMS
              </option>
            </select>
          </div>
        </div>
        <div className="termFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
