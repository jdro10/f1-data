import React from "react";
import "react-circular-progressbar/dist/styles.css";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LatestStats from "../components/Stats/LatestStats";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <LatestStats />
      <Footer />
    </div>
  );
};

export default HomePage;
