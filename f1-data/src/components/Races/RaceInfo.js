import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Alert from "react-bootstrap/Alert";

const RaceInfo = ({ race }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [loadigCountryCode, setLoadingCountryCode] = useState(true);

  useEffect(() => {
    const fetchCountryCode = async () => {
      await fetch(
        `https://restcountries.eu/rest/v2/name/${race.Circuit.Location.country}?fullText=true`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setCountryCode(data[0].alpha2Code.toLowerCase());
          setLoadingCountryCode(false);
        })
        .catch((error) => setCountryCode(null));
    };

    fetchCountryCode();
  }, [race.Circuit.Location.country]);

  const getLocalRaceDate = (date, time) => {
    const raceDate = new Date(date + "T" + time);
    const hours = (raceDate.getHours() < 10 ? "0" : "") + raceDate.getHours();
    const minutes =
      (raceDate.getMinutes() < 10 ? "0" : "") + raceDate.getMinutes();

    return hours + ":" + minutes + ":00";
  };

  return (
    <Row className="center-xs justify-content-between">
      <Col xs={12} md={12} lg="auto" className="text-center">
        {loadigCountryCode && countryCode != null ? (
          ""
        ) : (
          <CircleFlag countryCode={countryCode} height={80} />
        )}
      </Col>
      <Col xs={12} md={12} lg="auto">
        <Link to={"/race/" + race.season + "/" + race.round}>
          <Alert variant="primary">Round #{race.round}</Alert>
        </Link>
      </Col>
      <Col xs={12} md={12} lg={6} className="center-xs">
        <h3>{race.raceName}</h3>
        <h5>{race.Circuit.circuitName}</h5>
      </Col>
      <Col xs={12} md={12} lg={3} className="center-xs center">
        <h5>{race.date}</h5>
        <h5>
          {race.hasOwnProperty("time")
            ? getLocalRaceDate(race.date, race.time)
            : ""}
        </h5>
      </Col>
    </Row>
  );
};

export default RaceInfo;
