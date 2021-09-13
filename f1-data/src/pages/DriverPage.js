import React from "react";
import Driver from "../components/Driver/Driver";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";

const DriverPage = () => {
  const { driverId } = useParams();

  return (
    <div>
      <NavBar />
      <Driver driverId={driverId} />
      <Footer />
    </div>
  );
};

export default DriverPage;
