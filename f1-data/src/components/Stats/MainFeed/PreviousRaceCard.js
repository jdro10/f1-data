import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";
import Button from "react-bootstrap/Button";

const PreviousRaceCard = ({ previousRaceData }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [loadingCountryCode, setLoadingCountryCode] = useState(true);

  useEffect(() => {
    const fetchCountryCode = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${previousRaceData.MRData.RaceTable.Races[0].Circuit.Location.country}?fullText=true`
      );
      const data = await response.json();

      setCountryCode(data[0].alpha3Code);
      setLoadingCountryCode(false);
    };

    fetchCountryCode();
  }, [previousRaceData.MRData.RaceTable.Races]);

  return (
    <GenericCard
      cardTitle={
        "Previous race - " + previousRaceData.MRData.RaceTable.Races[0].date
      }
      cardBody={
        <div>
          <h4>Round {previousRaceData.MRData.RaceTable.round}</h4>
          <h2>
            {previousRaceData.MRData.RaceTable.Races[0].raceName +
              " - " +
              previousRaceData.MRData.RaceTable.Races[0].Circuit.circuitName}
          </h2>
          {loadingCountryCode ? "" : <Flag code={countryCode} height="50" />}
        </div>
      }
      cardFooter={
        <Link
          to={
            "/race/" +
            previousRaceData.MRData.RaceTable.season +
            "/" +
            previousRaceData.MRData.RaceTable.round
          }
        >
          <Button variant="dark">Race result</Button>
        </Link>
      }
      cardHeight="24rem"
      variant={"light"}
    ></GenericCard>
  );
};

export default PreviousRaceCard;
