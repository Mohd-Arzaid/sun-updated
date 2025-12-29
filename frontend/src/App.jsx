import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
import Footer from "./components/common/footer/footer";
import Navbar from "./components/common/navbar/navbar";
import Topbar from "./components/common/topbar/Topbar";
import BISFMPagesRoutes from "./routes/bisfm-pages-routes";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {BISFMPagesRoutes()}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
