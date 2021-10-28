import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Race from "../components/RaceData/Race";
import { useParams } from "react-router-dom";

const RaceResult = () => {
  const { season } = useParams();
  const { round } = useParams();

  return (
    <>
      <NavBar />
      <Race season={season} round={round} />
      <Footer />
    </>
  );
};

export default RaceResult;
