import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Flag from "react-world-flags";

const RaceTab = ({ raceInfo, eventCountryCode }) => {
  return (
    <div>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <h1>{raceInfo.raceName}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <h3>{raceInfo.date}</h3>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <h3>
            {raceInfo.hasOwnProperty("time")
              ? raceInfo.time.substring(0, raceInfo.time.length - 1)
              : "N/A"}
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <Flag code={eventCountryCode} height="50" />
        </Col>
      </Row>
    </div>
  );
};

export default RaceTab;
