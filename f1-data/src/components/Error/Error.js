import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiError } from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container style={{ minHeight: "550px" }}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <BiError size={300} />
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Ups... Something went wrong!</h1>
        </Col>
      </Row>
      
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Link to="">
            <RiArrowGoBackLine size={50} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
