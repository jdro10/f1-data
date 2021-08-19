import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const GenericCard = ({ cardTitle, cardBody, cardHeight }) => {
  return (
    <Card style={{ height: cardHeight }}>
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Container>
          <Card.Body>
            <Row className="justify-content-md-center">{cardBody}</Row>
          </Card.Body>
        </Container>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Source: -</small>
      </Card.Footer>
    </Card>
  );
};

export default GenericCard;
