import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { ThemeContext } from "../../helpers/ThemeContext";

const GenericCard = ({cardBody, cardHeight }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      style={{ height: cardHeight, borderRadius: "15px", overflow: "hidden" }}
      className="text-center generic-card"
      bg={theme}
      text={theme === "light" ? "dark" : "light"}
    >
      <Card.Body>
        <Row className="justify-content-md-center">{cardBody}</Row>
      </Card.Body>
    </Card>
  );
};

export default GenericCard;
