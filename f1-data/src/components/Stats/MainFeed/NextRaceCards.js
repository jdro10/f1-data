import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import Button from "react-bootstrap/Button";
import Countdown from "react-countdown";

const NextRaceCard = ({ nextRaceData }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [loadingCountryCode, setLoadingCountryCode] = useState(true);

  useEffect(() => {
    const fetchCountryCode = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${nextRaceData.Circuit.Location.country}?fullText=true`
      );
      const data = await response.json();

      setCountryCode(data[0].alpha3Code);
      setLoadingCountryCode(false);
    };

    fetchCountryCode();
  }, [nextRaceData.Circuit.Location.country]);

  return (
    <GenericCard
      cardTitle={"Next race - " + nextRaceData.date}
      cardBody={
        <div>
          <h4>Round {nextRaceData.round}</h4>
          <h3>{nextRaceData.raceName + " - " + nextRaceData.Circuit.circuitName}</h3>
          {loadingCountryCode ? "" : <Flag code={countryCode} height="50" />}
          <h2>
            <Countdown
              date={
                Date.now() +
                (new Date(nextRaceData.date).getTime() +
                  nextRaceData.time.split(":")[0] * 3600000 -
                  new Date().getTime())
              }
            />
          </h2>
        </div>
      }
      cardFooter={
        <Link to={"/race/" + nextRaceData.season + "/" + nextRaceData.round}>
          <Button variant="primary">Race information</Button>
        </Link>
      }
      cardHeight="24rem"
      variant={"light"}
    ></GenericCard>
  );
};

export default NextRaceCard;
