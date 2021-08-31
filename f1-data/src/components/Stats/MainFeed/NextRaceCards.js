import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Button from "react-bootstrap/Button";
import Countdown from "react-countdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/RaceCountdown.css";

const NextRaceCard = ({ nextRaceData }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [loadingCountryCode, setLoadingCountryCode] = useState(true);

  useEffect(() => {
    const fetchCountryCode = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${nextRaceData.Circuit.Location.country}?fullText=true`
      );
      const data = await response.json();

      setCountryCode(data[0].alpha2Code);
      setLoadingCountryCode(false);
    };

    fetchCountryCode();
  }, [nextRaceData.Circuit.Location.country]);

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Row
        style={{ marginTop: "1%" }}
        className="justify-content-center text-center"
      >
        <Col xs={3} sm={1}>
          <h1>{days}</h1>
          <h5>days</h5>
        </Col>
        <Col xs={3} sm={1}>
          <h1>{hours}</h1>
          <h5>hours</h5>
        </Col>
        <Col xs={3} sm={1}>
          <h1>{minutes}</h1>
          <h5>min.</h5>
        </Col>
        <Col xs={3} sm={1}>
          <h1>{seconds}</h1>
          <h5>sec.</h5>
        </Col>
      </Row>
    );
  };

  return (
    <GenericCard
      cardTitle="Next race"
      cardBody={
        <div>
          <h5>Round {nextRaceData.round}</h5>
          <h1>{nextRaceData.raceName}</h1>
          <h6>
            {nextRaceData.Circuit.circuitName +
              " | " +
              nextRaceData.date +
              " | " +
              nextRaceData.time.substring(0, nextRaceData.time.length - 1)}
          </h6>
          {loadingCountryCode ? (
            ""
          ) : (
            <CircleFlag countryCode={countryCode.toLowerCase()} height={100} />
          )}
          <div>
            <Countdown
              date={
                Date.now() +
                (new Date(nextRaceData.date).getTime() +
                  nextRaceData.time.split(":")[0] * 3600000 -
                  new Date().getTime())
              }
              renderer={renderer}
            />
          </div>
        </div>
      }
      cardFooter={
        <Link to={"/race/" + nextRaceData.season + "/" + nextRaceData.round}>
          <Button variant="dark">Race information</Button>
        </Link>
      }
      cardHeight="30rem"
      variant={"light"}
    ></GenericCard>
  );
};

export default NextRaceCard;
