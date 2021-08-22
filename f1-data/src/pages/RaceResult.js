import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EventStats from "../components/Stats/EventData/EventStats";
import { useParams } from "react-router-dom";

const RaceResult = () => {
  const { season } = useParams();
  const { round } = useParams();

  return (
    <div>
      <NavBar />
      <EventStats season={season} round={round} />
      <Footer />
    </div>
  );
};

export default RaceResult;
