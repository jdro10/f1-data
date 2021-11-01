import React from "react";
import Col from "react-bootstrap/Col";
import Countdown from "react-countdown";

const ClockCountdown = ({ date, time }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Col>
          <h1>RACE IN PROGRESS</h1>
          <h5>WAITING FOR RACE RESULTS</h5>
        </Col>
      );
    } else {
      return (
        <>
          <Col xs={3} lg={1}>
            <h1>{days}</h1>
            <h5>DAYS</h5>
          </Col>

          <Col xs={3} lg={1}>
            <h1>{hours}</h1>
            <h5>HRS</h5>
          </Col>

          <Col xs={3} lg={1}>
            <h1>{minutes}</h1>
            <h5>MIN</h5>
          </Col>

          <Col xs={3} lg={1}>
            <h1>{seconds}</h1>
            <h5>SEC</h5>
          </Col>
        </>
      );
    }
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
