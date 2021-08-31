import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircleFlag } from "react-circle-flags";

const RaceTab = ({ raceInfo, eventCountryCode }) => {
  const getLocalRaceDate = (date, time) => {
    const raceDate = new Date(date + "T" + time);
    const hours = (raceDate.getHours() < 10 ? "0" : "") + raceDate.getHours();
    const minutes =
      (raceDate.getMinutes() < 10 ? "0" : "") + raceDate.getMinutes();

    return hours + ":" + minutes + ":00";
  };

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
              ? getLocalRaceDate(raceInfo.date, raceInfo.time)
              : "N/A"}
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <CircleFlag countryCode={eventCountryCode} height="50" />
        </Col>
      </Row>
    </div>
  );
};

export default RaceTab;
