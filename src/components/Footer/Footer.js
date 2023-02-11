import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const footerlinks = [
    { p: "UGC Terms", link: "/ugcterms" },
    { p: "Terms of Use", link: "/termsofuse" },
    { p: "Refund Policy" },
    {
      p: "Privacy Policy",
    },
    {
      p: "Cookies Policy",
    },
    {
      p: "Referral Business Policy",
    },
  ];
  return (
    <div className="wholeFooter">
      <ul className="footerContainer">
        {footerlinks.map((e) => (
          <Link to={e.link}>
            <li>{e.p}</li>
          </Link>
        ))}
      </ul>
      <div className="copywrightContainer">
        <p className="copyText">
          Copyright 2023, All rights reserved | Proudly Made In India
        </p>
      </div>
    </div>
  );
};

export default Footer;
