import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EventStats from "../components/Stats/EventStats";

const RaceResult = () => {
  return (
    <div>
      <NavBar />
      <EventStats season="2021" round="2"/>
      <Footer />
    </div>
  );
};

export default RaceResult;
