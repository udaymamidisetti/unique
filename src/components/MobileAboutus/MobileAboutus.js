import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import About from "../../assets/About us 2.svg";
import "./MobileAboutus.css";
import Footer from "../Footer/Footer";
const MobileAboutus = () => {
  return (
    <div className="MobileAboutContainer">
      <Topbar />
      <Link to="/">
        <img
          src="https://res.cloudinary.com/drjnmxyd5/image/upload/v1676097641/Group_1602_prpzew.svg"
          alt=""
          className="arrowlogo"
        />
      </Link>
      <div className="logoContainer">
        <Link to="/aboutus">
          <img src={About} alt="plan" className="logoImages" />
          <p className="navNames">About Us</p>
        </Link>
      </div>
      <div className="aboutMatter">
        <p>
          <h1 className="heading">
            Version <br /> 1.0.0
          </h1>
          <h1 className="heading">
            AUTHOR{" "}
            <span>
              <p>Team My Status</p>
            </span>
          </h1>
          <h1 className="heading">
            Developed by
            <span>
              <p> My Software Solution</p>
            </span>
          </h1>
          <p style={{ marginBottom: "20px" }}>
            We’re client-focused application designers{" "}
          </p>
          <p style={{ marginBottom: "20px" }}>
            {" "}
            Our master group of application designers utilizes more intelligent
            and friendlier routes for our customers and their clients to draw in
            with innovation, making remarkable client encounters.{" "}
          </p>{" "}
          <p style={{ marginBottom: "20px" }}>
            {" "}
            We don’t make do with OK, we consistently make progress toward
            magnificence. It’s this enthusiasm that enables our customers to
            change transformation rates, enhance mark notorieties, win grants
            and remain on top of things, after quite a long time.{" "}
          </p>{" "}
          We pride ourselves on building long-haul associations with our
          customers, attempting to enable them to accomplish their business
          objectives. You’ll work specifically with the application engineers
          themselves, auditing and teaming up with them on each phase of the
          procedure. HOW DO WE DO IT? We help control customers through the
          procedures of building an application, from starting a plan to
          supporting the last organization. Pre-Design We break down the
          prerequisites of the venture so as to prescribe the best way to deal
          with meet both business and client objectives. We don’t just take
          briefs; we challenge any pre-characterized usefulness or choices and
          talk about choices using our profound versatile information. Brushing
          your industry information with our versatile innovation skills. Plan
          We draw on our broad experience, got from planning more than 250
          versatile arrangements, so as to enable customers to structure a
          five-star client encounter. Our creative plans will guarantee that the
          UX of your application has your end client at the cutting edge of each
          choice. With client testing and criticism at all times, ready to plan
          the ideal answer for your intended interest group. Improvement
          Following the light-footed technique, we can do nonstop discharges to
          give you full perceivability of the venture as it advances. Our
          communitarian approach will offer you the chance to criticize toward
          the finish of each run. Working inside test-driven conditions implies
          we can guarantee well-performing and stable forms all through
          improvement. 24X7 Support We are truly available 24X7 to support our
          clients When an application is propelled, we screen it intimately with
          our in-constructed investigation to keep up and enhance the item as we
          travel through the future stages. We pride ourselves on proactively
          breaking down the information, which enables us to prescribe extra
          usefulness or changes, inserting the application inside the intended
          interest group, and increasing significant direct criticism.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MobileAboutus;
