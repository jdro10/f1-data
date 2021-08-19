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
            <FaGithub size={40}/>
          </Col>
          <Col>
            <FaReact size={40}/>
          </Col>
          <Col>
            <IoLogoJavascript size={40}/>
          </Col>
          <Col>
            <FaHtml5 size={40}/>
          </Col>
          <Col>
            <FaCss3Alt size={40}/>
          </Col>
          <Col>
            <BsBootstrap size={40}/>
          </Col>
          <Col>
            <SiVisualstudiocode size={40}/>
          </Col>
          <Col>
            <IoLogoNpm size={40}/>
          </Col>
          
        </Row>
        <Row className="justify-content-md-center" id="lastRow">
          <Col>
            <p id="author">2021 Jorge Oliveira</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
