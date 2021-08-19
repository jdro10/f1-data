import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const GenericCard = ({ cardTitle, cardBody, cardFooter, cardHeight }) => {
  return (
    <Card style={{ height: cardHeight }} className="text-center">
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Body>
          <Row className="justify-content-md-center">{cardBody}</Row>
        </Card.Body>
      </Card.Body>
      <Card.Footer>{cardFooter}</Card.Footer>
    </Card>
  );
};

export default GenericCard;
