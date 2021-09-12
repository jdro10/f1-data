import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Button from "react-bootstrap/Button";
import ClockCoutdown from "../../Countdown/ClockCountdown";
import { getLocalRaceDate } from "../../../helpers/Helpers";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";

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
        })
        .catch((error) => {
          setCountryCode(
            CountriesCodeNationality[
              nextRaceData.Circuit.Location.country
            ].toLowerCase()
          );
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
          <h5>{nextRaceData.Circuit.circuitName}</h5>
          <h6>{nextRaceData.date}</h6>
          <h6>{getLocalRaceDate(nextRaceData.date, nextRaceData.time)}</h6>
          {loadingCountryCode ? null : (
            <CircleFlag countryCode={countryCode.toLowerCase()} height={100} />
          )}
          <p></p>
          <ClockCoutdown date={nextRaceData.date} time={nextRaceData.time} />
        </>
      }
      cardFooter={
        <Link to={`/race/${nextRaceData.season}/${nextRaceData.round}`}>
          <Button variant="dark">Race information</Button>
        </Link>
      }
      cardHeight="32rem"
      variant={"light"}
    />
  );
};

export default NextRaceCard;
