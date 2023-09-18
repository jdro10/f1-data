import { React, useContext, useEffect } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { GiCheckeredFlag } from "react-icons/gi";
import { ThemeContext } from "../../helpers/ThemeContext";
import DayNightToggle from "react-day-and-night-toggle";
import "./Navbar.css";

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
      <Container>
        <Link to="/">
          <Navbar.Brand className="icon-link">
            <GiCheckeredFlag size={30} />
          </Navbar.Brand>
        </Link>

        <Link to="/schedule">
          <Navbar.Brand className="text-link">RACES</Navbar.Brand>
        </Link>

        <Link to="/standings">
          <Navbar.Brand className="text-link">STANDINGS</Navbar.Brand>
        </Link>

        <Navbar.Collapse className="justify-content-end">
          <Row className="g-2">
            <Col className="dark-mode-toggle">
              <DayNightToggle onChange={() => themeToggler()} checked={theme === "dark"} size={20} />
            </Col>

            <Col>
              <Navbar.Brand className="icon-link" href="https://github.com/jdro10" aria-label="Github">
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
