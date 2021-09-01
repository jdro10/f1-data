import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Countdown from "react-countdown";

const ClockCoutdown = ({ date, time }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Row
        style={{ marginTop: "1%" }}
        className="justify-content-center text-center"
      >
        <Col xs={3} sm={2} lg={1}>
          <h1>{days}</h1>
          <h5>days</h5>
        </Col>
        <Col xs={3} sm={2} lg={1}>
          <h1>{hours}</h1>
          <h5>hours</h5>
        </Col>
        <Col xs={3} sm={2} lg={1}>
          <h1>{minutes}</h1>
          <h5>min.</h5>
        </Col>
        <Col xs={3} sm={2} lg={1}>
          <h1>{seconds}</h1>
          <h5>sec.</h5>
        </Col>
      </Row>
    );
  };

  return (
    <Countdown
      date={
        Date.now() +
        (new Date(date).getTime() +
          time.split(":")[0] * 3600000 -
          new Date().getTime())
      }
      renderer={renderer}
    />
  );
};

export default ClockCoutdown;
