import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Button from "react-bootstrap/Button";
import ClockCoutdown from "../../Countdown/ClockCountdown";

const NextRaceCard = ({ nextRaceData }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [loadingCountryCode, setLoadingCountryCode] = useState(true);

  useEffect(() => {
    const fetchCountryCode = async () => {
      await fetch(
        `https://restcountries.eu/rest/v2/name/${nextRaceData.Circuit.Location.country}?fullText=true`
      )
        .then((res) => res.json())
        .then((result) => {
          setCountryCode(result[0].alpha2Code);
          setLoadingCountryCode(false);
        });
    };

    fetchCountryCode();
  }, [nextRaceData.Circuit.Location.country]);

  return (
    <GenericCard
      cardTitle="Next race"
      cardBody={
        <>
          <h5>Round {nextRaceData.round}</h5>
          <h1>{nextRaceData.raceName}</h1>
          <h6>
            {nextRaceData.Circuit.circuitName} | {nextRaceData.date} |{" "}
            {nextRaceData.time.substring(0, nextRaceData.time.length - 1)}
          </h6>
          {loadingCountryCode ? null : (
            <CircleFlag countryCode={countryCode.toLowerCase()} height={100} />
          )}
          <ClockCoutdown date={nextRaceData.date} time={nextRaceData.time} />
        </>
      }
      cardFooter={
        <Link to={`/race/${nextRaceData.season}/${nextRaceData.round}`}>
          <Button variant="dark">Race information</Button>
        </Link>
      }
      cardHeight="30rem"
      variant={"light"}
    />
  );
};

export default NextRaceCard;
