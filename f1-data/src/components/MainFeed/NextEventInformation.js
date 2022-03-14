import React from "react";
import GenericCard from "../Cards/GenericCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClockCountdown from "../Countdown/ClockCountdown";
import { FaFlagCheckered } from "react-icons/fa";
import { convertDate, getLocalRaceDate } from "../../helpers/Helpers";

const NextEventInformation = ({ nextEvent }) => {
  var cardHeight = "9rem";
  var smallFont = {
    fontSize: "16px",
  };

  return (
    <Row className="justify-content-center text-center g-2">
      {nextEvent.Sprint === undefined ? (
        <>
          <Col xs="12" xl="3">
            <GenericCard
              cardTitle={
                <>
                  FREE PRACTICE 1 <FaFlagCheckered />
                </>
              }
              cardBody={
                <ClockCountdown
                  date={nextEvent.FirstPractice.date}
                  time={nextEvent.FirstPractice.time}
                  size="small"
                />
              }
              cardFooter={
                <p style={smallFont}>
                  {convertDate(nextEvent.FirstPractice.date)} -{" "}
                  {getLocalRaceDate(
                    nextEvent.FirstPractice.date,
                    nextEvent.FirstPractice.time
                  )}
                </p>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardTitle={
                <>
                  FREE PRACTICE 2 <FaFlagCheckered />
                </>
              }
              cardBody={
                <ClockCountdown
                  date={nextEvent.SecondPractice.date}
                  time={nextEvent.SecondPractice.time}
                  size="small"
                />
              }
              cardFooter={
                <p style={smallFont}>
                  {convertDate(nextEvent.SecondPractice.date)} -{" "}
                  {getLocalRaceDate(
                    nextEvent.SecondPractice.date,
                    nextEvent.SecondPractice.time
                  )}
                </p>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardTitle={
                <>
                  FREE PRACTICE 3 <FaFlagCheckered />
                </>
              }
              cardBody={
                <ClockCountdown
                  date={nextEvent.ThirdPractice.date}
                  time={nextEvent.ThirdPractice.time}
                  size="small"
                />
              }
              cardFooter={
                <p style={smallFont}>
                  {convertDate(nextEvent.ThirdPractice.date)} -{" "}
                  {getLocalRaceDate(
                    nextEvent.ThirdPractice.date,
                    nextEvent.ThirdPractice.time
                  )}
                </p>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardTitle={
                <>
                  QUALIFYING <FaFlagCheckered />
                </>
              }
              cardBody={
                <ClockCountdown
                  date={nextEvent.Qualifying.date}
                  time={nextEvent.Qualifying.time}
                  size="small"
                />
              }
              cardFooter={
                <p style={smallFont}>
                  {convertDate(nextEvent.Qualifying.date)} -{" "}
                  {getLocalRaceDate(
                    nextEvent.Qualifying.date,
                    nextEvent.Qualifying.time
                  )}
                </p>
              }
              cardHeight={cardHeight}
            />
          </Col>
        </>
      ) : (
        <>
          <Col xs="12" xl="3">
            <GenericCard
              cardTitle={
                <>
                  FREE PRACTICE 1 <FaFlagCheckered />
                </>
              }
              cardBody={
                <ClockCountdown
                  date={nextEvent.FirstPractice.date}
                  time={nextEvent.FirstPractice.time}
                  size="small"
                />
              }
              cardFooter={
                <p style={smallFont}>
                  {convertDate(nextEvent.FirstPractice.date)} -{" "}
                  {getLocalRaceDate(
                    nextEvent.FirstPractice.date,
                    nextEvent.FirstPractice.time
                  )}
                </p>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardTitle={
                <>
                  QUALIFYING <FaFlagCheckered />
                </>
              }
              cardBody={
                <ClockCountdown
                  date={nextEvent.Qualifying.date}
                  time={nextEvent.Qualifying.time}
                  size="small"
                />
              }
              cardFooter={
                <p style={smallFont}>
                  {convertDate(nextEvent.Qualifying.date)} -{" "}
                  {getLocalRaceDate(
                    nextEvent.Qualifying.date,
                    nextEvent.Qualifying.time
                  )}
                </p>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardTitle={
                <>
                  FREE PRACTICE 2 <FaFlagCheckered />
                </>
              }
              cardBody={
                <ClockCountdown
                  date={nextEvent.SecondPractice.date}
                  time={nextEvent.SecondPractice.time}
                  size="small"
                />
              }
              cardFooter={
                <p style={smallFont}>
                  {convertDate(nextEvent.SecondPractice.date)} -{" "}
                  {getLocalRaceDate(
                    nextEvent.SecondPractice.date,
                    nextEvent.SecondPractice.time
                  )}
                </p>
              }
              cardHeight={cardHeight}
            />
          </Col>
          <Col xs="12" xl="3">
            <GenericCard
              cardTitle={
                <>
                  SPRINT QUALIFYING <FaFlagCheckered />
                </>
              }
              cardBody={
                <>
                  <ClockCountdown
                    date={nextEvent.Sprint.date}
                    time={nextEvent.Sprint.time}
                    size="small"
                  />
                </>
              }
              cardFooter={
                <p style={smallFont}>
                  {convertDate(nextEvent.Sprint.date)} -{" "}
                  {getLocalRaceDate(
                    nextEvent.Sprint.date,
                    nextEvent.Sprint.time
                  )}
                </p>
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
