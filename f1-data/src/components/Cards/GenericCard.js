import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const GenericCard = ({
  cardTitle,
  cardBody,
  cardFooter,
  cardHeight,
  variant,
}) => {
  return (
    <Card
      style={{ height: cardHeight }}
      className="text-center"
      bg={variant}
      text={variant === "light" ? "dark" : "white"}
    >
      <Card.Header>
        <b>{cardTitle}</b>
      </Card.Header>
      <Card.Body>
        <Row className="justify-content-md-center">{cardBody}</Row>
      </Card.Body>
      {cardFooter !== undefined ? (
        <Card.Footer>{cardFooter}</Card.Footer>
      ) : null}
    </Card>
  );
};

export default GenericCard;
