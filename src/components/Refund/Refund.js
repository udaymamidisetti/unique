import React from "react";
import Header from "../Header/Header";
import Topbar from "../Topbar/Topbar";
import "./Refund.css";
const Refund = () => {
  return (
    <div className="refundFullContainer">
      <Topbar />
      <Header />
      <div className="refundContainer">
        <h3 style={{ textAlign: "center", margin: "20px" }}>REFUND</h3>
        <p>
          Our focus is complete customer satisfaction. In the event, if you are
          displeased with the services provided, we will refund back the money,
          provided the reasons are genuine and proved after investigation.
          Please read the fine prints of each deal before taking the services.
        </p>
        <h4>REFUND POLICY</h4>
        <h4>
          We provide <span>“FREE SUBSCRIPTIONS”</span> to all our users for the
          first 5 days. If the user is not satisfied with our app and services,
          we sincerely request the user not to subscribe to our app.
        </h4>
        <p>
          Then too, we will refund the money only in case we fail to provide
          service to our customers from our end{" "}
          <span>POST OUR INTERNAL INVESTIGATION.</span>
          Applicant needs to apply for the same via email at{" "}
          <a href="">refund@mystatus.store</a>{" "}
        </p>
        <p>
          <span>REFUND WILL NOT BE PROVIDED TO THE USER,</span> for a new App
          Subscription OR 1st time App Subscription because our actual app
          subscription’s cost for one year is INR 1,999/-, but to promote our
          app speedily we already giving a 90% discount on “1st Year or New App
          Subscription” and give full ad-free access to the user to use our app
          at INR 199/- only for the whole year.
        </p>
        <p>
          But when the user renews his/her App Subscription for next year and he
          asked for a refund, we definitely refund the money. Before processing
          any refund, we reserve the right to make the best effort to complete
          the service. In case, of non-completion of services post receipt of
          the refund request,
          <span>
            A CANCELLATION FEE OF 20% + FEE PAID TO THE GOVERNMENT OR ANY THIRD
            PARTY WOULD BE APPLICABLE,
          </span>{" "}
          because of the time and energy invested by our manpower for their work
          done, which is not returnable. So basically, all the processing fees,
          payment gateway charges, admin fees, and cost of resources for the
          work done, will be deducted. In short, further, we can’t refund any
          money which is paid to government bodies, such as GST & other taxes,
          or to other third parties with a role in processing your order.
        </p>
        <h1>UNGOVERNABLE FACTORS</h1>
        <p>
          The result of a particular process/service cannot be guaranteed as the
          same involves dependency on Governing Authorities related to the said
          service. This further implies that rejections/ approvals /responses by
          Govt. Authorities or technical issues with Government, Banks, Server
          sites, etc. are not within the purview of the <span>“MY STATUS”</span>{" "}
          (Company). These may lead to unexpected delays before the completion
          of the process and factors like these are outside our control and
          hence not eligible for a refund.
        </p>
        <h1>FORCE MAJEURE</h1>
        <p>
          <span>“MY STATUS”</span> will not be considered responsible if there
          is a breach of its satisfaction guarantee policy or default under any
          terms of service, and shall not be liable to the Client for any
          cessation, interruption, or delay in the performance of its
          obligations by reason of earthquake, flood, fire, storm, lightning,
          drought, landslide, hurricane, cyclone, typhoon, tornado, natural
          disaster, act of God or the public enemy, epidemic, famine or plague,
          action of a court or public authority, change in law, explosion, war,
          terrorism, armed conflict, labour strike, lockout, boycott or similar
          event beyond our reasonable control, whether foreseen or unforeseen
          (each a “Force Majeure Event”).
        </p>
      </div>
    </div>
  );
};

export default Refund;
