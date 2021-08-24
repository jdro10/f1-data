import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiCheckeredFlag } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { SiVisualstudiocode } from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="justify-content-md-center" xs="auto">
          <Col>
            <GiCheckeredFlag size={40} />
          </Col>
          <Col>
            <FaGithub size={40} />
          </Col>
          <Col>
            <FaReact size={40} />
          </Col>
          <Col>
            <IoLogoJavascript size={40} />
          </Col>
          <Col>
            <FaHtml5 size={40} />
          </Col>
          <Col>
            <FaCss3Alt size={40} />
          </Col>
          <Col>
            <BsBootstrap size={40} />
          </Col>
          <Col>
            <SiVisualstudiocode size={40} />
          </Col>
          <Col>
            <IoLogoNpm size={40} />
          </Col>
        </Row>
        <Row className="justify-content-md-center" xs="auto" id="lastRow">
          <Col>
            <p id="author"></p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            All racing data was obtained through{" "}
            <a href="http://ergast.com/mrd/">Ergast API</a>.
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            Countries data was obtained through{" "}
            <a href="https://restcountries.eu/">REST Countries API</a>.
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h5>Disclaimer</h5>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            This website was developed for learning and educational purposes
            only.
          </Col>
        </Row>
        <br/>
        <Row className="justify-content-md-center">
          <Col md={7}>
            <p>
              This website is unofficial and is not associated in any way with
              the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA
              ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade
              marks of Formula One Licensing B.V.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
