import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p className="info">F1 Data visualizer</p>
          </Col>
          <Col>
            <h4 className="info">API</h4>
            <p className="info">
              <a href="http://ergast.com"> Ergast API</a>
            </p>
          </Col>
        </Row>
        <Row id="lastRow">
          <p id="author" className="info">
            Jorge Oliveira
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
