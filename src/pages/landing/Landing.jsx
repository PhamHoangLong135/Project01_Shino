import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./landing.scss";
import Info_landing from "../../components/info_landing/Info_landing";
const Landing = () => {
  return (
    <div className="landing">
      <Navbar />     
      <Info_landing/>
      <Footer />
    </div>
  );
};

export default Landing;
