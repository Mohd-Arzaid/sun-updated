import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
import Footer from "./components/common/footer/footer";
import Navbar from "./components/common/navbar/navbar";
import Topbar from "./components/common/topbar/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
