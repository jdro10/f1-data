import React, { useState, useEffect } from "react";
import GenericCard from "../../Cards/GenericCard";
import { Link } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import Button from "react-bootstrap/Button";
import ClockCoutdown from "../../Countdown/ClockCountdown";
import { convertDate, getLocalRaceDate } from "../../../helpers/Helpers";
import { CountriesCodeNationality } from "../../../data/CountryCodeNationality";

const boldFont = {
  fontWeight: 600,
};

const NextRaceCard = ({ nextRace }) => {
  const theme = localStorage.getItem("theme");
  const [countryCode, setCountryCode] = useState(null);
  const [loadingCountryCode, setLoadingCountryCode] = useState(true);

  useEffect(() => {
    const fetchCountryCode = async () => {
      await fetch(
        `https://restcountries.eu/rest/v2/name/${nextRace.Circuit.Location.country}?fullText=true`
      )
        .then((res) => res.json())
        .then((result) => {
          setCountryCode(result[0].alpha2Code);
          setLoadingCountryCode(false);
        })
        .catch((error) => {
          setCountryCode(
            CountriesCodeNationality[
              nextRace.Circuit.Location.country
            ].toLowerCase()
          );
          setLoadingCountryCode(false);
        });
    };

    fetchCountryCode();
  }, [nextRace.Circuit.Location.country]);

  return (
    <GenericCard
      cardTitle="NEXT RACE"
      cardBody={
        <>
          <h5>Round {nextRace.round}</h5>
          <h1 style={boldFont}>{nextRace.raceName.toUpperCase()}</h1>
          <h5>{nextRace.Circuit.circuitName}</h5>
          <h6>{convertDate(nextRace.date)}</h6>
          <h6>{getLocalRaceDate(nextRace.date, nextRace.time)}</h6>
          {loadingCountryCode ? null : (
            <CircleFlag countryCode={countryCode.toLowerCase()} height={100} />
          )}
          <p></p>
          <ClockCoutdown date={nextRace.date} time={nextRace.time} />
        </>
      }
      cardFooter={
        <Link to={`/race/${nextRace.season}/${nextRace.round}`}>
          <Button variant={theme === "light" ? "dark" : "light"}>
            Race information
          </Button>
        </Link>
      }
      cardHeight="32rem"
    />
  );
};

export default NextRaceCard;
