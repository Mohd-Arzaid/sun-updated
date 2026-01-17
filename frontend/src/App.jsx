import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
import Footer from "./components/common/footer/footer";
import Navbar from "./components/common/navbar/navbar";
import Topbar from "./components/common/topbar/Topbar";
import BISFMPagesRoutes from "./routes/bisfm-pages-routes";
import OrganizationChart from "./components/pages/organization-chart/organization-chart";
import AdvisoryNetworkPage from "./components/pages/advisory-network-page/advisory-network-page";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {BISFMPagesRoutes()}
        <Route path="/organization-chart" element={<OrganizationChart />} />
        <Route
          path="/expert-bis-certification-panel-sun-certifications-india"
          element={<AdvisoryNetworkPage />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
