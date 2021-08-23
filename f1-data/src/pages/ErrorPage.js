import React from "react";
import Error from "../components/Error/Error";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <div>
      <NavBar />
      <Error />
      <Footer />
    </div>
  );
};

export default ErrorPage;
