import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const NavBar = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>RData</Navbar.Brand>
        <Link to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Link to="/schedule">
          <Navbar.Brand>Races</Navbar.Brand>
        </Link>
        <Link to="/standings">
          <Navbar.Brand>Standings</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="https://github.com/jdro10">
            <AiFillGithub size={25}/>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
