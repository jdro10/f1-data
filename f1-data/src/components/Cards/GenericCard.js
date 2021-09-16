import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const GenericCard = ({ cardTitle, cardBody, cardFooter, cardHeight }) => {
  const theme = localStorage.getItem("theme");

  return (
    <Card
      style={{ height: cardHeight }}
      className="text-center"
      bg={theme}
      text={theme === "light" ? "dark" : "light"}
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
