import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Alert from "react-bootstrap/Alert";
import { convertDate, getLocalRaceDate } from "../../helpers/Helpers";
import { CountriesCodeNationality } from "../../data/CountryCodeNationality";

const RaceInfo = ({ race }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [loadigCountryCode, setLoadingCountryCode] = useState(true);

  useEffect(() => {
    const fetchCountryCode = async () => {
      await fetch(
        `https://restcountries.eu/rest/v2/name/${race.Circuit.Location.country}?fullText=true`
      )
        .then((res) => res.json())
        .then((result) => {
          setCountryCode(result[0].alpha2Code.toLowerCase());
          setLoadingCountryCode(false);
        })
        .catch((error) => {
          setCountryCode(
            CountriesCodeNationality[
              race.Circuit.Location.country
            ].toLowerCase()
          );
          setLoadingCountryCode(false);
        });
    };

    fetchCountryCode();
  }, [race.Circuit.Location.country]);

  return (
    <Row className="center-xs justify-content-between">
      <Col xs={12} md={12} lg="auto" className="text-center">
        <CircleFlag
          countryCode={loadigCountryCode ? null : countryCode}
          height={80}
          style={{ marginBottom: "2%" }}
        />
      </Col>
      <Col xs={12} md={12} lg="auto">
        <Link to={"/race/" + race.season + "/" + race.round}>
          <Alert variant="primary">Round #{race.round}</Alert>
        </Link>
      </Col>
      <Col xs={12} md={12} lg={6} className="center-xs">
        <h3>{race.raceName.toUpperCase()}</h3>
        <h5>{race.Circuit.circuitName}</h5>
      </Col>
      <Col xs={12} md={12} lg={3} className="center-xs center">
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

export default RaceInfo;
