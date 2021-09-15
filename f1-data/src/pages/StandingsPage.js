import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import Standings from "../components/Stats/Standings/Standings";

const StandingsPage = () => {
  return (
    <>
      <NavBar />
      <Standings />
      <Footer />
    </>
  );
};

export default StandingsPage;
