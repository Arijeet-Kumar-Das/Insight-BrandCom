import { Route, Routes } from "react-router-dom";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";

import WhoWeAre from "./pages/WhoWeAre";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import TheTeam from "./pages/TheTeam";
import Careers from "./pages/Careers";
import CaseStudy from "./pages/CaseStudies/Index";
import CaseStudy1 from "./pages/CaseStudies/CaseStudy1";
import CaseStudy2 from "./pages/CaseStudies/CaseStudy2";
import CaseStudy3 from "./pages/CaseStudies/CaseStudy3";

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<TheTeam />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/case_study" element={<CaseStudy />} />
        <Route path="/assam_cancer_care_foundation" element={<CaseStudy1 />} />
        <Route path="/apart" element={<CaseStudy2 />} />
        <Route path="/bajaj" element={<CaseStudy3 />} />
      </Routes>
    </div>
  );
}

export default App;
