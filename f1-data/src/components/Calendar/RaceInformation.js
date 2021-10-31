import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Alert from "react-bootstrap/Alert";
import { convertDate, getLocalRaceDate } from "../../helpers/Helpers";
import { CountriesCodeNationality } from "../../data/CountryCodeNationality";

const RaceInformation = ({ race }) => {
  return (
    <Row className="center-xs justify-content-between g-0">
      <Col xs={12} lg="auto" className="text-center">
        <CircleFlag
          countryCode={CountriesCodeNationality[
            race.Circuit.Location.country
          ].toLowerCase()}
          height={75}
          style={{ marginBottom: "2%" }}
        />
      </Col>
      <Col xs={12} lg="auto" className="align-self-center">
        <Link to={`/race/${race.season}/${race.round}`}>
          <Alert variant="primary">Round #{race.round}</Alert>
        </Link>
      </Col>
      <Col xs={12} lg={6} className="center-xs align-self-center">
        <h3>{race.raceName.toUpperCase()}</h3>
        <h5>{race.Circuit.circuitName}</h5>
      </Col>
      <Col xs={12} lg={3} className="center-xs center align-self-center">
        <h5>{convertDate(race.date)}</h5>
        <h5>
          {race.hasOwnProperty("time")
            ? getLocalRaceDate(race.date, race.time)
            : null}
        </h5>
      </Col>
    </Row>
  );
};

export default RaceInformation;
