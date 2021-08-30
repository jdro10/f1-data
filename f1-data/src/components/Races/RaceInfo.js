import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";

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
          setCountryCode(data[0].alpha3Code);
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
    <Container>
      <Row className="justify-content-md-center text-center">
        <Col xs={12} md="auto">
          {loadigCountryCode && countryCode != null ? (
            ""
          ) : (
            <Flag code={countryCode} height="40" />
          )}
        </Col>

        <Col xs={12} md="auto">
          <h3>#{race.round}</h3>
        </Col>

        <Col xs={12} md="auto">
          <h3>{race.raceName}</h3>
        </Col>

        <Col xs={12} md="auto">
          <h3>{race.Circuit.Location.country}</h3>
        </Col>

        <Col xs={12} md="auto">
          <h3>{race.date}</h3>
        </Col>

        <Col xs={12} md="auto">
          <h3>
            {race.hasOwnProperty("time")
              ? getLocalRaceDate(race.date, race.time)
              : "N/A"}
          </h3>
        </Col>

        <Col xs={12} md="auto">
          <Link to={"/race/" + race.season + "/" + race.round}>
            <BsBoxArrowUpRight size={35} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default RaceInfo;
