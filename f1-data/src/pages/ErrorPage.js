import React from "react";
import Error from "../components/Error/Error";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <Error />
      <Footer />
    </>
  );
};

export default ErrorPage;
