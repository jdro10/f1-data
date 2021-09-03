import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { GiCheckeredFlag } from "react-icons/gi";

const NavBar = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <GiCheckeredFlag size={30} />
        </Navbar.Brand>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Link to="/schedule" style={{ textDecoration: "none" }}>
          <Navbar.Brand>Races</Navbar.Brand>
        </Link>
        <Link to="/standings" style={{ textDecoration: "none" }}>
          <Navbar.Brand>Standings</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="https://github.com/jdro10" aria-label="Github">
            <AiFillGithub size={25} />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
