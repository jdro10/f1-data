import React from "react";
import "react-circular-progressbar/dist/styles.css";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainFeed from "../components/Stats/MainFeed/MainFeed";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <MainFeed />
      <Footer />
    </div>
  );
};

export default HomePage;
