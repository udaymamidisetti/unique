import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullBody from "./components/FullBody/FullBody";
import UgcTerms from "./components/UgcTerms/UgcTerms";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import MobileNavMenu from "./components/MobileNavMenu/MobileNavMenu";
import MobileAboutus from "./components/MobileAboutus/MobileAboutus";
import PlanMobileContainer from "./components/PlanMobileContainer/PlanMobileContainer";
import Gallery from "./components/Gallery/Gallery";
import LoginPage from "./components/LoginPage/LoginPage";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullBody />} />
        <Route path="/ugcterms" element={<UgcTerms />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/navmenu" element={<MobileNavMenu />} />
        <Route path="/aboutus" element={<MobileAboutus />} />
        <Route path="/plan" element={<PlanMobileContainer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
