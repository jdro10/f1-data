import React from "react";
import Col from "react-bootstrap/Col";
import Countdown from "react-countdown";

const ClockCountdown = ({ date, time }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        <Col xs={3} sm={2} lg={1}>
          <h1>{days}</h1>
          <h5>days</h5>
        </Col>
        <Col xs={3} sm={2} lg={1}>
          <h1>{hours}</h1>
          <h5>hour.</h5>
        </Col>
        <Col xs={3} sm={2} lg={1}>
          <h1>{minutes}</h1>
          <h5>min.</h5>
        </Col>
        <Col xs={3} sm={2} lg={1}>
          <h1>{seconds}</h1>
          <h5>sec.</h5>
        </Col>
      </>
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

export default ClockCountdown;
