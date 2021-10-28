import React from "react";
import "react-circular-progressbar/dist/styles.css";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainFeed from "../components/MainFeed/MainFeed";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <MainFeed />
      <Footer />
    </>
  );
};

export default HomePage;
