import React from "react";
import Col from "react-bootstrap/Col";
import Countdown from "react-countdown";

const ClockCountdown = ({ date, time, size }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <>
          {size === "big" ? (
            <Col>
              <h1 className="countdown-font">EVENT IN PROGRESS</h1>
              <h5 className="countdown-font">WAITING FOR RESULTS</h5>
            </Col>
          ) : size === "small" ? (
            <Col>
              <h1 className="countdown-font-small">EVENT HAS FINISHED</h1>
            </Col>
          ) : (
            <Col>
              <h1>EVENT HAS FINISHED</h1>
              <h5>WAITING FOR RESULTS</h5>
            </Col>
          )}
        </>
      );
    } else {
      return (
        <>
          {size === "big" ? (
            <>
              <Col xs={3} lg={2}>
                <h1 className="countdown-font">{days}</h1>
                <h1>DAYS</h1>
              </Col>

              <Col xs={3} lg={2}>
                <h1 className="countdown-font">{hours}</h1>
                <h1>HRS</h1>
              </Col>

              <Col xs={3} lg={2}>
                <h1 className="countdown-font">{minutes}</h1>
                <h1>MIN</h1>
              </Col>

              <Col xs={3} lg={2}>
                <h1 className="countdown-font">{seconds}</h1>
                <h1>SEC</h1>
              </Col>
            </>
          ) : size === "small" ? (
            <>
              <Col>
                <h1 className="countdown-font-small">{days} d</h1>
              </Col>

              <Col>
                <h1 className="countdown-font-small">{hours} hr</h1>
              </Col>

              <Col>
                <h1 className="countdown-font-small">{minutes} min</h1>
              </Col>

              <Col>
                <h1 className="countdown-font-small">{seconds} sec</h1>
              </Col>
            </>
          ) : (
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
          )}
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
