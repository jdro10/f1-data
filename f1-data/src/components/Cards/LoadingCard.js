import React from "react";
import Row from "react-bootstrap/Row";
import Placeholder from "react-bootstrap/Placeholder";
import GenericCard from "../Cards/GenericCard";

const LoadingCard = ({ cardHeight, hasButton, hasFlag }) => {
  return (
    <GenericCard
      cardBody={
        <div>
          <Row className="justify-content-center text-center">
            <Placeholder animation="glow">
              <Placeholder xs={8} bg="primary" />
            </Placeholder>
          </Row>

          <Row className="justify-content-center text-center">
            <Placeholder animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
          </Row>

          <Row className="justify-content-center text-center">
            <Placeholder animation="glow">
              <Placeholder xs={4} />
            </Placeholder>
          </Row>

          <Row className="justify-content-center text-center">
            <Placeholder animation="glow">
              <Placeholder xs={2} />
            </Placeholder>
          </Row>

          {hasFlag ? (
            <Row className="justify-content-center text-center">
              <div className="circle"></div>
            </Row>
          ) : null}

          <Row
            className="justify-content-center text-center"
            style={{ marginTop: "5%" }}
          >
            <Placeholder animation="glow">
              <Placeholder xs={1} /> <Placeholder xs={1} />{" "}
              <Placeholder xs={1} /> <Placeholder xs={1} />
            </Placeholder>
          </Row>

          {hasButton ? (
            <Row className="justify-content-center text-center">
              <Placeholder.Button
                variant="black"
                xs={6}
                className="btn-bottom"
              />
            </Row>
          ) : null}
        </div>
      }
      cardHeight={cardHeight}
    />
  );
};

export default LoadingCard;
