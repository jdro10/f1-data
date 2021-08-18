import React from "react";
import Card from "react-bootstrap/Card";

const GenericCard = ({ cardTitle, cardBody, cardHeight }) => {
  return (
    <Card style={{ height: cardHeight }}>
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Body>{cardBody}</Card.Body>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Source: -</small>
      </Card.Footer>
    </Card>
  );
};

export default GenericCard;
