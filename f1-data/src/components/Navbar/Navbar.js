import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../helpers/ThemeContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { GiCheckeredFlag } from "react-icons/gi";
import DayNightToggle from "react-day-and-night-toggle";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggler = () => {
    const toggle = theme === "light" ? "dark" : "light";
    setTheme(toggle);
    localStorage.setItem("theme", toggle);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container style={{ minHeight: "40px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            <GiCheckeredFlag size={30} />
          </Navbar.Brand>
        </Link>

        <Link to="/schedule" style={{ textDecoration: "none" }}>
          <Navbar.Brand>Races</Navbar.Brand>
        </Link>
        <Link to="/standings" style={{ textDecoration: "none" }}>
          <Navbar.Brand>Standings</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Row className="g-2">
            <Col style={{ marginTop: "15px" }}>
              <DayNightToggle
                onChange={() => themeToggler()}
                checked={theme === "dark"}
                size={20}
              />
            </Col>
            <Col>
              <Navbar.Brand
                href="https://github.com/jdro10"
                aria-label="Github"
              >
                <AiFillGithub size={25} />
              </Navbar.Brand>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
