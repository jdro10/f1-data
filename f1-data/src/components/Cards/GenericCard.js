import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { ThemeContext } from "../../helpers/ThemeContext";

const GenericCard = ({ cardTitle, cardBody, cardFooter, cardHeight }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      style={{ height: cardHeight }}
      className="text-center"
      bg={theme}
      text={theme === "light" ? "dark" : "light"}
    >
      <Card.Header>{cardTitle}</Card.Header>
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
