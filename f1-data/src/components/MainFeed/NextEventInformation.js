import React from "react";
import GenericCard from "../Cards/GenericCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClockCountdown from "../Countdown/ClockCountdown";
import { convertDate, getLocalRaceDate } from "../../helpers/Helpers";

const NextEventInformation = ({ nextEvent }) => {
  var cardHeight = "8rem";
  var smallFont = {
    fontSize: "16px",
  };

  return (
    <Row className="justify-content-center text-center g-2">
      {nextEvent.Sprint === undefined ? (
        <>
          <Col xs="12" xl="3">
            <GenericCard
              cardBody={
                <>
                  <Row>
                    <h4>FREE PRACTICE 1</h4>
                  </Row>
                  <Row>
                    <ClockCountdown
                      date={nextEvent.FirstPractice.date}
                      time={nextEvent.FirstPractice.time}
                      size="small"
                    />
                  </Row>
                  <Row>
                    <p style={smallFont}>
                      {convertDate(nextEvent.FirstPractice.date)} -{" "}
                      {getLocalRaceDate(
                        nextEvent.FirstPractice.date,
                        nextEvent.FirstPractice.time
                      )}
                    </p>
                  </Row>
                </>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardBody={
                <>
                  <Row>
                    <h4>FREE PRACTICE 2</h4>
                  </Row>
                  <Row>
                    <ClockCountdown
                      date={nextEvent.SecondPractice.date}
                      time={nextEvent.SecondPractice.time}
                      size="small"
                    />
                  </Row>
                  <Row>
                    <p style={smallFont}>
                      {convertDate(nextEvent.SecondPractice.date)} -{" "}
                      {getLocalRaceDate(
                        nextEvent.SecondPractice.date,
                        nextEvent.SecondPractice.time
                      )}
                    </p>
                  </Row>
                </>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardBody={
                <>
                  <Row>
                    <h4>FREE PRACTICE 3</h4>
                  </Row>
                  <Row>
                    <ClockCountdown
                      date={nextEvent.ThirdPractice.date}
                      time={nextEvent.ThirdPractice.time}
                      size="small"
                    />
                  </Row>
                  <Row>
                    <p style={smallFont}>
                      {convertDate(nextEvent.ThirdPractice.date)} -{" "}
                      {getLocalRaceDate(
                        nextEvent.ThirdPractice.date,
                        nextEvent.ThirdPractice.time
                      )}
                    </p>
                  </Row>
                </>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardBody={
                <>
                  <Row>
                    <h4>QUALIFYING</h4>
                  </Row>
                  <Row>
                    <ClockCountdown
                      date={nextEvent.Qualifying.date}
                      time={nextEvent.Qualifying.time}
                      size="small"
                    />
                  </Row>
                  <Row>
                    <p style={smallFont}>
                      {convertDate(nextEvent.Qualifying.date)} -{" "}
                      {getLocalRaceDate(
                        nextEvent.Qualifying.date,
                        nextEvent.Qualifying.time
                      )}
                    </p>
                  </Row>
                </>
              }
              cardHeight={cardHeight}
            />
          </Col>
        </>
      ) : (
        <>
          <Col xs="12" xl="3">
            <GenericCard
              cardBody={
                <>
                  <Row>
                    <h4>FREE PRACTICE 1</h4>
                  </Row>
                  <Row>
                    <ClockCountdown
                      date={nextEvent.FirstPractice.date}
                      time={nextEvent.FirstPractice.time}
                      size="small"
                    />
                  </Row>
                  <Row>
                    <p style={smallFont}>
                      {convertDate(nextEvent.FirstPractice.date)} -{" "}
                      {getLocalRaceDate(
                        nextEvent.FirstPractice.date,
                        nextEvent.FirstPractice.time
                      )}
                    </p>
                  </Row>
                </>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardBody={
                <>
                  <Row>
                    <h4>QUALIFYING</h4>
                  </Row>
                  <Row>
                    <ClockCountdown
                      date={nextEvent.Qualifying.date}
                      time={nextEvent.Qualifying.time}
                      size="small"
                    />
                  </Row>
                  <Row>
                    <p style={smallFont}>
                      {convertDate(nextEvent.Qualifying.date)} -{" "}
                      {getLocalRaceDate(
                        nextEvent.Qualifying.date,
                        nextEvent.Qualifying.time
                      )}
                    </p>
                  </Row>
                </>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardBody={
                <>
                  <Row>
                    <h4>FREE PRACTICE 2</h4>
                  </Row>
                  <Row>
                    <ClockCountdown
                      date={nextEvent.SecondPractice.date}
                      time={nextEvent.SecondPractice.time}
                      size="small"
                    />
                  </Row>
                  <Row>
                    <p style={smallFont}>
                      {convertDate(nextEvent.SecondPractice.date)} -{" "}
                      {getLocalRaceDate(
                        nextEvent.SecondPractice.date,
                        nextEvent.SecondPractice.time
                      )}
                    </p>
                  </Row>
                </>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardBody={
                <>
                  <Row>
                    <h4>SPRINT QUALIFYING</h4>
                  </Row>
                  <Row>
                    <ClockCountdown
                      date={nextEvent.Sprint.date}
                      time={nextEvent.Sprint.time}
                      size="small"
                    />
                  </Row>
                  <Row>
                    <p style={smallFont}>
                      {convertDate(nextEvent.Sprint.date)} -{" "}
                      {getLocalRaceDate(
                        nextEvent.Sprint.date,
                        nextEvent.Sprint.time
                      )}
                    </p>
                  </Row>
                </>
              }
              cardHeight={cardHeight}
            />
          </Col>
        </>
      )}
    </Row>
  );
};

export default NextEventInformation;
